import { CalculadoraService } from "../services/CalculadoraService"

class CalculadoraController {

  async somar(req, res) {
    const { param1, param2 } = req.params

    const calcService = new CalculadoraService

    const soma = calcService.somar(param1, param2)

    return res.send({soma})

  }

}



export { CalculadoraController }