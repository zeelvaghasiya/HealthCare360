require('dotenv').config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const patientSchema = new mongoose.Schema({
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
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 4, // Adjust the minimum length as needed
    maxlength: 100, // Adjust the maximum length as needed
    // validate: {
    //   validator: function (password) {
    //     // For example, to require at least one uppercase letter, one lowercase letter, one digit, and one special character:
    //     const passwordRegex =
    //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    //     return passwordRegex.test(password);
    //   },
    //   message: "Password must meet the requirements.",
    // },
  },
  confirmPassword: {
    type: String,
    required: true,
    trim: true,
    minlength: 4, // Adjust the minimum length as needed
    maxlength: 100, // Adjust the maximum length as needed
    // validate: {
    //   validator: function (password) {
    //     // For example, to require at least one uppercase letter, one lowercase letter, one digit, and one special character:
    //     const passwordRegex =
    //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    //     return passwordRegex.test(password);
    //   },
    //   message: "Password must meet the requirements.",
    // },
  },
  dateOfBirth: {
    type: Date,
    validate: {
      validator: function (dob) {
        // Validate that the date of birth is in the past
        return dob < new Date();
      },
      message: "Date of birth must be in the past",
    },
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
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
      message: "Invalid email format",
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
      message: "Invalid phone number format (use XXX-XXX-XXXX)",
    },
  },
  address: {
    street: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
      maxlength: 2,
    },
    zipCode: {
      type: String,
      validate: {
        validator: function (zip) {
          // Regular expression to validate US ZIP code format
          const zipRegex = /^\d{5}(?:[-\s]\d{4})?$/;
          return zipRegex.test(zip);
        },
        message: "Invalid ZIP code format (use XXXXX or XXXXX-XXXX)",
      },
    },
  },
  pastMedicalRecords: [
    {
      recordUrl: {
        type: String,
      },
      description: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 50,
      },
    },
  ],
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// password hashing
patientSchema.pre("save", async function (next) {
  console.log("inside password hashing");
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.confirmPassword = await bcrypt.hash(this.confirmPassword, 12);
  }
  next();
});

// generating jwt token
patientSchema.methods.generateAuthToken = async function () {
  try {
    console.log("inside Token function");
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token});
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

module.exports = mongoose.model("Patient", patientSchema);
