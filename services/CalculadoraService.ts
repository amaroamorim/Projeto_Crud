class CalculadoraService {

  async somar(param1, param2) {
    return Number(param1) + Number(param2)
  }

  async subtrair(param1, param2) {
    return Number(param1) - Number(param2)
  }

  async multiplicar(param1, param2) {
    return Number(param1) * Number(param2)
  }

  async dividir(param1, param2) {
    const resultado = Number(param1) / Number(param2)
    return Number(resultado).toFixed(2)
  }
  
  async potencia(param1, param2) {
    const resultado = Math.pow(param1, param2)
    return Number(resultado).toFixed(2)

  }

  async raizQuadrada(param) {
    const resultado = Math.sqrt(param)
    return Number(resultado).toFixed(2)

  }
}
export { CalculadoraService }