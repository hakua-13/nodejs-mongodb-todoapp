const express = require("express");
const app = express();
const taskRoute = require('./routes/tasks');

const PORT = 8000;
app.use(express.json());

app.use('/api/v1/tasks', taskRoute)

app.listen(PORT, console.log('サーバー起動'))