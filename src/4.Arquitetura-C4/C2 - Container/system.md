### **Nível 2: diagrama de contêiner**

Depois de entender como seu sistema se encaixa no ambiente geral de TI, nesta etapa ampliamos o limite do sistema com um diagrama de contêiner. Alguns exemplos de conteiner são: aplicação Web do lado do servidor, aplicativo de página única, aplicativo de desktop, aplicativo móvel, esquema de banco de dados, sistema de arquivos etc. Essencialmente, um contêiner é uma unidade executável/implantável independente que executa código ou armazena dados.

Esse diagrama, mostra em alto nível, a arquitetura do sistema Unical e como as responsabilidades são distribuídas por ele. Ele também mostra as principais tecnologias utlizadas e como os contêineres se comunicam entre si. É um diagrama simples e focado em tecnologia de alto nível que é útil tanto para desenvolvedores de software quanto para equipes de suporte/operações.


**Elementos primários**: Contêineres dentro do sistema Unical.

**Elementos de suporte**: Pessoas e sistemas de software diretamente conectados ao Unical.

**Público alvo**: Técnicos dentro e fora da equipe de desenvolvimento de software; incluindo arquitetos de software, desenvolvedores e equipe de operações/suporte.

**Observações**: este diagrama não diz nada sobre cenários de implantação, clustering, replicação, failover etc.


### Descrição Geral

O sistema Unical é dividido em três containers: A aplicação mobile, a API e o Banco de dados.
- **Aplicação Mobile**
  Fornece um conjunto completo de funcionalidades do Unicall aos usuários com interação direta por meio de seu dispositivo móvel. É parte do sistema com a qual o Usuário interage.
  Foi desenvolvida com o padrão de projeto Facade.
- **API**  
  Contém a lógica do sistema e de comunição com o banco de dados. É servidor que processa as solicitações advindas da aplicação mobile e devolve respostas a serem exibidas ao usuário.
  Foi desenvolvido com o padrão de projeto MVC.
- **Banco de Dados**
  Armazena dados dos Eventos, Notificações e de autenticação do usuário.
  Foi usado o PostgresSQL.

### Linguagens
- **Java** 
  Java é uma linguagem de programação e plataforma computacional lançada pela primeira vez pela Sun Microsystems em 1995
- **TypeScript**
  O TypeScript começou a ser desenvolvido pela Microsoft em 2012, com o objetivo de adicionar recursos e ferramentas que não estão presentes nativamente na linguagem (ou que seriam muito mais complexos de serem implementados), como tipagem estática (ou seja, os tipos das variáveis são definidos explicitamente no código) e orientação a objetos.

### Tecnologias

- **React Native**
O React Native funciona como uma biblioteca e facilitador de recursos de JavaScript que possibilita o desenvolvimento de aplicações mobile, tanto para Android como para iOS.

    - Async-storage(ver ^1.15.14) - Amazenamento local;

    - DateTimePicker(ver ^5.0.1) - calendario e relogio para seleção de data e horario;

    - Bottom-tabs(ver ^6.0.5) - modelo de navegação; 

- **SprintBoot**
  O Spring Boot é um framework que torna fácil a criação de aplicações Spring autossuficientes e robustas, possibilitando a execução imediata. Contudo isso só é possível por conta da abordagem opinativa sobre a plataforma Spring e bibliotecas de terceiros, que permite ao desenvolvedor gastar o mínimo de tempo possível configurando o projeto, e sim codificando suas regras de negócio.

    Dentre as principais funcionalidades do Spring Boot podemos citar:

    1. A criação de aplicações Spring autossuficientes;
    2. Servidores web como o Tomcat, Jetty e Undertow embutidos;
    3. Prover starter’s opinativos para gerenciamento de dependências e build;
    4. Configuração automática de bibliotecas Spring e de terceiros sempre que possível;
    5. Funcionalidades para ambiente de produção como métricas, health checks e configurações externalizadas.
    6. Dispensar a necessidade de configuração XML e geração de código.

- **PostgresSQL** - É um sistema gerenciador de banco de dados objeto relacional, desenvolvido como projeto de código aberto.

### Padrões de Projeto

**Facade**

É um padrão de projeto estrutural, onde parte do sistema é isolado com o uso de uma fachada e apenas através dela é possivel ter acesso ao sub-sistema.



Objetivos do Facade:

- **Abstrair/simplificar** a complexidade de um sub-sistema: Não é necessario entender toda a estrutura do sistema, apenas utilzar os recursos disponiveis.

- **Desacoplar o sistema**, favorecendo a separação de responsabilidades. O Princípio da Responsabilidade Única deve ser mantida. Por exemplo, se cada módulo do sistema possui uma fachada para acesso ao seu mundo interno, cada módulo pode ser mantido/distribuído/testado sem a necessidade de carregar-se consigo um mundo de dependências.



**MVC com serviços**
    
O Padrão MVC significa Model-View-Controller. Esse padrão é usado para separar as responsabilidades do aplicativo.

- __Model__ - Modelo representa um objeto ou JAVA POJO carregando dados. Ele também pode ter lógica para atualizar o controlador se seus dados forem alterados.

- __View__ - View representa a visualização dos dados que o modelo contém.

- __Controller__ - O controlador atua tanto no modelo quanto na visualização. Ele controla o fluxo de dados no objeto de modelo e atualiza a exibição sempre que os dados são alterados. Mantém a visualização e o modelo separados.

- __Service__ - O serviço contém a lógica das funcionalidades. Eles são usados pelos controladores e podem fazer uso de models, outros serviços ou de DAOs (Data Access Object).
