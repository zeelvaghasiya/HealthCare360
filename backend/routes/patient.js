const multer = require("../multer");
const cloudinary = require("../cloudinary");
const fs = require("fs");
const jwt = require("jsonwebtoken");

const express = require("express");
const authenticate = require("../middleware/authenticate");
const router = express.Router();

const {
  registerPatient,
  signinPatient,
  getPatientById,
  updatePatientById,
  deletePatientById,
} = require("../controller/patient");
const upload = require("../multer");
const Patient = require("../models/patient");

router.route("/register").post(registerPatient);

router.route("/signin").post(signinPatient);

router.route("/patients/:id").get(getPatientById);

router.route("/patients/:id").patch(updatePatientById);

router.route("/patients/:id").delete(deletePatientById);

router.route("/appointments").get(authenticate, (req, res) => {
  console.log("welcome in appointments page");
  res.send(req.rootUser);
});

router.route("/profiledetails").get(authenticate, (req, res) => {
  console.log("welcome in profile details page");
  console.log("cookieValue", req.cookies.jwtoken);
  res.send(req.rootUser);
});

router.post("/upload-images", upload.array("image"), async (req, res) => {
  const uploader = async (path) => await cloudinary(path, "Images");

  if (req.method === "POST") {
    const urls = [];

    const files = req.files;

    for (const file of files) {
      const { path } = file;

      const newPath = await uploader(path);

      urls.push(newPath);

      fs.unlinkSync(path);
    }

    const medicalRecord = {
      recordUrl: urls[0].url,
      description: req.body.description,
    };

    console.log(medicalRecord);

    console.log(req.body.description, req.cookies.jwtoken);

    const token = req.cookies.jwtoken;
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    const patient = await Patient.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    console.log("Record", patient.pastMedicalRecords);

    patient.pastMedicalRecords.push(medicalRecord);
    const data = await patient.save();
    console.log(data);

    res.status(200).json({
      message: "Medical record uploaded successfully",
      data: urls,
    });
  } else {
    res.status(404).json({
      err: "Medical record not Uploaded Successfully",
    });
  }
});

router.get("/medical-records", async (req, res) => {
  try {
    const token = req.cookies.jwtoken;
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    const patient = await Patient.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }

    const medicalRecords = patient.pastMedicalRecords;
    res.status(200).json(medicalRecords);
  } catch (error) {
    console.error("Error fetching medical records:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.route("/userdata").get(async (req, res) => {
  const token = req.cookies.jwtoken;
  const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
  const patient = await Patient.findOne({
    _id: verifyToken._id,
    "tokens.token": token,
  });
  console.log("zeelddd",patient);
  res.send(patient);
});

router.route("/logout").get((req, res) => {
  res.clearCookie("jwtoken", { path: "/" });
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
    }
  });
  res.status(200).send("User Logout");
});

module.exports = router;
