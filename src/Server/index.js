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
const config = require("./config");
const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const { chatToken, videoToken, voiceToken } = require("./tokens");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);

const sendTokenResponse = (token, res) => {
  res.set("Content-Type", "application/json");
  res.send(
    JSON.stringify({
      token: token.toJwt()
    })
  );
};

app.get("/api/greeting", (req, res) => {
  const name = req.query.name || "World";
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.get("/chat/token", (req, res) => {
  const identity = req.query.identity;
  const token = chatToken(identity, config);
  sendTokenResponse(token, res);
});

app.post("/chat/token", (req, res) => {
  const identity = req.body.identity;
  const token = chatToken(identity, config);
  sendTokenResponse(token, res);
});

app.get("/video/token", (req, res) => {
  const identity = req.query.identity;
  const room = req.query.room;
  const token = videoToken(identity, room, config);
  sendTokenResponse(token, res);
});

app.post("/video/token", (req, res) => {
  const identity = req.body.identity;
  const room = req.body.room;
  const token = videoToken(identity, room, config);
  sendTokenResponse(token, res);
});

app.get("/voice/token", (req, res) => {
  const identity = req.body.identity;
  const token = voiceToken(identity, config);
  sendTokenResponse(token, res);
});

app.post("/voice/token", (req, res) => {
  const identity = req.body.identity;
  const token = voiceToken(identity, config);
  sendTokenResponse(token, res);
});

///////heroku

const PORT = process.env.PORT || 8000;
app.use(express.static("public"));
app.listen(PORT, () => console.log("Express server is running on" + PORT));

const stripe = require("stripe")("sk_test_AFV7PiH6h14RmMd93k1zGv6F005tkBXHk");

// Token is created using Checkout or Elements!
// Get the payment token ID submitted by the form:
// Using Express

app.post("/api/stripe", function(req, res, next) {
  const stripeToken = req.body.stripeToken;
  // eslint-disable-next-line no-unused-expressions
  stripe.charges.create({
    amount: 999,
    currency: "usd",
    description: "Example charge",
    source: stripeToken
  }),
    function(err, charge) {
      console.log("charge");
      console.log(charge);
      if (err) {
        res.send({
          success: false,
          message: "Error"
        });
      } else {
        res.send({
          success: true,
          message: "Error"
        });
      }
    };
});
