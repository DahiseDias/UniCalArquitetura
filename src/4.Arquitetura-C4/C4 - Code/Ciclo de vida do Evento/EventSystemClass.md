### Descrição Geral
A entidade "Evento" é o principal elemento do sistema, todas outras entidades e funcionalidades estão ligadas direta ou indiretamente a ela. Tendo isso em consideração, o descrevemos nesse diagrama de classe o ciclo de vida dos eventos entre os componentes dentro da aplicação.
### Mobile App
O usuário interage na aplicação mobile, podendo listar, filtrar, visualizar, excluir e atualizar os eventos já existentes assim como adicionar novos eventos.
Ao usuário interagir com alguma dessas funcionalidades, os respectivos métodos providos pelo AppContext são chamados. Métodos esses, que ao serem chamados invocam funções definidas no arquivo EventApi, que fazem requisições à API.
Após a API responder à requisição, a resposta segue o fluxo oposto, os dados do evento passam do EventApi para o AppContext e do appContext para as respectivas telas.
### API

A API recebe a requisição através do Event Controller que chama o metodo correspodente da requisição no EventService, podendo passar como parametro um indice, atributo ou um objeto; Os indices e atributos são utilizados em métodos de filtragem que retornam uma lista baseada nas restrições escolhidas. Já o objeto é utilizado em metodos POST e UPDATE onde se adiciona um novo registro no banco de dados ou altera um deles. 

O EventService utiliza os Objetos de acesso a dados(DAO) para fazer as requisições na base de dados. É a partir dela que o objeto de resposta é obtido e retornado ao Service, que pode executar algum outro processo e depois dovolver esse objeto para o controller que por sua vez envia uma resposta HTTP para a Aplicação mobile.

Ao criar um evento, o EventService associa um usuario e um curso ao evento, formando assim uma relação muitos pra um. Ao criar ou modificar um evento é criado uma nova notificação que é adicionada a lista do usuario, que é notificado na Aplicação.
 
### Objeto de modelo

Atributos da entidade Evento:

- id;(Id do evento, identificador unico gerado automaticamento)
- title;(titulo do evento)
- user;(usuario criador do evento)
- category;(categoria do evento)
- course;(curso do evento)
- local;(local do evento)
- presentor;(Apresentador do evento)
- description;(Descrição do evento)
- link;(link externo para mais informações ou formularios de inscrição)
- startDate;(Data de inicio do evento)
- startHour;(horario de inicio do evento)
- endDate;(Data de termino do evento)
- endHour;(horario de termino do evento)