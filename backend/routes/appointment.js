const express = require('express');
const router = express.Router();

const {createNewAppointment, getAllAppointments, getAppointmentById, updateAppointmentById, deleteAppointmentById}= require("../controller/appointment");

router.route("/appointments").post(createNewAppointment);

router.route("/appointments").get(getAllAppointments);

router.route("/appointments/:id").get(getAppointmentById);

router.route("/appointments/:id").patch(updateAppointmentById);

router.route("/appointments/:id").delete(deleteAppointmentById);


module.exports = router;