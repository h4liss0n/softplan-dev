### Desafio TécnicoDesafio TécnicoDesafio TécnicoDesafio Técnico
### Deverá ser criada uma aplicação de cadastro de pessoas:Deverá ser criada uma aplicação de cadastro de pessoas:
![basic auth](https://github.com/h4liss0n/softplan-dev/blob/main/readme/telas.gif)


Fontend: 
- React 
- CSS 
- TypeScript  
- Redux
- Saga

Backend: 
- Node 
- TypeScript
- TypeOrm 
- Postgres 
- Express

Test
 - backend jest (unitário e integração)
 - frontend jest (integração)

Chat
- Sockect IO

Deploy: 
- Docker
- nginx
- nodeAlphine



### Back-end 
- 	Nome - obrigatório
- 	Sexo
- 	E-mail - não obrigatório, deve ser validado caso preenchido
- 	Data de Nascimento - obrigatório, deve ser validada
- 	Naturalidade
- 	Nacionalidade
- 	CPF - obrigatório, deve ser validado (formato e não pode haver dois cadastros com mesmo cpf)`

### Front-end
A aplicação deverá ser acessível via navegador e possuir uma tela com formulário. Não há restrição em relação à tecnologia para o desenvolvimento do frontend.
![person](https://github.com/h4liss0n/softplan-dev/blob/main/readme/create%20new%20person.gif)



### Segurança
O acesso à aplicação só poderá ser realizado por um usuário pré-existente via autenticação basic.

### Instalação
A aplicação deverá estar disponível em uma imagem docker a partir do docker-hub e não deve exigir configurações/parâmetros. Ou seja, ao rodar a imagem, deve levantar a aplicação e funcionar.
![install](https://github.com/h4liss0n/softplan-dev/blob/main/readme/install.gif)


### Código fonte
A aplicação deverá possuir um endpoint /source acessível sem autenticação via HTTP GET que deverá retornar o link do projeto no github com o código fonte do projeto desenvolvido.

### Extras
-	Teste de integração da API em linguagem de sua preferência (Damos importância para pirâmide de testes) 👍
-	Teste backend
![basic auth](https://github.com/h4liss0n/softplan-dev/blob/main/readme/jest-backend.gif)
-	Teste frontend
![basic auth](https://github.com/h4liss0n/softplan-dev/blob/main/readme/jest-frontend.gif)
-	A API desenvolvida em REST, seguindo o modelo de maturidade de Richardson ou utilizando GraphQL.😒
-	A API deverá conter documentação executável que poderá ser utilizada durante seu desenvolvimento. (Utilizar swagger)👍
![basic auth](https://github.com/h4liss0n/softplan-dev/blob/main/readme/sawgger1.gif)
![jwt](https://github.com/h4liss0n/softplan-dev/blob/main/readme/sawgger2.gif)
![filter](https://github.com/h4liss0n/softplan-dev/blob/main/readme/sawgger2.gif)
-	Integração com OAuth 2 Google (https://developers.google.com/identity/protocols/OAuth2) 😒
![google auth2](https://github.com/h4liss0n/softplan-dev/blob/main/readme/google-auth2.gif)
-	Implementar Chat entre as pessoas que estão na aplicação 👍
![google auth2](https://github.com/h4liss0n/softplan-dev/blob/main/readme/chat.gif)
-	Versão 2 da API que deve incluir endereço da pessoa como dado obrigatório. Versão 1 deve continuar funcionando.🤣
