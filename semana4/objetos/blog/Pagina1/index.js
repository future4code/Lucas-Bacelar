const titulo = document.getElementById("titulo-post")
const autor = document.getElementById("autor-post")
const conteudo = document.getElementById("conteudo-post")
const imagem = document.getElementById("imagem-post")
const criar = document.querySelector("button")

// Modelo da class blogPost
function blogPost (titulo, autor, conteudo, numero, imagem) {
    this.titulo = titulo
    this.autor = autor
    this.conteudo = conteudo
    this.numero = numero
    if(imagem != false) {
        this.imagem = imagem
    }
}


function log () {
    console.log(conteudo.value);
}

const posts = []
let numeroPost = 1

// Inserção do post no array
criar.onclick = function () {
    let tituloTexto = titulo.value
    let autorTexto = autor.value
    let conteudoTexto = conteudo.value
    let imagemURL = imagem.value

    if(imagemURL.includes("http")) {
        imagemURL = imagemURL
    }
    else {
        imagemURL = false
    }

    if(tituloTexto !== "" && autorTexto !== "" && conteudoTexto !== "") {
        const postTemp = new blogPost(tituloTexto, autorTexto, conteudoTexto, numeroPost, imagemURL)
        numeroPost++
        console.log(postTemp);
        posts.unshift(postTemp)

        titulo.value = ""
        autor.value = ""
        conteudo.value = ""
        imagem.value = ""

        localStorage.setItem('postData', JSON.stringify({postData: posts}))
    }

    else {
        alert("Você não preencheu corretamente os campos de texto")
    }
}