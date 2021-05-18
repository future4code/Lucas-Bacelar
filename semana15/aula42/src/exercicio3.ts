type Post = {
  autor: string
  texto: string
}

function buscarPostsPorAutor(
  posts: Array<Post>,
  autorInformado: string
): Array<Post> {
  return posts.filter((post) => {
    return post.autor === autorInformado
  })
}

const posts: Array<Post> = [
  {
    autor: 'Alvo Dumbledore',
    texto: 'Não vale a pena viver sonhando e se esquecer de viver',
  },
  {
    autor: 'Severo Snape',
    texto: 'Menos 10 pontos para Grifinória!',
  },
  {
    autor: 'Hermione Granger',
    texto: 'É levi-ô-sa, não levio-sá!',
  },
  {
    autor: 'Dobby',
    texto: 'Dobby é um elfo livre!',
  },
  {
    autor: 'Lord Voldemort',
    texto: 'Avada Kedavra!',
  },
]

const postsDoDobby = buscarPostsPorAutor(posts, 'Dobby')

console.log(postsDoDobby)
