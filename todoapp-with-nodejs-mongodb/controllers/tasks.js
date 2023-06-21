const getAllTasks = (req, res) => {
  res.send("タスクの取得");
}
const createTask = (req, res) => {
  res.send("タスクの新規作成");
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