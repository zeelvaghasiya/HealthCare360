const express = require('express');
const router = express.Router();

const {createNewDoctors, getAllDoctors, getDoctorById, updateDoctorById, deleteDoctorById} = require("../controller/doctor");

router.route("/doctors").post(createNewDoctors);

router.route("/doctors").get(getAllDoctors);

router.route("/doctors/:id").get(getDoctorById);

router.route("/doctors/:id").patch(updateDoctorById);

router.route("/doctors/:id").delete(deleteDoctorById);


module.exports = router;