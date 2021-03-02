const criar = document.getElementById("criar-tarefa")
const limpar = document.getElementById("limpar-tarefa")
const input = document.getElementById("tarefa")
const weekDay = document.getElementById("dias-semana")
const itemLista = document.getElementsByClassName("item-lista")

const semanaConteudo = document.querySelectorAll(".semana > div")

function passThrough (e) {
    if(e.style.textDecoration === "line-through") {
        e.style.textDecoration = "none"
    }
    else {
        e.style.textDecoration = "line-through"
    }
}

criar.onclick = function () {
    if(input.value === "" || input.value === " ") {
        alert("A tarefa está em branco")
    }

    else {
        const task = input.value
        const day = weekDay.value
        const taskDay = document.getElementById(day)
        taskDay.innerHTML += `<p class="item-lista" onclick="passThrough(this)">- ${task}</p>`
        input.value = " "
    }
}

limpar.onclick = function () {
    for(let i = 0, j = semanaConteudo.length; i < j; i++){
        semanaConteudo[i].innerHTML = ""
    }
}




