const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
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
  appointmentDate: {
    type: Date,
    required: true,
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
  status: {
    type: String,
    enum: ['Scheduled', 'Cancelled', 'Completed'],
    required: true,
  },
  notes: {
    type: String,
    trim: true,
    maxlength: 1000,
  },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
