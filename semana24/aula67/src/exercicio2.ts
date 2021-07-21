function recursiveSum(n: number): number {
  if (n === 0) return 0
  return n + recursiveSum(n - 1)
}

const input = 5
const result = recursiveSum(input)
console.log(result)
