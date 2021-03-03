const titulo = document.getElementById("titulo-post")
const autor = document.getElementById("autor-post")
const conteudo = document.getElementById("conteudo-post")
const imagem = document.getElementById("imagem-post")
const criar = document.querySelector("button")
const containerPost = document.getElementById("container-de-posts")

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

function atualizarBlog () {
    let lenght = posts.length
    containerPost.innerHTML = ""
    for(let i = 0; i < lenght; i++) {

        let postTemp = posts[i]
        let div = document.createElement("DIV")

        div.setAttribute("class", "post-div")
        if(postTemp.imagem) {
            div.innerHTML = `<h2> Post ${postTemp.numero} </h2>
                            <p><span>Titulo: </span>${postTemp.titulo}</p> 
                            <p><span>Autor: </span>${postTemp.autor}</p>
                            <h4> Conteudo </h4> 
                            <div class="img-container" ><img src='${postTemp.imagem}' alt='imagem do post${postTemp.numero}'></div>
                            <p>${postTemp.conteudo}</p>`
        }
        else {
            div.innerHTML = `<h2> Post ${postTemp.numero} </h2>
                            <p><span>Titulo: </span>${postTemp.titulo}</p> 
                            <p><span>Autor: </span>${postTemp.autor}</p>
                            <h4> Conteudo </h4> 
                            <p>${postTemp.conteudo}</p>`
        }

        containerPost.appendChild(div)
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
        atualizarBlog()
    }

    else {
        alert("Você não preencheu corretamente os campos de texto")
    }
}