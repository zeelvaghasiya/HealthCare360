const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50,
  },
  dateOfBirth: {
    type: Date,
    required: true,
    validate: {
      validator: function (dob) {
        // Validate that the date of birth is in the past
        return dob < new Date();
      },
      message: 'Date of birth must be in the past',
    },
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (email) {
        // Regular expression to validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      },
      message: 'Invalid email format',
    },
  },
  phoneNumber: {
    type: String,
    required: true,
    validate: {
      validator: function (phone) {
        // Regular expression to validate phone number format (US format)
        const phoneRegex = /^[2-9]{1}[0-9]{2}-[2-9]{1}[0-9]{2}-[0-9]{4}$/;
        return phoneRegex.test(phone);
      },
      message: 'Invalid phone number format (use XXX-XXX-XXXX)',
    },
  },
  specialization: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  licenseNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlength: 20,
  },
  practiceLocation: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  yearsOfExperience: {
    type: Number,
    required: true,
    min: 0,
  },
  education: [
    {
      institution: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
      },
      degree: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
      },
      graduationYear: {
        type: Number,
        required: true,
        min: 1900, // Update this to an appropriate minimum year
      },
    },
  ],
  languages: [
    {
      type: String,
      trim: true,
      maxlength: 50,
    },
  ],
  availableSlots: [
    {
      dayOfWeek: {
        type: String,
        required: true,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      },
      startTime: {
        type: String,
        required: true,
        validate: {
          validator: function (time) {
            // Validate time format (HH:MM AM/PM)
            const timeRegex = /^(0[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/i;
            return timeRegex.test(time);
          },
          message: 'Invalid time format (HH:MM AM/PM)',
        },
      },
      endTime: {
        type: String,
        required: true,
        validate: {
          validator: function (time) {
            // Validate time format (HH:MM AM/PM)
            const timeRegex = /^(0[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/i;
            return timeRegex.test(time);
          },
          message: 'Invalid time format (HH:MM AM/PM)',
        },
      },
    },
  ],
  // You can add more properties as needed for your specific use case.
});

module.exports = mongoose.model("Doctor",doctorSchema);
