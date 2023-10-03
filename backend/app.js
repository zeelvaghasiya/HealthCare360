require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();
const dbConnect = require("./db/connect");
const PORT = process.env.PORT || 3000

app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true, // Enable credentials (cookies)
  }));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const patientRoute = require("./routes/patient");
const doctorRoute = require("./routes/doctor");
const medicalRecordRoute = require("./routes/medicalRecord");
const appointmentRoute = require("./routes/appointment");
const authenticate = require('./middleware/authenticate');

app.get("/", (req,res)=>{
    res.send("this is my home page");
})
  
app.use("/api-patient", patientRoute);
app.use("/api-doctor", doctorRoute);
app.use("/api-medicalrecord", medicalRecordRoute);
app.use("/api-appointment", appointmentRoute);

const start = async() => {
    try {
        await dbConnect(process.env.MONGODB_URL);
        app.listen(PORT, ()=>{
            console.log("i am here");
        });
    } catch (error) {
        console.log(error);
    }
}

start();
