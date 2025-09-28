import { formatarMoedaBRL } from '~/commons/utils/formatCurrency'

describe('FormatCurrency', () => {
  it('deve formatar um número inteiro para BRL corretamente', () => {
    const input = formatarMoedaBRL(1000)
    const outPut = 'R$ 1.000,00'
    expect(input.replace(/\s/g, '')).toBe(outPut.replace(/\s/g, ''))
  })

  it('deve formatar um número decimal para BRL corretamente', () => {
    const input = formatarMoedaBRL(1234.56)
    const outPut = 'R$ 1.234,56'
    expect(input.replace(/\s/g, '')).toBe(outPut.replace(/\s/g, ''))
  })

  it('deve formatar zero corretamente', () => {
    const input = formatarMoedaBRL(0)
    const outPut = 'R$ 0,00'
    expect(input.replace(/\s/g, '')).toBe(outPut.replace(/\s/g, ''))
  })

  it('deve formatar valores negativos corretamente', () => {
    const input = formatarMoedaBRL(-50.75)
    const outPut = '-R$ 50,75'
    expect(input.replace(/\s/g, '')).toBe(outPut.replace(/\s/g, ''))
  })
})
