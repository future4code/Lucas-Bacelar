// 3
const fs = require('fs')
const logger = require('../logger')

// Converte os dados do arquivo JSON e armazena os dados dele na variável tarefas
let rawData = fs.readFileSync('tarefas.json')
let tarefas = JSON.parse(rawData).tarefas

const novaTarefa = process.argv[2]
if (!novaTarefa) {
  logger.error(
    'Por favor providencie a tarefa como argumento: npm start <tarefa>'
  )
  process.exit(1)
}

tarefas = [...tarefas, novaTarefa]

let tarefasObj = JSON.stringify({
  tarefas,
})

// Escreve a tarefa adicionada no tarefas.json
fs.writeFile('tarefas.json', tarefasObj, (err) => {
  if (err) throw err
  logger.success('Tarefa adicionada com sucesso\n')
  logger.success('tarefas:', tarefas)
})
