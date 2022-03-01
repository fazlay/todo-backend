const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5000;

const todolist = [
  { id: 1, task: ' Brush Your teeth' },
  { id: 2, task: ' make Your bed' },
];

app.get('/', async (req, res) => {
  res.send('Server is Running');
});
app.get('/todolist', (req, res) => {
  res.send(todolist);
});

app.post('/addtodo', async (req, res) => {
  const newtodo = req.body;

  todolist.push(newtodo);
  console.log(todolist);
  res.send('data ok');
});

app.delete('/todolist/:id', (req, res) => {
  console.log(req.params.id);
  res.send('THis delete request is successfull');
});

app.listen(port, () => {
  console.log('Running Server at port', port);
});

// fetch('https://example.com/delete-item/' + id, {
//   method: 'DELETE',
// })
// .then(res => res.text()) // or res.json()
// .then(res => console.log(res))
