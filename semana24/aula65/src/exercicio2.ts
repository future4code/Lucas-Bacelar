function compressString(text: string): string {
  const substrings = []
  let lastChar = input[0]
  let charCount = 0

  for (const char of input) {
    if (char !== lastChar) {
      substrings.push(lastChar + charCount)
      lastChar = char
      charCount = 0
    }
    charCount++
  }

  substrings.push(lastChar + charCount)
  let result = substrings.join('')

  return result.length > input.length ? input : result
}

const input = 'accuraaaaaaaaaate'
const input2 = 'accurate'
console.log(compressString(input))
console.log(compressString(input2))
