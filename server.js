
const express = require("express");
const router = require("./network/routes")

const app = express();


// app.use(router)

router(app)

app.use('/app', express.static('public'))

app.listen(3000);
console.log(
  "Estoy escuchando por http://localhost:3000 que es el puerto por el que escucho."
);
