require('dotenv').config();
const express = require('express');
const cors = require('cors')

//
const connectToDb = require('./config/db.js')


const app = express();

//Express middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors());


//init Connection to db
connectToDb()

//
const userRoute = require('./routers/userRoute.js')

app.use('/', userRoute)


module.exports = app;