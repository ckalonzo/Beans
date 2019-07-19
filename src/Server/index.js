const express = require("express");

const SERVER_CONFIGS = require("./constants/server");

const configureServer = require("./server");
const configureRoutes = require("./Routes");

const app = express();

configureServer(app);
configureRoutes(app);

app.listen(SERVER_CONFIGS.PORT, error => {
  if (error) throw error;
  console.log("Server running on port: " + SERVER_CONFIGS.PORT);
});

//////////////////////custom chat

// var app = require('http').createServer()
// var io = module.exports.io = require('socket.io')(app)

// const PORT = process.env.PORT || 3231

// const SocketManager = require('./SocketManager')

// io.on('connection', SocketManager)

// app.listen(PORT, () => {
//     console.log("Connected to port:" + PORT);
// })

///////////////////////////////////////////Twilio server //////////////////////////////////////////////////////////////////
// const config = require("./config");
// const bodyParser = require("body-parser");
// const pino = require("express-pino-logger")();
// const { chatToken, videoToken, voiceToken } = require("./tokens");
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(pino);

// const sendTokenResponse = (token, res) => {
//   res.set("Content-Type", "application/json");
//   res.send(
//     JSON.stringify({
//       token: token.toJwt()
//     })
//   );
// };

// app.get("/api/greeting", (req, res) => {
//   const name = req.query.name || "World";
//   res.setHeader("Content-Type", "application/json");
//   res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
// });

// app.get("/chat/token", (req, res) => {
//   const identity = req.query.identity;
//   const token = chatToken(identity, config);
//   sendTokenResponse(token, res);
// });

// app.post("/chat/token", (req, res) => {
//   const identity = req.body.identity;
//   const token = chatToken(identity, config);
//   sendTokenResponse(token, res);
// });

// app.get("/video/token", (req, res) => {
//   const identity = req.query.identity;
//   const room = req.query.room;
//   const token = videoToken(identity, room, config);
//   sendTokenResponse(token, res);
// });

// app.post("/video/token", (req, res) => {
//   const identity = req.body.identity;
//   const room = req.body.room;
//   const token = videoToken(identity, room, config);
//   sendTokenResponse(token, res);
// });

// app.get("/voice/token", (req, res) => {
//   const identity = req.body.identity;
//   const token = voiceToken(identity, config);
//   sendTokenResponse(token, res);
// });

// app.post("/voice/token", (req, res) => {
//   const identity = req.body.identity;
//   const token = voiceToken(identity, config);
//   sendTokenResponse(token, res);
// });
