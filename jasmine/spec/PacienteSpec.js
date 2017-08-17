describe('Paciente', function () {
  it('deve calcular o IMC', function () {
    let guilherme = new Paciente('Guilherme', 28, 72, 1.82)

    expect(guilherme.imc()).toEqual(72 / (1.82 * 1.82))
  })

  it('deve calcular o IMC 2', function () {
    let guilherme = new Paciente('Guilherme', 28, 82, 1.77)

    expect(guilherme.imc()).toEqual(82 / (1.77 * 1.77))
  })
})
