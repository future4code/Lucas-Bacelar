function printArrayValues(arr: any[], index: number = arr.length - 1): void {
  if (index >= 0) {
    printArrayValues(arr, index - 1)
    console.log(arr[index])
  }
}

const input4 = ['0', '1', '2', '3']
printArrayValues(input4)
