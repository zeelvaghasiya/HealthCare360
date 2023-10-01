const Appointment = require('../models/appointment')

const createNewAppointment = async(req, res) => {
    try {
        const newAppointment = new Appointment(req.body);
        const savedAppointment = await newAppointment.save();
        res.status(201).json(savedAppointment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getAllAppointments = async(req, res) => {
    try {
        const appointments = await Appointment.find();
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getAppointmentById = async(req, res) => {
    res.json(res.appointment);
}

const updateAppointmentById = async(req, res) => {
    try {
        const updatedAppointment = await res.appointment.save();
        res.json(updatedAppointment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const deleteAppointmentById = async(req, res) => {
    try {
        await res.appointment.remove();
        res.json({ message: 'Appointment deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


module.exports = {createNewAppointment, getAllAppointments, getAppointmentById, updateAppointmentById, deleteAppointmentById};