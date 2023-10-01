const mongoose = require('mongoose');

const medicalRecordSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  diagnosis: {
    type: String,
    required: true,
    trim: true,
    maxlength: 500,
  },
  medications: [
    {
      name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
      },
      dosage: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
      },
    },
  ],
  procedures: [
    {
      name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
      },
      date: {
        type: Date,
        required: true,
      },
    },
  ],
  labResults: [
    {
      name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
      },
      result: {
        type: String,
        required: true,
        trim: true,
        maxlength: 200,
      },
      date: {
        type: Date,
        required: true,
      },
    },
  ],
  reports: [
    {
      name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
      },
      image: {
        type: String, // Store image URLs or file paths
        required: true,
      },
    },
  ],
  notes: {
    type: String,
    trim: true,
    maxlength: 1000,
  },
});

module.exports = mongoose.model('MedicalRecord', medicalRecordSchema);
