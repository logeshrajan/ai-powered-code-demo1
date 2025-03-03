// Create web server
// 1. Load the express module
// 2. Create an express object
// 3. Create a route for GET requests to the root URL
// 4. Create a route for POST requests to the root URL
// 5. Create a route for PUT requests to the root URL
// 6. Create a route for DELETE requests to the root URL
// 7. Start the server

// 1. Load the express module
var express = require('express');

// 2. Create an express object
var app = express();

// 3. Create a route for GET requests to the root URL
app.get('/', function(req, res) {
    res.send('GET request to the homepage');
});

// 4. Create a route for POST requests to the root URL
app.post('/', function(req, res) {
    res.send('POST request to the homepage');
});

// 5. Create a route for PUT requests to the root URL
app.put('/', function(req, res) {
    res.send('PUT request to the homepage');
});

// 6. Create a route for DELETE requests to the root URL
app.delete('/', function(req, res) {
    res.send('DELETE request to the homepage');
});

// 7. Start the server
app.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});