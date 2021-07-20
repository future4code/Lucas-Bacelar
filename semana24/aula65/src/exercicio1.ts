function isOneEdit(originalString: string, modifiedString: string): boolean {
  if (Math.abs(originalString.length - modifiedString.length) > 1) return false

  if (originalString.length > modifiedString.length)
    return originalString.includes(modifiedString)
  else if (modifiedString.length > originalString.length)
    return modifiedString.includes(originalString)

  let charsDiffCount = 0
  for (let i = 0; i < originalString.length; i++) {
    if (originalString[i] !== modifiedString[i]) charsDiffCount++
  }

  return charsDiffCount === 1
}

console.log('funcional')
