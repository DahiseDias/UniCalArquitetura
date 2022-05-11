
### Descrição Geral
 A API recebe requisições da aplicação mobile através dos controllers. Estes delegam a responsabilidade de processamento da lógica para os serviços, que por sua vez podem interagir com outros serviços e DAOs para realizar diversas operações.
### Camadas

- __Controller__ - Os controladores são responsáveis por receber as requisições da aplicação mobile e respondê-las. Ao receber a solicitação, o controller delega a responsabilidade do processamento para a camada de serviço.

- __Service__ - O serviço contém a lógica das funcionalidades. Eles são usados pelos controladores e podem fazer uso de models, outros serviços ou de DAOs (Data Access Object).

- __DAO__ - Data Access Object, é a camada responsavel pela comunicação com o banco de dados, um DAO é criado para cada entidade armazenada no BD.

### Orientações para extensão

Ao criar uma nova entidade, se faz necessario seguir os seguintes passos para manter o padrão de projeto:

- Criar o modelo da entidade, onde é definido seus atributos e caracteristicas;

- Criar o DAO da entidade, conexão com o banco de dados, interface que provê os metodos basicos de CRUD;

- Criar o Serviço, camada que processa a lógica relacionada à entidade;

- Criar o Controller, camada que vai receber requisições reelacionadas à entidade;
