const MedicalRecord = require('../models/medicalRecord')

const createMedicalRecord = async(req, res) => {
    try {
        const newMedicalRecord = new MedicalRecord(req.body);
        const savedMedicalRecord = await newMedicalRecord.save();
        res.status(201).json(savedMedicalRecord);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getAllMedicalRecords = async(req, res) => {
    try {
        const MedicalRecords = await MedicalRecord.find();
        res.json(MedicalRecords);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getMedicalRecordById = async(req, res) => {
    res.json(res.MedicalRecord);
}

const updateMedicalRecordById = async(req, res) => {
    // if (req.body.firstName != null) {
    //     res.MedicalRecord.firstName = req.body.firstName;
    // }
    // if (req.body.lastName != null) {
    //     res.MedicalRecord.lastName = req.body.lastName;
    // }
    // if (req.body.dateOfBirth != null) {
    //     res.MedicalRecord.dateOfBirth = req.body.dateOfBirth;
    // }
      
    try {
        const updatedMedicalRecord = await res.MedicalRecord.save();
        res.json(updatedMedicalRecord);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const deleteMedicalRecordById = async(req, res) => {
    try {
        await res.MedicalRecord.remove();
        res.json({ message: 'MedicalRecord deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


module.exports = {createMedicalRecord, getAllMedicalRecords, getMedicalRecordById, updateMedicalRecordById, deleteMedicalRecordById};
