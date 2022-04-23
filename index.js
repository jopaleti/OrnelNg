// Module Dependencies
require("dotenv").config();
var express = require("express");
var path = require("path");
var logger = require("morgan");
var mailer = require("nodemailer");
var createError = require("http-errors");
var db = require('./config/dbConfig.js');
var carModel = require('./models/carModel');
const { json } = require("body-parser");

// initiating the database
db();
// Configuring our app
var app = express();
//Setting Port
PORT = process.env.PORT || 3001
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Serving static File
app.use(express.static(path.join(__dirname, "Public")));


// Get the homepage
app.get("/",async (req, res, next) => {
 await carModel.find(function (err, cars) {
     if(err) console.log(err)
   res.render('index',{title:'ornelNg|Homepage',cars:cars})
 })
});
app.get("/carMart",async (req, res, next) => {
 await carModel.find(function (err, cars) {
   if(err) console.error(err)
   res.render('carMart',{title:'ornelNg|Car Mart',cars:cars})
 })
});

// get car by id
app.get("/Ornel/:id", async (req, res, next) => {
  var carID = req.params.id
 await carModel.findById(carID,function (err, car) {
  //  console.log(car)                          
   if(err) console.error(err)
   res.render('features',{title:`${car.carName}|Description`,car:car})                  
 })
});

// Features Route
app.get("/feature", async (req, res) => {
  await carModel.find(function(err, cars){
    if (err) console.log(err)
    res.render('features', {cars:cars})
  })
})

// feature id

app.get('/feature/:id', async (req, res)=> {
  const carId = req.params.id;
  const car = await carModel.findById(carId);
  res.render('features', {title: 'carFeatures', car: car});
});

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function (err, req, res) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

app.listen(PORT, () => {
  console.log(`Server now Listening on ${PORT}`)
})
module.exports = app;
