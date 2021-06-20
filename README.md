### Desafio TécnicoDesafio TécnicoDesafio TécnicoDesafio Técnico
Se você chegou até aqui é porque se interessou em ser um softplayer. Como temos muitas oportunidades para você colocar a mão na massa, queremos ver como você se sai com o cenário abaixo, por meio do qual conseguiremos avaliar várias de suas competências.
A demanda

### Deverá ser criada uma aplicação de cadastro de pessoas:Deverá ser criada uma aplicação de cadastro de pessoas:

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

### Segurança
O acesso à aplicação só poderá ser realizado por um usuário pré-existente via autenticação basic.

### Instalação
A aplicação deverá estar disponível em uma imagem docker a partir do docker-hub e não deve exigir configurações/parâmetros. Ou seja, ao rodar a imagem, deve levantar a aplicação e funcionar.

[![install](install "install")](https://github.com/h4liss0n/softplan-dev/blob/main/readme/install.gif "install")


https://github.com/h4liss0n/softplan-dev/blob/main/readme/install.gif

### Código fonte
A aplicação deverá possuir um endpoint /source acessível sem autenticação via HTTP GET que deverá retornar o link do projeto no github com o código fonte do projeto desenvolvido.

### Extras
-	Teste de integração da API em linguagem de sua preferência (Damos importância para pirâmide de testes) 👍
-	A API desenvolvida em REST, seguindo o modelo de maturidade de Richardson ou utilizando GraphQL.😒
-	A API deverá conter documentação executável que poderá ser utilizada durante seu desenvolvimento. (Utilizar swagger)👍
-	Integração com OAuth 2 Google (https://developers.google.com/identity/protocols/OAuth2) 😒
-	Implementar Chat entre as pessoas que estão na aplicação 👍
-	Versão 2 da API que deve incluir endereço da pessoa como dado obrigatório. Versão 1 deve continuar funcionando.🤣
