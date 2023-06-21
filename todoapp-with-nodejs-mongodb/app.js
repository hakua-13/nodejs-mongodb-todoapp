const express = require("express");
const app = express();
const taskRoute = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

const PORT = 8000;
app.use(express.json());

app.use('/api/v1/tasks', taskRoute)

const start = async() => {
  try{
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, console.log('サーバー起動'));
  }catch(error){
    console.log(error);
  }
}

start();
