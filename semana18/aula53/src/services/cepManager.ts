import axios from 'axios'

const baseUrl = 'https://viacep.com.br/ws'

export type cepInfo = {
  CEP: string
  Logradouro: string
  Bairro: string
  Cidade: string
  Estado: string
}

export async function cepInfo(cep: string): Promise<cepInfo | null> {
  try {
    const result = await axios
      .get(`${baseUrl}/${cep}/json`)
      .then((result) => result.data)

    if (result.erro !== undefined) {
      return null
    }

    const address: cepInfo = {
      CEP: result.cep,
      Logradouro: result.logradouro,
      Bairro: result.bairro,
      Cidade: result.localidade,
      Estado: result.uf,
    }

    return address
  } catch (error) {
    return null
  }
}
