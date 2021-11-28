const express = require('express')
const app = express()

app.get("/", function(req, res) {
    res.send("Primeira chamada")
})

app.get("/teste", function(req, res) {
    res.send("chamando api chamada TESTE")
})

app.listen(
    3333,
     () => console.log("Servidor executando na porta 3333")

     
 )
