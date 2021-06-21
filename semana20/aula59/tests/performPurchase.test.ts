import { PerformPurchaseInputDTO } from '../src/features/performPurchase/PerformPurchaseDTO'
import { performPurchase } from '../src/features/performPurchase/PerformPurchaseFeat'

describe('Perform Purchase', () => {
  const user: PerformPurchaseInputDTO = {
    name: 'Astrodev',
    balance: 200,
  }

  test('Saldo maior que o valor de compra', () => {
    const result = performPurchase(user, 50)

    expect(result).toEqual({
      name: 'Astrodev',
      balance: 150,
    })
  })

  test('Saldo igual ao valor de compra', () => {
    const result = performPurchase(user, 200)

    expect(result).toEqual({
      name: 'Astrodev',
      balance: 0,
    })
  })

  test('Saldo menor que o valor de compra', () => {
    const result = performPurchase(user, 250)

    expect(result).toBeUndefined()
  })
})
