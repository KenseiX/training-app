//Importing packages
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const http = require('http');
const bodyParser = require('body-parser');

require('dotenv').load();

//creating an instance of express
const app = express();

//setting my port and mongo db connection string
app.set('port', '3000');
mongoose.connect('mongodb://localhost/Auth', {

});
require('dotenv').load();

//Creating an instance and error binding
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//Creating an instance of the server
const server = http.createServer(app);


//Listening to the server port
server.listen('3000', () =>{
  console.log ('successful connection to port' + server.address().port);
});

//point to static path
app.use(express.static(path.join(__dirname, 'dist')));

//catching any default route and directing it to the index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


//Creating login data  model
let loginSchema = new mongoose.Schema({
id : String,

//Personal data from database
first_name: String,
last_name: String,
email: String,
password: String
});

//Creating an instance of the schema
var loginData = mongoose.model('Auth', loginSchema, "Auth");




//data api end points

//test to see does api exist
app.get('/api', (req, res) => {
res.json(200, {msg: 'OK -- Loading api endpoint'});
});

//This pulls back all login data using for tesing
/* Browse - Broswers all content */
app.get("/api/getLoginData", (req, res) => {
  loginData.find(function (err, data) {
    return res.json(200, data);
  });
});


/* Read - Views a specific Result */
app.get("/api/:email/getLoginData",(req, res)=> {
  var email = req.params.email;
  loginData.findOne({email:email}, function (err, data) {
    return res.json(200, data);
  });
});


/* Edit - Updating a specific result */
app.put("/api/:email/updateLoginData", (req, res) => {
var updateobject = req.body;

var email = req.params.email;

console.dir(updateobject);

console.log('hit updateLoginData/' + email);

return loginData.findOneAndUpdate(
  {email: email}, updateobject,
  (err, doc) => {if (err) return res.send(500, {error: err})
  return res.send(doc);
});

});


/* Add - Creating a new result */
app.post ("/api/:email/addLoginData", (req, res) => {
  
var newlogin = new loginData();
newlogin.save()
  .then(item =>{
    res.send("item successfully saved");
  
  })
  .catch(err =>{
    res.status(400).send("unable to connect");
  });

});


/* Delete - Removes one result from the database */
app.delete("/api/:email/deleteLoginData", (req, res) => {
  var email = req.params.email;

  loginData.findOneAndRemove({email: email}, (err, data) => {
    if (err) return res.send(500, {error: err})
    return res.send(data);
  })

});
