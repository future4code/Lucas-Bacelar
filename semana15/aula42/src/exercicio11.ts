function fatorial(numero: number): number {
  if (numero === 0 || numero === 1) {
    return 1
  }
  const resultado = numero * fatorial(numero - 1)
  return resultado
}

console.log(fatorial(6))
