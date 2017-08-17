export class Consulta {
  constructor (paciente, procedimentos, particular, retorno) {
    this._paciente = paciente
    this._procedimentos = procedimentos
    this._particular = particular
    this._retorno = retorno
  }

  get paciente () {
    return this._paciente
  }

  get procedimentos () {
    return this._procedimentos
  }

  get particular () {
    return this._particular
  }

  get retorno () {
    return this._retorno
  }

  preco () {
    if (this.retorno) return 0

    let precoFinal = 0

    this.procedimentos.forEach(function (procedimento) {
      if (procedimento === 'raio-x') precoFinal += 55
      else if (procedimento === 'gesso') precoFinal += 32
      else precoFinal += 25
    })

    if (this.particular) precoFinal *= 2

    return precoFinal
  }
}
