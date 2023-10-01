const mongoose = require('mongoose');

const dbConnect = async(URI) => {
    console.log("inside dbConnect");
    return mongoose.connect("mongodb://127.0.0.1:27017/hospital",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = dbConnect;