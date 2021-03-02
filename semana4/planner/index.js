const button = document.getElementById("criar-tarefa")
const input = document.getElementById("tarefa")
const weekDay = document.getElementById("dias-semana")

button.onclick = function () {
    const task = input.value
    const day = weekDay.value

    const taskDay = document.getElementById(day)
    taskDay.innerHTML += `<p>- ${task}</p>`
    input.value = " "
}