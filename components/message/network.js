const express = require("express")
const router = express.Router()

router.get('/message', (req, res) => {
    res.send(response.succes(req, res, "Datos cargado",201))    
  })
  
  router.post('/message', (req, res) => {
    console.log(req.query)
      if(req.query.error === "ok"){
        res.send(response.error(req, res, "upss se encontro un problema",400, "Solo es una simulacion de un error , aconsejable dejar un log"))
      }else{
        res.send(response.succes(req, res, "Creado correctamente",201))
      }
  })

module.exports = router 