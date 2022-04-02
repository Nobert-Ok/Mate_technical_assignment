const express  = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000
const connectDB = require('./config/db');
const {errorHandler} = require('./middleware/errormiddleware');


connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/users',require('./routes/userroutes'));
app.use('/api/interests',require('./routes/interestroutes'));


app.use(errorHandler);

app.listen(port,()=>console.log(`Server started on port ${port}`));