// Butões para criar e limpar tarefas
const criar = document.getElementById("criar-tarefa")
const limpar = document.getElementById("limpar-tarefa")

// Input da nova tarefa
const input = document.getElementById("tarefa")

// Lista de seleção dos dias da semana
const weekDay = document.getElementById("dias-semana")

// Seção onde estão guardados os dias
const section = document.querySelector("section")

// Divs contendo as tarefas
const semanaConteudo = document.querySelectorAll(".semana > div")

const formEntrada = document.querySelector(".formulario")

// Inserção do formulário da entrada da hora 

let selectHour = document.createElement("SELECT")
selectHour.setAttribute("name", "horas")
selectHour.setAttribute("id", "horas")

for(let i = 1; i < 24; i++) {
    let hour = document.createElement("option")
    hour.setAttribute("value", i)
    let hourText = document.createTextNode(`${i}h`)
    hour.appendChild(hourText)
    selectHour.appendChild(hour)
}

formEntrada.appendChild(selectHour)

// Seleção do formulário de horas

const hourDay = document.getElementById("horas")

// Limpar todas as tarefas
limpar.onclick = function () {
    for(let i = 0, j = semanaConteudo.length; i < j; i++){
        semanaConteudo[i].innerHTML = ""
    }
}


// Riscar a tarefa
section.onclick = function (e) {
    if(e.target && e.target.nodeName == "P")
    {
        if(e.target.style.textDecoration === "line-through") {
            e.target.style.textDecoration = "none"
            e.stopPropagation()
        }
        else {
            e.target.style.textDecoration = "line-through"
            e.stopPropagation()
        }
    }
}


// Criar uma tarefa
criar.onclick = function () {
    if(input.value === "" || input.value === " ") {
        alert("A tarefa está em branco")
    }

    else {
        const task = input.value
        const day = weekDay.value
        const hour = hourDay.value

        const taskDay = document.getElementById(day)
        taskDay.innerHTML += `<p class="item-lista" data-hour="${hour}"> ${task}</p>`
        input.value = " "
    }
}












