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


// Criar uma tarefa
criar.onclick = function () {
    if(input.value === "" || input.value === " ") {
        alert("A tarefa está em branco")
    }

    else {
        const task = input.value
        const day = weekDay.value
        const taskDay = document.getElementById(day)
        taskDay.innerHTML += `<p class="item-lista">- ${task}</p>`
        input.value = " "
    }
}

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

// Criar horas nas semanas
for(int i = 1; i <= 24; i++) {
    
}





