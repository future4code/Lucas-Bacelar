# To-do List (backend)

## 📌 Sobre a aplicação
Esse é o backend de uma to-do list onde o usuário pode criar tarefas e colocar seu progresso, além de poder adicionar outras pessoas responsáveis por aquela tarefa.

## ⚙ Tecnologias
- Node.js
- day.js
- Express
- Typescript
 
## 🛠 Instalação
```bash
# Clone esse repositório
$ svn checkout https://github.com/future4code/Lucas-Bacelar/trunk/semana16/todoList

# Acesse a pasta no projeto
$ cd todoList

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

- **1. Criar usuário**

    **Método:** PUT
    **Path:** `/user`

    **Body:**

    ```json
    {
    	"name": "Astro Dev",
    	"nickname": "astrodev",
    	"email": "astro@dev.com"
    }
    ```

- **2. Pegar usuário pelo id**

	**Método:** GET
	**Path:** `/user/:id`

	**Path Param**: é o id do usuário

	**Body de Resposta:**

	```json
	{
		"id": "001",
		"nickname": "astrodev"
	}
	```

- **3. Editar usuário**

    **Método:** POST
    **Path:** `/user/edit/:id`

    **Path Param**: é o id do usuário

    **Body:**

    ```json
    {
    	"name": "Astro Dev",
    	"nickname": "astrodev"
    }
    ```
- **4. Criar tarefa**

    **Método:** PUT
    **Path:** `/task`

    **Body:**

    ```json
    {
    	"title": "Criar banco dos alunos",
    	"description": "Devemos criar o banco dos alunos para o módulo do backend",
    	"limitDate": "04/05/2020",
    	"creatorUserId": "001"
    }
    ```

- **5. Pegar tarefa pelo id**

    **Método:** GET
    **Path:** `/task/:id`

    **Path Param**: é o id da tarefa

    **Body de Resposta:**

    ```json
    {
    	"taskId": "001",
    	"title": "Criar banco dos alunos",
    	"description": "Devemos criar o banco dos alunos para o módulo do backend",
    	"limitDate": "04/05/2020",
    	"status": "to_do",
    	"creatorUserId": "001",
    	"creatorUserNickname": "astrodev"
    }
    ```

- **6. Pegar todos os usuários**

    **Método:** GET
    **Path:** `/user/all`

    **Body de Resposta:**

    ```json
    {
    	"users": [{
    		"id": "001",
    		"nickname": "astrodev"
    	}]
    }
    ```

    **Observações**:

    - O endpoint deve retornar um array vazio se não encontrar os resultados

- **7. Pegar tarefas criadas por um usuário**

    **Método:** GET
    **Path:** `/task?creatorUserId=id`

    **Query String:** indica o id do usuário que criou através da chave `creatorUserId`

    **Body de Resposta:**

    ```json
    {
    	"tasks": [{
    		"taskId": "001",
    		"title": "Criar banco dos alunos",
    		"description": "Devemos criar o banco dos alunos para o módulo do backend",
    		"limitDate": "04/05/2020",
    		"creatorUserId": "001",
    		"status": "to_do",
    		"creatorUserNickname": "astrodev"
    	}]
    }
    ```

- **8. Pesquisar usuário**

    **Método:** GET
    **Path:** `/user?query=astro`

    **Query String:** indica o termo de busca através da chave `query`

    **Body de Resposta:**

    ```json
    {
    	"users": [{
    		"id": "001",
    		"nickname": "astrodev",
    	}]
    }
    ```

- **9. Atribuir um usuário responsável a uma tarefa**

    **Método:** POST
    **Path:** `/task/responsible`

    **Body:**

    ```json
    {
    	"task_id": "Astro Dev",
    	"responsible_user_id": "astrodev"
    }
    ```

- **10. Pegar usuários responsáveis por uma tarefa**

    **Método:** GET
    **Path:** `/task/:id/responsible`

    **Path Param**: é o id da tarefa

    **Body de Resposta:**

    ```json
    {
    	"users": [{
    		"id": "001",
    		"nickname": "astrodev"
    	}]
    }
    ```

- **11. Pegar tarefa pelo id**

    **Método:** GET
    **Path:** `/task/:id`

    **Path Param**: é o id da tarefa

    **Body de Resposta:**

    ```json
    {
    	"taskId": "001",
    	"title": "Criar banco dos alunos",
    	"description": "Devemos criar o banco dos alunos para o módulo do backend",
    	"limitDate": "04/05/2020",
    	"creatorUserId": "001",
    	"creatorUserNickname": "astrodev",
    	"responsibleUsers": [
    		{
    			"id": "001",
    			"nickname": "astrodev"
    		}
    	]
    }
    ```

- **12. Atualizar o status da tarefa**

    **Method:** POST

    **Path:** `/task/status/edit`

    **Body:**

    ```json
    {
    	"status": "doing"
    }
    ```

- **13. Pegar todas as tarefas por status**

    **Método:** GET
    **Path:** `/task?status=valor_do_status`

    **Query String:** indica o status através da chave `status`

    **Body de Resposta:**

    ```json
    {
    	"tasks": [{
    		"taskId": "001",
    		"title": "Criar banco dos alunos",
    		"description": "Devemos criar o banco dos alunos para o módulo do backend",
    		"limitDate": "04/05/2020",
    		"creatorUserId": "001",
    		"creatorUserNickname": "astrodev"
    	}]
    }
    ```

- **14. Pegar todas as tarefas atrasadas**

    **Método:** GET
    **Path:** `/task/delayed`

    **Body de Resposta:**

    ```json
    {
    	"tasks": [{
    		"taskId": "001",
    		"title": "Criar banco dos alunos",
    		"description": "Devemos criar o banco dos alunos para o módulo do backend",
    		"limitDate": "04/05/2020",
    		"creatorUserId": "001",
    		"creatorUserNickname": "astrodev"
    	}]
    }
    ```