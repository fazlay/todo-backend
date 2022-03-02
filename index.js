const express = require('express');

const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: 'https://suspicious-jang-e450a4.netlify.app',
  })
);

app.use(express.json());
// app.use(cors());

let todolist = [
  { id: 1, task: ' Brush Your teeth' },
  { id: 2, task: ' make Your bed' },
  { id: 3, task: ' Take Your Break Fast bed' },
  { id: 4, task: ' Do Math Home Work' },
];

app.get('/', async (req, res) => {
  res.send('Server is Running');
});
app.get('/todolist', (req, res) => {
  res.send(todolist);
});

app.post('/addtodo', async (req, res) => {
  const newtodo = req.body;
  console.log(req.body);
  todolist.push(newtodo);
  // console.log(todolist);
  res.send('data ok');
});

app.delete('/todolist/:id', (req, res) => {
  console.log(req.params.id);
  const deletList = todolist.filter((element) => element.id != req.params.id);
  todolist = deletList;

  res.send(todolist);
});

app.listen(port, () => {
  console.log('Running Server at port', port);
});

// fetch('https://example.com/delete-item/' + id, {
//   method: 'DELETE',
// })
// .then(res => res.text()) // or res.json()
// //.then(res => console.log(res))
