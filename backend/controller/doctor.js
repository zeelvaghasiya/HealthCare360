const Doctor = require('../models/doctor')

const createNewDoctors = async(req, res) => {
    try {
        const newDoctor = new Doctor(req.body);
        const savedDoctor = await newDoctor.save();
        res.status(201).json(savedDoctor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getAllDoctors = async(req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getDoctorById = async(req, res) => {
    res.json(res.doctor);
}

const updateDoctorById = async(req, res) => {
    try {
        const updatedDoctor = await res.doctor.save();
        res.json(updatedDoctor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const deleteDoctorById = async(req, res) => {
    try {
        await res.doctor.remove();
        res.json({ message: 'Doctor deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


module.exports = {createNewDoctors, getAllDoctors, getDoctorById, updateDoctorById, deleteDoctorById};