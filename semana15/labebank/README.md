# Labebank (backend)

## 📌 Sobre a aplicação
O **Labebank** é o backend de uma aplicação bancária contendo as principais funções como transferências bancárias, criação de contas e operações com o saldo (saque e depósito).

## ⚙ Tecnologias
- Node.js
- day.js
- Express
- Typescript
 
## 🛠 Instalação
```bash
# Clone esse repositório
$ svn checkout https://github.com/future4code/Lucas-Bacelar/trunk/semana15/labebank

# Acesse a pasta no projeto
$ cd labebank

# Instale as dependências
$ npm install
# or
$ npm install -g yarn

# Execute a aplicação 
$ npm start
# or
$ yarn start

# A porta do servidor irá abrir no console: https://localhost:3003
```

## 🔨  Como usar

### Criar usuário
Um cliente pode criar uma conta no banco se tiver idade igual ou maior do que 18 anos. Ele deve informar: nome, CPF e data de nascimento.

Todas as contas, ao serem criadas, começam com o saldo zerado. Não podem existir dois usuários diferentes com o mesmo CPF.

**Exemplo de requisição**
````js
const axios = require('axios');

let data = {
  "nome": "Astrodev",
  "cpf": "123.564.321-20",
  "dataNasc": "11/05/2000",
};

axios.post('https://localhost:3003/users', data)
.then((response) => {
  console.log(response.data);
})
.catch((error) => {
  console.log(error);
});
````

 **Resposta**

Em caso de sucesso o servidor retorna um objeto com os dados do usuário criado.

    HTTP/1.1 201 Created
    Date: Thu, 24 Feb 2020 12:36:30 GMT
    Status: 201 Created
    Content-Type: application/json

    {
		"nome": "Astrodev",
  		"cpf": "123.564.321-20",
  		"dataNasc": "11/05/2020",
		"saldo": 0
		"extratos": []
	}

### Pegar saldo
O usuário consegue verificar o saldo da sua conta, passando o seu nome e o seu CPF.

**Exemplo de requisição**
````js
const axios = require('axios');

let data = {
  "nome": "Astrodev",
  "cpf": "123.564.321-20"
};

axios.get('https://localhost:3003/users/balance', data)
.then((response) => {
  console.log(response.data);
})
.catch((error) => {
  console.log(error);
});
````

 **Resposta**

Em caso de sucesso o servidor retorna um objeto com os dados do usuário criado.

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2020 12:36:30 GMT
    Status: 201 Created
    Content-Type: application/json

    {
		"saldo": 0
	}

### Adicionar saldo
O usuário consegue adicionar saldo à sua conta, passando seu nome, o CPF e o valor que desejar.

**Exemplo de requisição**
````js
const axios = require('axios');

let data = {
  "nome": "Astrodev",
  "cpf": "123.564.321-20",
  "valor": 10
};

axios.put('https://localhost:3003/users/deposit', data)
.then((response) => {
  console.log(response.data);
})
.catch((error) => {
  console.log(error);
});
````

 **Resposta**

Em caso de sucesso o servidor retorna um objeto com os dados do usuário criado.

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2020 12:36:30 GMT
    Status: 201 Created
    Content-Type: application/json

    {
		"nome": "Astrodev",
		"saldo": 10
	}

### Pagar Conta
O usuário pode pagar uma conta, se quiser, passando: um valor, uma descrição, uma data de pagamento e o cpf do titular.

Caso ele não informe a date, considera-se que o pagamento é para ser feito no mesmo dia.

Além disso, ele não pode agendar um pagamento para um dia que já passou ou tentar pagar uma conta cujo valor seja maior do que o seu saldo.

**Exemplo de requisição**
````js
const axios = require('axios');

let data = {
  "valor": 20,
  "cpf": "123.564.321-20",
  "descricao": "Conta da agua",
  "dataVenc": "20/05/2022"
};

axios.put('https://localhost:3003/users/deposit', data)
.then((response) => {
  console.log(response.data);
})
.catch((error) => {
  console.log(error);
});
````

 **Resposta**

Em caso de sucesso o servidor retorna um objeto com os dados do usuário criado.

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2020 12:36:30 GMT
    Status: 201 Created
    Content-Type: application/json

    {
		"valor": 20,
        "data": "20/05/2022",
		"descricao": "Conta da agua"
	}

### Transferência Interna
 Para realizar esta transferência, o usuário deve informar o seu nome, o seu CPF, o nome do destinatário, o CPF do destinatário e o valor em si. 

Transferências não podem ser agendadas e devem respeitar o saldo do usuário remetente.

**Exemplo de requisição**
````js
const axios = require('axios');

let data = {
  "nome": "Astrodev",
  "cpf": "123.564.321-20",
  "nomedest": "Dummie",
  "cpfdest": "234.345.321-20",
  "valor": 50
};

axios.put('https://localhost:3003/users/deposit', data)
.then((response) => {
  console.log(response.data);
})
.catch((error) => {
  console.log(error);
});
````

 **Resposta**

Em caso de sucesso o servidor retorna um objeto com os dados do usuário criado.

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2020 12:36:30 GMT
    Status: 201 Created
    Content-Type: application/json

    {
		remetente: {
			valor: -50,
			data: "20/05/2021",
			descricao: "Transferência Bancária"
        }
		destinatario: {
			valor: 50,
			data: "20/05/2021",
			descricao: "Transferência Bancária"
        }
	}


---
<blockquote>
    Feito por Lucas Bacelar 🪐
</blockquote>
