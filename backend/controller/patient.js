const Patient = require("../models/patient");
const bcrypt = require("bcryptjs");


const registerPatient = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      password,
      confirmPassword,
      email,
      phoneNumber,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !password ||
      !confirmPassword ||
      !email ||
      !phoneNumber
    ) {
      return res.status(422).json({ error: "Plz filled the field properly" });
    }

    const userExist = await Patient.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already Exist" });
    }

    if (password !== confirmPassword) {
      return res
        .status(422)
        .json({ error: "Password and Confirm Password dosen't Match" });
    }

    const patient = new Patient({
      firstName,
      lastName,
      password,
      confirmPassword,
      email,
      phoneNumber,
    });

    const fPatient = await patient.save();
    if (fPatient) {
      res.status(201).json({ message: "user registered successfully" });
    } else {
      res.status(500).json({ error: "Failed to registered" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const signinPatient = async (req, res) => {
  try {
    console.log("i am here");
    const { email, password } = req.body;

    console.log("password",password,"\n","email",email);
    console.log("1");

    if (!email || !password) {
      return res.status(400).json({ error: "Plz filled the field properly" });
    }   

    const userLogin = await Patient.findOne({ email: email });

    console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      const token = await userLogin.generateAuthToken();
      console.log(token);


      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 86400000),
        httpOnly: true,
      });


      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credientials:" });
      } else {
        res.json({ message: "user Signin Successfully" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credientials" });
    }
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getPatientById = async(req, res) => {
  try {
    const patientId = req.params.id;
    console.log(patientId);
    const patient = await Patient.find({_id : patientId});

    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.status(200).json(patient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

const updatePatientById = async (req, res) => {
  if (req.body.firstName != null) {
    res.patient.firstName = req.body.firstName;
  }
  if (req.body.lastName != null) {
    res.patient.lastName = req.body.lastName;
  }
  if (req.body.dateOfBirth != null) {
    res.patient.dateOfBirth = req.body.dateOfBirth;
  }

  try {
    const updatedPatient = await res.patient.save();
    res.json(updatedPatient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deletePatientById = async (req, res) => {
  try {
    await res.patient.remove();
    res.json({ message: "Patient deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  registerPatient,
  signinPatient,
  getPatientById,
  updatePatientById,
  deletePatientById,
};
