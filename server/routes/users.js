var express = require('express');
var router = express.Router();

let mockUsers = [
  { id: 1, name: 'Marlin', email: 'marlin@gmail.com' },
  { id: 2, name: 'Nemo', email: 'nemo@gmail.com' },
  { id: 3, name: 'Dory', email: 'dory@gmail.com' }
];


/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.body, 'the body');
  res.json({ users: mockUsers });
});

// router.post('/users', (req, res) => {
//   console.log('got users:', req.body);
//   res.sendStatus(200);
// });

// router.post('/', (req, res) => {
//   res.json({requestBody: req.body})  // <==== req.body will be a parsed JSON object
// })

router.post('/', function (req, res, next) {
  // save request data to a variable in routes/users.js
mockUsers.push(req.body);
res.json({requestBody: req.body});
res.status(201).send(`Added user ${res.body}`);
res.send(req.body);
});



// app.post('/book', (req, res) => {
//   const book = req.body;

//   console.log(book);
//   books.push(book);
//   res.send('Book is added to the database');

// });

module.exports = router;
