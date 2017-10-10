var app = require('express')();
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/newData', function(req, res) {
    console.log(req.body.status);
    res.send("OK");
    io.emit('new_status', {status: req.body.status});
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});

http.listen(process.env.PORT || 3000, function () {
    console.log('listening on *: ' + (process.env.PORT || 3000));
});