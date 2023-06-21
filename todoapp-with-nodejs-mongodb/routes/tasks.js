const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('タスクの取得')
})
router.post('/', (req, res) => {
  console.log(req.body.title);
  res.send('タスクの新規作成');
})
router.get('/:id', (req, res) => {
  console.log(req.params.id);
  res.send('指定したタスクの取得');
})
router.patch('/:id', (req, res) => {
  console.log(req.params.id);
  res.send('指定したタスクを更新');
})
router.delete('/:id', (req, res) => {
  console.log(req.params.id);
  res.send('指定したタスクの削除');
})

module.exports = router;