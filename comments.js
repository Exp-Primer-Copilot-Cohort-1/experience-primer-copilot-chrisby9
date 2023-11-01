// Create web server
// npm install express body-parser
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
var fs = require("fs");
var comments = require('./comments.json');

// GET COMMENTS
app.get('/comments', function (req, res) {
   res.end( JSON.stringify(comments) );
});

// ADD COMMENT
app.post('/comments', function (req, res) {
    var comment = req.body;
    comments.push(comment);
    res.end( JSON.stringify(comments) );
});

// DELETE COMMENT
app.delete('/comments/:id', function (req, res) {
    var id = req.params.id;
    comments.splice(id, 1);
    res.end( JSON.stringify(comments) );
});

// UPDATE COMMENT
app.put('/comments/:id', function (req, res) {
    var id = req.params.id;
    var comment = req.body;
    comments[id] = comment;
    res.end( JSON.stringify(comments) );
});

// START SERVER
var server = app.listen(8081, function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("Server listening at http://%s:%s", host, port);
});