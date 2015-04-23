var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('2ylANHE6ZPUq4YGcoNNUpw');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.post('/todos/sendmail', function(req, res){

  var message = {
    "html": req.body.message,
    "subject": req.body.subject,
    "from_email": "comercial@avante.cc",
    "from_name": "Comercial Avante",
    "to": req.body.to,
    "bcc_address": "ccomercial@avante.cc",
    "important": true,
    "track_opens": null,
    "track_clicks": null,
    "inline_css": true,
    "url_strip_qs": null,
    "tags": [
    "transactional"
    ]
  };


  mandrill_client.messages.send({"message": message, "async": false}, function(result) {
    res.json(req.body);
      }, function(e) {
    res.json('A mandrill error occurred: ' + e.name + ' - ' + e.message);
  });
});

io.on('connection', function(socket){
  console.log(socket);
  socket.on('pubsub', function(msg){
    io.emit('pubsub', msg);
  });

  socket.on('activities', function(msg){
    io.emit('activities', msg);
  });

  socket.on('todos', function(msg){
    io.emit('todos', msg);
  });

  socket.on('trackings', function(msg){
    io.emit('trackings', msg);
  });

  socket.on('notifications', function(msg){
    io.emit('notifications', msg);
  });

  socket.on('quotations', function(msg){
    io.emit('quotations', msg);
  });

  socket.on('quotation:change', function(msg){
    io.emit('quotation:change', msg);
  });

  socket.on('quotation-product', function(msg){
    io.emit('quotation-product', msg);
  });

  socket.on('quotation-service', function(msg){
    io.emit('quotation-service', msg);
  });

});

http.listen(3000, function(){
	console.log("nice 3000");
});

