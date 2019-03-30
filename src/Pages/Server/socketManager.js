const io = require('./index.js').io

//exporting socketManager from index.js

module.exports = function (socket) {
    console.log("Socket Id" + socket.id);
}
