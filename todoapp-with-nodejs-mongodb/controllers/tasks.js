const Task = require("../models/Task");

const getAllTasks = async(req, res) => {
  try{
    const allTask = await Task.find({});
    res.status(200).json(allTask);
  }catch(error){
    res.status(500).json(error);
  }
}
const createTask = async(req, res) => {
  try{
    const createTask = await Task.create(req.body);
    res.status(200).json(createTask);
  }catch(error){
    res.status(500).json(error);
  }
}
const getSingleTask = async(req, res) => {
  try{
    const getSingleTask = await Task.findById(req.params.id);
    if(!getSingleTask){
      res.status(404).json(`_id: ${req.params.id} は存在しません`);
      return; 
    }
    res.status(200).json(getSingleTask);

  }catch(error){
    res.status(500).json(error);
  }
}
const updateTask = async(req, res) => {
  try{
    const updateTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      {returnDocument: 'after'}
    );
    if(!updateTask){
      res.status(404).json(`_id: ${req.params.id} は存在しません`);
      return;
    }
    res.status(200).json(updateTask);
  }catch(error){
    res.status(500).json(error);
  }
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