export function validDate(date: Date): boolean {
  return !isNaN(date.getTime())
}

export function formatToSQLDate(date: Date): string {
  return date.toLocaleDateString('en-CA')
}
