function iterativeSum(n: number): number {
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += i
  }
  return sum
}

const input3 = 5
const result3 = iterativeSum(input3)
console.log(result3)
