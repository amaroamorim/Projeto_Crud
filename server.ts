import { CalculadoraController } from "./controllers/CalculadoraController"

const calculadoraController = new CalculadoraController()

const express = require('express')
const app = express()

app.use(express.json())



app.get("/calc/somar/:param1/:param2", calculadoraController.somar)

app.get("/calc/subtrair/:param1/:param2", calculadoraController.subtrair)

app.get("/calc/multiplicar/:param1/:param2", calculadoraController.multiplicar)

app.get("/calc/dividir/:param1/:param2", calculadoraController.dividir)

app.get("/calc/potencia/:param1/:param2", calculadoraController.potencia)

app.get("/calc/raizQuadrada/:param", calculadoraController.raizQuadrada)

app.post("/somar-Varios", calculadoraController.somarVarios)

app.post("/subtrair-Varios", calculadoraController.subtrairVarios)

app.post("/multiplicar-Varios", calculadoraController.multiplicarVarios)

app.post("/dividir-Varios", calculadoraController.dividirVarios)





app.listen(
    3333,
    () => console.log("Servidor executando na porta 3333")
)