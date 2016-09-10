var restify = require('restify');
var server = restify.createServer();

server.use(restify.bodyParser());

// This function is responsible for returning all entries for the Message model
function getMessages(req, res, next) {
  // Resitify currently has a bug which doesn't allow you to set default headers
  // This headers comply with CORS and allow us to server our response to any origin
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  // .find() without any arguments, will return all results
  // the `-1` in .sort() means descending order
  res.send('new message');
  next();
}

// Set up our routes and start the server
server.get('/messages', getMessages);

server.listen(8080);