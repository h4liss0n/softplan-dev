### Technical Challenge
### A people registration application must be created:
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
 - backend jest (unit and integration)
 - frontend jest (integration)

Chat
- Sockect IO

Deploy: 
- Docker
- nginx
- nodeAlphine



### Back-end 
Name - required
Gender
Email - not required, must be validated if filled
Date of birth - required, must be validated
Place of birth
Nationality
CPF - required, must be validated (format and there can't be two registrations with the same CPF)

### Front-end
The application must be accessible via a web browser and have a screen with a form. There are no restrictions regarding technology for frontend development.
![person](https://github.com/h4liss0n/softplan-dev/blob/main/readme/create%20new%20person.gif)



### Security
Access to the application can only be done by a pre-existing user via basic authentication.

### Installation
The application must be available in a docker image from docker-hub and should not require configurations/parameters. In other words, when running the image, the application must start and work.
![install](https://github.com/h4liss0n/softplan-dev/blob/main/readme/install.gif)


### Source code
The application must have an endpoint /source accessible without authentication via HTTP GET that should return the link of the project on GitHub with the source code of the developed project.

### Extras
-	Integration test of the API in your preferred language (We give importance to the testing pyramid) 👍
-	Backend test
![basic auth](https://github.com/h4liss0n/softplan-dev/blob/main/readme/jest-backend.gif)
-	Frontend test
![basic auth](https://github.com/h4liss0n/softplan-dev/blob/main/readme/jest-frontend.gif)
-	The API developed in REST, following Richardson's maturity model or using GraphQL.😒
-	The API should contain executable documentation that can be used during its development. (Use Swagger)👍
![basic auth](https://github.com/h4liss0n/softplan-dev/blob/main/readme/sawgger1.gif)
![jwt](https://github.com/h4liss0n/softplan-dev/blob/main/readme/sawgger2.gif)
![filter](https://github.com/h4liss0n/softplan-dev/blob/main/readme/sawgger2.gif)
-	Integration with OAuth 2 Google (https://developers.google.com/identity/protocols/OAuth2) 😒
![google auth2](https://github.com/h4liss0n/softplan-dev/blob/main/readme/google-auth2.gif)
-	Implement Chat between the people who are in the application 👍
![google auth2](https://github.com/h4liss0n/softplan-dev/blob/main/readme/chat.gif)
-	Version 2 of the API that must include the person's address as a mandatory data. Version 1 should continue to work.🤣
