import { CalculadoraService } from "../services/CalculadoraService"

class CalculadoraController {

  async somar(req, res) {
    const { param1, param2 } = req.params

    const calcService = new CalculadoraService

    const resultado = await calcService.somar(param1, param2)

    return res.send({ resultado })
  }

  async subtrair(req, res) {
    const { param1, param2 } = req.params

    const calcService = new CalculadoraService

    const resultado = await calcService.subtrair(param1, param2)

    return res.send({ resultado })
  }

  async multiplicar(req, res) {
    const { param1, param2 } = req.params

    const calcService = new CalculadoraService

    const resultado = await calcService.multiplicar(param1, param2)

    return res.send({ resultado })
  }
  async dividir(req, res) {
    const { param1, param2 } = req.params

    const calcService = new CalculadoraService

    const resultado = await calcService.dividir(param1, param2)

    return res.send({ resultado })
  }

  async potencia(req, res) {
    const { param1, param2 } = req.params

    const calcService = new CalculadoraService

    const resultado = await calcService.potencia(param1, param2)

    return res.send({ resultado })
  }
  
  async raizQuadrada(req, res) {
    const { param } = req.params

    const calcService = new CalculadoraService

    const resultado = await calcService.raizQuadrada(param)

    return res.send({ resultado })
  }


}

export { CalculadoraController }