import axios from 'axios'

const baseUrl = 'https://viacep.com.br/ws'

export type userAddress = {
  logradouro: string
  bairro: string
  cidade: string
  estado: string
}

export async function cepInfo(cep: string): Promise<userAddress | null> {
  try {
    const result = await axios
      .get(`${baseUrl}/${cep}/json`)
      .then((result) => result.data)

    if (result.erro !== undefined) {
      return null
    }

    const address: userAddress = {
      logradouro: result.logradouro,
      bairro: result.bairro,
      cidade: result.localidade,
      estado: result.uf,
    }

    return address
  } catch (error) {
    return null
  }
}
