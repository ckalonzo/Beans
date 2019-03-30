var app = require('http').createServer()
var io = module.exports.io = require('socket.io')(app)

const PORT = process.env.PORT || 3231

CONST SocketManager = require('./SocketManager')

//connection to server
io.connection('connection', SocketManager)

app.listen(PORT, () => {
    console.log('Connected to port:' + PORT);
})