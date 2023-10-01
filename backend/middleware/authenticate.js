const jwt = require('jsonwebtoken');
const Patient = require("../models/patient");

const authenticate = async (req, res, next) => {
    try {

        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET);

        const rootUser = await Patient.findOne({_id:verifyToken._id, "tokens.token":token});

        if(!rootUser){
            throw new Error('User not Found');
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();
        
    } catch (error) {
        res.status(401).send("Unauthorized:No token provided");
        console.log(err);
    }
}

module.exports = authenticate;