# User API - Node, Typescript, Express, Ravendb, Swagger

![GitHub repo size](https://img.shields.io/github/repo-size/willianmarquess/nodetscleanarchitecture?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/willianmarquess/nodetscleanarchitecture?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/willianmarquess/nodetscleanarchitecture?style=for-the-badge)

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
* Nodejs >= 6.9
* Docker
* Docker Compose


Para executar o projeto siga os seguintes passos:
1. rode o comando: docker-compose up -d
2. acesse o swagger no endereço: http://localhost:3000/swagger/api

## Motivação 	:thought_balloon:

O projeto foi desenvolvido para fins didáticos, promovendo uma prática nos estudos sobre S.O.L.I.D e Clean Architecture utilizando a plataforma NodeJs com Typescript.
A ideia foi desenvolver uma API utilizando orientação a objetos, seguindo os conceitos do S.O.L.I.D

1. S (Princício da responsabilidade única) - Desenvolver classes e métodos que tenham somente um propósito.
2. O (Princípio aberto fechado) - Desenvolver classes que possam estender comportamentos de outras classes sem modificar a classe pai.
3. L (Princípio da substituição de Liskov) - Desenvolver classes pai que possam ser substituíveis por suas classes filhas.
4. I (Princípio da Segregação de Interface) - Desenvolver interfaces específicas e buscando não utilizar interfaces genéricas.
5. D (Princípio da Inversão de Dependencia) - Desenvolver as classes fazendo com que sempre dependam de abstrações e não de implementações.

## Clean Architecture

<img src="https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg"></img>

## Entendendo as camadas do projeto

1. Camada (DOMAIN) - A camada central da aplicação (core), camada onde ficam as regras de negócio e lógica da aplicação, contém as regras que ira compor junto com outras regras de negócio a regra de aplicação na camada (APPLICATION)
2. Camada (APPLICATION - a camada contém outras duas subcamadas, (CONTROLLER) e (USECASE), a camada de aplicação é responsável por organizar a composição de várias regras de negócio para atender a regra da aplicação.
- Camada (CONTROLLER) a camada mais externa da aplicação que se comunica diretamente com o adaptador, a controller recebe informações necessárias para a execução de um caso de uso, podendo ainda realizar uma primeira validação de dados e enviar os dados para o caso de uso realizar a regra da aplicação.
- Camada (USECASE) a camada use case recebe informações (ou não) das controllers e executa uma ação definida como (regra de aplicação) utilizando o domínio e chamadas ao banco de dados.
3. Camada (INFRA) a camada responsável por realizar chamadas a infraestrutura externa da aplicação (banco de dados, serviço de e-mail), contém uma classe que cria o contexto (conexão) com o banco de dados externo e prove uma camada abstraida para a utilização do banco de dados, utilizando o Pattern Repository.
4. Camada (MAIN) a camada principal da aplicação, a camada mais externa, que contém outras subcamadas como: factories, routes e o entrypoint da aplicação: server.ts
- Camada (FACTORIES) camada responsável por prover uma fábrica de objetos, no projeto temos uma fábrica da controller do user, onde a fábrica retorna uma instancia válida desse objeto, realizando todas as injeções de dependências.
- Camada (ROUTES) camada responsável por criar as rotas HTTP da aplicação para comunicação externa.
5. Camada (SHARED) camada de compartilhamento de recursos entre as camandas principais (DOMAIN, APPLICATION, e MAIN), que provê objetos de utilidade, como: validadores, objetos HTTP e erros específicos da aplicação.



