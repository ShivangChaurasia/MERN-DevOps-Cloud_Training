const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const coursesFilePath = path.join(__dirname, 'data', 'courses.json');
const usersFilePath = path.join(__dirname, 'data', 'users.json');

// Helper to read JSON file
const readJsonFile = (filePath) => {
  try {
    if (!fs.existsSync(filePath)) {
      return [];
    }
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data || '[]');
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
    return [];
  }
};

// Helper to write JSON file
const writeJsonFile = (filePath, data) => {
  try {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error(`Error writing ${filePath}:`, error);
    return false;
  }
};

// GET /api/courses
app.get('/api/courses', (req, res) => {
  const courses = readJsonFile(coursesFilePath);
  res.json(courses);
});

// POST /api/signup
app.post('/api/signup', (req, res) => {
  const { fullName, email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required' });
  }

  const users = readJsonFile(usersFilePath);

  const existingUser = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (existingUser) {
    return res.status(400).json({ success: false, message: 'User already exists with this email' });
  }

  const newUser = {
    id: Date.now(),
    fullName: fullName || '',
    email,
    password
  };

  users.push(newUser);
  const isSaved = writeJsonFile(usersFilePath, users);

  if (isSaved) {
    res.status(201).json({ success: true, message: 'Account created successfully' });
  } else {
    res.status(500).json({ success: false, message: 'Failed to save user data' });
  }
});

// POST /api/login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required' });
  }

  const users = readJsonFile(usersFilePath);

  const existingUser = users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase()
  );

  if (!existingUser) {
    return res.status(404).json({ success: false, message: 'User not found. Please register first.' });
  }

  if (existingUser.password !== password) {
    return res.status(401).json({ success: false, message: 'Invalid password' });
  }

  res.json({
    success: true,
    message: 'Login successful',
    user: { id: existingUser.id, fullName: existingUser.fullName, email: existingUser.email }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});