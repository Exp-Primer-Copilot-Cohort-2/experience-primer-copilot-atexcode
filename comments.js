// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const comments = [];

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.send('Comment is added to the server');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});