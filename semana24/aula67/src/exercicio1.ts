function printNumbersCrescent(n: number): void {
  if (n < 0) return
  printNumbersCrescent(n - 1)
  console.log(n)
}

console.log('--- Print crescent ---')
printNumbersCrescent(10)

function printNumbersDecrescent(n: number): void {
  if (n < 0) return
  console.log(n)
  printNumbersDecrescent(n - 1)
}

console.log('--- Print decrescent ---')
printNumbersDecrescent(10)
