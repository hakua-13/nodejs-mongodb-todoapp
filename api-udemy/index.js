const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const customers = [
  {title: '山田', id: 1 },
  {title: '鈴木', id: 2 },
  {title: '佐藤', id: 3 },
  {title: '高橋', id: 4 },
  {title: '田中', id: 5 },
]

app.get('/api/customers', (req, res) => {
  res.send(customers);
})