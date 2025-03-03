// create web server
const express = require('express');
const app = express();
// create a port
const port = 3000;
// create a route
app.get('/comments', (req, res) => {
  res.send('Comments');
});
// listen to the port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});