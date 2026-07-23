const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
  {
    courseId: {
      type: Number,
      unique: true,
      sparse: true
    },
    title: {
      type: String,
      required: [true, 'Course title is required'],
      trim: true
    },
    instructor: {
      type: String,
      required: [true, 'Instructor name is required'],
      trim: true
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price cannot be negative']
    },
    duration: {
      type: String,
      required: [true, 'Duration is required'],
      trim: true
    },
    level: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
      default: 'Beginner'
    },
    image: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Course', courseSchema);
