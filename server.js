
const express = require("express");
const app = express();
const response = require("./network/response")

const router = require("./components/message/network")


app.use(router)


app.use('/app', express.static('public'))

app.listen(3000);
console.log(
  "Estoy escuchando por http://localhost:3000 que es el puerto por el que escucho."
);
