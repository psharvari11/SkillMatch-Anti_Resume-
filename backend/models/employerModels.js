const mongoose = require('mongoose');

const employerSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
    trim: true,
  },
  industry: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [6, 'Password must be at least 6 characters long'],
  },
}, {
  timestamps: true,
});

const employerModel = mongoose.model('Employer', employerSchema);

module.exports = employerModel;
