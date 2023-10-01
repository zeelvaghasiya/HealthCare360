const express = require('express');
const authenticate = require('../middleware/authenticate');
const router = express.Router();

const {registerPatient, signinPatient, getPatientById, updatePatientById, deletePatientById} = require("../controller/patient");

router.route("/register").post(registerPatient);

router.route("/signin").post(signinPatient);

router.route("/patients/:id").get(getPatientById);

router.route("/patients/:id").patch(updatePatientById);

router.route("/patients/:id").delete(deletePatientById);

router.route("/appointments").get(authenticate, (req,res) => {
    console.log("welcome in appointments page");
    res.send(req.rootUser);
});

router.route("/logout").get((req,res) => {
    console.log("hey logout form the backend");
    res.clearCookie('jwtoken', {path : "/"});
    res.status(200).send("User Logout");
});                    

module.exports = router;