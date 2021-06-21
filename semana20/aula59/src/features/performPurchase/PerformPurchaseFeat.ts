import {
  PerformPurchaseInputDTO,
  PerformPurchaseOutputDTO,
} from './PerformPurchaseDTO'

export function performPurchase(
  user: PerformPurchaseInputDTO,
  value: number
): PerformPurchaseOutputDTO | undefined {
  if (user.balance < value) {
    return undefined
  }

  return {
    ...user,
    balance: user.balance - value,
  }
}
