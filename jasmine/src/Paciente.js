export class Paciente {
  constructor (nome, idade, peso, altura) {
    this._nome = nome
    this._idade = idade
    this._peso = peso
    this._altura = altura
  }

  get nome () {
    return this._nome
  }

  get idade () {
    return this._idade
  }

  get peso () {
    return this._peso
  }

  get altura () {
    return this._altura
  }

  imprime () {
    alert(this.nome + ' tem ' + this.idade)
  }

  batimentos () {
    return this.idade * 365 * 24 * 60 * 80
  }

  imc () {
    return this.peso / (this.altura * this.altura)
  }
}
