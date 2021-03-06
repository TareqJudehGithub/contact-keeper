const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async() => {
     try {
          await mongoose.connect(db, {
               useNewUrlParser: true,
               useCreateIndex: true,
               useFindAndModify: false,
               useUnifiedTopology: true
          });

     } 
     catch (error) {
          console.log(error.message);
          process.exit(1);
     }
};

//Mongoose DB connection test:
var Mongodb = mongoose.connection;
Mongodb.on('error', console.error.bind(console, 'connection error:'));
Mongodb.once('open', function() {
  console.log("We're connected to Mongoose!")
});

module.exports = connectDB;
