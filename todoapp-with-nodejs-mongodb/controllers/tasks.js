const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.send("タスクの取得");
}
const createTask = async(req, res) => {
  try{
    const createTask = await Task.create(req.body);
    res.status(200).json(createTask);
  }catch(error){
    res.status(500).json(error);
  }
}
const getSingleTask = (req, res) => {
  res.send("指定したタスクの習得");
}
const updateTask = (req, res) => {
  res.send("指定したタスクの更新");
}
const deleteTask = (req, res) => {
  res.send("指定したタスクの削除");
}

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask
}