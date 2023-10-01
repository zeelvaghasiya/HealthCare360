const express = require('express');
const router = express.Router();

const {createMedicalRecord, getAllMedicalRecords, getMedicalRecordById, updateMedicalRecordById, deleteMedicalRecordById}= require("../controller/medicalRecord");

router.route("/medicalrecords").post(createMedicalRecord);

router.route("/medicalrecords").get(getAllMedicalRecords);

router.route("/medicalrecords/:id").get(getMedicalRecordById);

router.route("/medicalrecords/:id").patch(updateMedicalRecordById);

router.route("/medicalrecords/:id").delete(deleteMedicalRecordById);


module.exports = router;