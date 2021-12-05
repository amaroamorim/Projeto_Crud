import { arrayBuffer } from "stream/consumers"

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

  async somarVarios(params) {
    let acum = 0
   params.forEach(element => {
      acum += element.numero
    });
    return acum
    
  }


  async subtrairVarios(params) {
    let resultado = params[0].numero

    for (let i=1; i< params.length; i++){
      resultado -= params[i].numero
    }
    return resultado
    
  }

  async multiplicarVarios(params) {
    let resultado = params[0].numero

    for (let i=1; i< params.length; i++){
      resultado *= params[i].numero
    }
    return resultado
    
  }

  async dividirVarios(params) {

    if (!Array.isArray(params)){
      throw Error
    }
    if (params.length < 2){
      throw Error
    }

    let resultado = params[0].numero

    for (let i=1; i< params.length; i++){
      resultado /= params[i].numero
    }
    return resultado
    
  }











}
export { CalculadoraService }