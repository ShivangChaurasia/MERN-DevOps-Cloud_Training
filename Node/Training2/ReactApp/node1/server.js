const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
const { User, Course } = require('./models');

const mongoURI = process.env.MONGODB_URL || process.env.MONGO_URL;

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Auto-seed initial courses from courses.json if database collection is empty
const initDefaultCourses = async () => {
  try {
    const count = await Course.countDocuments();
    if (count === 0) {
      const coursesFilePath = path.join(__dirname, 'data', 'courses.json');
      if (fs.existsSync(coursesFilePath)) {
        const rawData = fs.readFileSync(coursesFilePath, 'utf8');
        const coursesData = JSON.parse(rawData || '[]');
        if (coursesData.length > 0) {
          const coursesToInsert = coursesData.map((c) => ({
            courseId: c.id,
            title: c.title,
            instructor: c.instructor,
            price: c.price,
            duration: c.duration,
            level: c.level,
            image: c.image
          }));
          await Course.insertMany(coursesToInsert);
          console.log(`Auto-populated ${coursesToInsert.length} initial courses into MongoDB.`);
        }
      }
    }
  } catch (error) {
    console.error('Error auto-populating initial courses:', error);
  }
};

if (!mongoURI) {
  console.error('MongoDB connection error: MONGODB_URL environment variable is missing.');
} else {
  mongoose.connect(mongoURI)
    .then(() => {
      console.log('Connected to MongoDB');
      initDefaultCourses();
    })
    .catch((err) => console.error('MongoDB connection error:', err));
}

// GET /api/courses - Fetch all courses from MongoDB
app.get('/api/courses', async (req, res) => {
  try {
    const courses = await Course.find({});
    const formattedCourses = courses.map((c) => ({
      id: c.courseId || c._id,
      _id: c._id,
      title: c.title,
      instructor: c.instructor,
      price: c.price,
      duration: c.duration,
      level: c.level,
      image: c.image
    }));
    res.json(formattedCourses);
  } catch (error) {
    console.error('Error fetching courses from MongoDB:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch courses' });
  }
});

// POST /api/courses - Add a new course directly to MongoDB when received from frontend
app.post('/api/courses', async (req, res) => {
  try {
    const { title, instructor, price, duration, level, image } = req.body;

    if (!title || !instructor || price === undefined) {
      return res.status(400).json({ success: false, message: 'Title, instructor, and price are required' });
    }

    const newCourse = await Course.create({
      title,
      instructor,
      price,
      duration: duration || 'N/A',
      level: level || 'Beginner',
      image: image || 'https://picsum.photos/400/220?random=1'
    });

    res.status(201).json({
      success: true,
      message: 'Course added successfully to database',
      course: newCourse
    });
  } catch (error) {
    console.error('Error adding course to database:', error);
    res.status(500).json({ success: false, message: 'Failed to add course' });
  }
});

// POST /api/signup - Save user data directly to MongoDB upon receiving from frontend
app.post('/api/signup', async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required' });
    }

    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User already exists with this email' });
    }

    const newUser = await User.create({
      fullName: fullName || '',
      email: email.toLowerCase(),
      password
    });

    res.status(201).json({
      success: true,
      message: 'Account created successfully',
      user: { id: newUser._id, fullName: newUser.fullName, email: newUser.email }
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ success: false, message: 'Failed to save user data' });
  }
});

// POST /api/login - Authenticate user against MongoDB database
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required' });
    }

    const existingUser = await User.findOne({ email: email.toLowerCase() });

    if (!existingUser) {
      return res.status(404).json({ success: false, message: 'User not found. Please register first.' });
    }

    if (existingUser.password !== password) {
      return res.status(401).json({ success: false, message: 'Invalid password' });
    }

    res.json({
      success: true,
      message: 'Login successful',
      user: { id: existingUser._id, fullName: existingUser.fullName, email: existingUser.email }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Server error during login' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});