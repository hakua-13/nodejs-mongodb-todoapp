const express = require("express");
const app = express();
const PORT = 8000;
app.use(express.json());

app.listen(PORT, console.log('サーバー起動'))

app.get('/api/v1/tasks', (req, res) => {
  res.send('タスクの取得')
})

app.post('/api/v1/tasks', (req, res) => {
  console.log(req.body.title);
  res.send('タスクの新規作成');
})

app.get('/api/v1/tasks/:id', (req, res) => {
  console.log(req.params.id);
  res.send('指定したタスクの取得');
})

app.patch('/api/v1/tasks/:id', (req, res) => {
  console.log(req.params.id);
  res.send('指定したタスクを更新');
})

app.delete('/api/v1/tasks/:id', (req, res) => {
  console.log(req.params.id);
  res.send('指定したタスクの削除');
})