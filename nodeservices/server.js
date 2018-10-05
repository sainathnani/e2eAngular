const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let utils = require('./utils/Utils.js');
const conString = utils.getProperty('mongo_connect_url');
let user_registration_api = require('./apis/UserRegistrationAPI.js');
let contact_us_api = require('./apis/ContactUsAPI.js')
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname))


mongoose.connect(conString, { useNewUrlParser: true }, (err) => {
  console.log("Database connection", err)
})

// -------------- filter for cross-origin ------------------>

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

// -------------- server port listener ------------------>
app.listen(utils.getProperty('server.port'), () => {
  console.log("Well done, now I am listening...")
})



// -------------- post user registration ------------------>

app.post(utils.getProperty('user_registration_url'),function(req,res){
  user_registration_api.dupCheck(req,res);
})

// -------------- post contact registration ------------------>

app.put(utils.getProperty('contact_us_url'),function(req,res){
  contact_us_api.contactQuery(req,res);
})

// --------------- ping service --------------------------->


app.get('/',function(req,res){
  res.send("Hello");
})



