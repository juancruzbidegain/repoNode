
const express = require("express");
const router = express.Router()
const response = require("./network/response")


const app = express();

app.use(router)

router.get('/message', (req, res) => {
  res.send(response.succes(req, res, "Datos cargado",201))    
})

router.post('/message', (req, res) => {
  console.log(req.query)
    if(req.query.error === "ok"){
      res.send(response.error(req, res, "upss se encontro un problema"))
    }else{
      res.send(response.succes(req, res, "Creado correctamente",201))
    }
})

app.use('/app', express.static('public'))

app.listen(3000);

console.log(
  "Estoy escuchando por http://localhost:3000 que es el puerto por el que escucho."
);
