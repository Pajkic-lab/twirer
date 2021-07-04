var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var expressWs = require('express-ws')(app);
const cors = require("cors")
const path = require('path')
const PORT = process.env.PORT || 5001

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

if(process.env.NODE_ENV === "production") {
  app.use("/", express.static("./client/build"))
}


//Routes
app.post('/testuri', function(req, res, next){
  const { text } = req.body
  res.send(text);
});

app.ws('/', function(ws, req) {
  ws.on('message', function(msg) {
    console.log(msg);
  });
  console.log('socket', req.testing); 
}) 


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"))    
})


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

