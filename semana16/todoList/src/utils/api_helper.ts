import dayjs from 'dayjs'

export function inputValido(input: string | number | undefined): boolean {
  if (input === undefined || input === 'undefined' || !input) {
    return false
  }
  return true
}

export function todosValidos(inputs: Array<string>): boolean {
  const invalid = inputs.some((item) => !inputValido(item))
  if (invalid) {
    return false
  }
  return true
}

export function dataValida(dayjsDate: dayjs.Dayjs) {
  return dayjsDate.isValid()
}
