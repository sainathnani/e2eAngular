const express = require('express');
const bodyParser = require('body-parser');
let User_Registration = require('./modelclasses/user_registration.js'); // model class import
const mongoose = require('mongoose');
const uuid = require('uuid/v4'); // generate UUID
const PropertiesReader = require('properties-reader'); // read from properties file
const prop = PropertiesReader('url.properties');


let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname))

// -------------- utils ------------------>

getProperty = (pty) => {
  return prop.get(pty);
}
const conString = getProperty('mongo_connect_url');

generateResponse = (status,errorCode,errorDesc) => {
  var respObj = {};
  respObj.status = status;
  respObj.errorCode = errorCode;
  respObj.errorDesc = errorDesc;

  return respObj;

}

mongoose.connect(conString, { useNewUrlParser: true }, (err) => {
  console.log("Database connection", err)
})

// -------------- filter for cross-origin ------------------>

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// -------------- server port listener ------------------>
app.listen(getProperty('server.port'), () => {
  console.log("Well done, now I am listening...")
})



// -------------- post user registration ------------------>

app.post(getProperty('user_registration_url'),function(req,res){
  dupCheck(req,res);
})


let dupCheck = function(req,res){
  User_Registration.find({
    $or:[{
        'mobile': req.body.mobile
      },{
        'emailId': req.body.emailId
      }]
  },function (err,results) {
    console.log(results.length);
    if(results.length == 0){
        registerData(req,res);
    }else
      res.send(generateResponse(getProperty("failure"),"", getProperty("user_exists")));
  });
}

let registerData = function(req,res){
 var input = new User_Registration(req.body);
  input.profileId = uuid();
  input.save(function(error){
    if(error){
      console.log(error.errors);
      res.send(generateResponse(getProperty("failure"), getProperty("invalid_input_code"),getProperty("invalid_input")));
    }else{
      res.send(generateResponse(getProperty("success"), getProperty("reg_success_code"),getProperty("user_registered")));
    }
  })

}


app.get('/',function(req,res){
 res.send("Hello");
})



