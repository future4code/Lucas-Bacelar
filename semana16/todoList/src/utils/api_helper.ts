import dayjs from 'dayjs'
import { v4 as uuidv4 } from 'uuid'

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

export function dataValida(dayjsDate: dayjs.Dayjs): boolean {
  return dayjsDate.isValid()
}

export function gerarId(): string {
  return uuidv4()
}
