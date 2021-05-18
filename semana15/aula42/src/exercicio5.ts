type numberProperties = {
  sum: number
  remainder: number
  product: number
  biggest: number
}

function numberInfo(first: number, second: number): numberProperties {
  let sum = first + second
  let remainder = first - second
  let product = first * second
  let biggest = first > second ? first : second

  let numberData: numberProperties = {
    sum,
    remainder,
    product,
    biggest,
  }
  return numberData
}

console.log(numberInfo(2, 4))
