import { CalculadoraController } from "./controllers/CalculadoraControllers"

const calculadoraController = new CalculadoraController()


const express = require('express')
const app = express()

app.use(express.json())

/*
app.get("/", function(req, res) {
    res.send("Primeira chamada")
})

app.get("/teste", function(req, res) {
    res.send("chamando api chamada TESTE -segunda aula da disciplina...")
})

app.get("/teste/:username", function(req, res){
    const { username } = req.params
    
    res.send({
      "message": "testando método GET com passagem de parâmetros",
      "ursename": username,
  })
    res.status(500).json({ erro: 'Username not found' })
})


app.post("/teste", function(req, res) {
     res.send({
        "message": "testando método POST"
    }) 

    const { nome, sobrenome} = req.body

    if (nome === undefined || sobrenome === undefined) {
       res.status(500).json({ erro: 'bad request' })
    }

    res.send({
        "message": "testando método POST",
        "nome": nome,
        "sobrenome": sobrenome
   })
})
*/



app.get("/calc/somar:param1/:param2", calculadoraController.somar)


app.listen(
    3333,
     () => console.log("Servidor executando na porta 3333")
)


