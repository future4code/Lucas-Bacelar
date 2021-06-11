export function isInvalidEmail(email: string): boolean {
  const regex = new RegExp('[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z0-9_-]+')
  return regex.test(email) === false
}

export function isInvalidPassword(password: string): boolean {
  return password.length > 5 === false
}

export function hasAnyEmptyValue(values: Array<any>): boolean {
  for (let value of values) {
    if (!value && typeof value === 'string') {
      return true
    } else if (value === undefined || value === null || !value) {
      return true
    }
  }
  return false
}
