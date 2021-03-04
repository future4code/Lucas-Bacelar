const postContainer = document.getElementById("post-container")
let postData, post

if(localStorage.getItem('postData')){
    post = JSON.parse( localStorage.getItem('postData'))
    postData = post.postData
    atualizarBlog()
}

window.onstorage = function () {
    post = JSON.parse( localStorage.getItem('postData'))
    postData = post.postData
    atualizarBlog()
}

function atualizarBlog () {
    let post_length = postData.length
    postContainer.innerHTML = ""
    for(let i = 0; i < post_length; i++) {

        let postTemp = postData[i]
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

        postContainer.appendChild(div)
    }
}