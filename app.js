// // Create a file named app.js
 const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello world\n');
});

server.listen(3001, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
});

// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.write('<h1>Hello World</h1>');
//   res.end();
// });

// // server.listen(3000, () => {
// //   console.log('Server is running on port 3000');
// // });


// // const express = require('express');
// // const app = express();

// // app.get('/tarun', (req, res) => {
// //     res.sendFile('index.html',{
// //         root:__dirname
// //     });
// //   });


// // app.get('/vamsi', (req, res) => {
// //   res.send('Hello hio World');
// // });

// // app.listen(3002, () => {
// //   console.log('Server is running on port 3000');
// // });

// const express = require('express');
// const app = express();
// app.use(express.json()); // Middleware to parse JSON bodies

// const items = [{
//     item:'heelo',
// }];

// app.get('/items', (req, res) => {
//   res.json(items);
// });

// app.post('/items', (req, res) => {
//   const item = req.body;
//   items.push(item);
//   res.status(201).json(item);
// });

// app.put('/items/:id', (req, res) => {
//   const id = parseInt(req.params.id, 10);
//   const updatedItem = req.body;
//   items[id] = updatedItem;
//   res.json(updatedItem);
// });

// app.delete('/items/:id', (req, res) => {
//   const id = parseInt(req.params.id, 10);
//   items.splice(id, 1);
//   res.status(204).end();
// });

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });