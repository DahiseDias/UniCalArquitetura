# 2.1.Requisitos_Gerais

`\2.Requisitos\2.1.Requisitos_Gerais`

* [Documentação](../../README.md)
  * [2.Requisitos](../../2.Requisitos/README.md)
    * [**2.1.Requisitos_Gerais**](../../2.Requisitos/2.1.Requisitos_Gerais/README.md)
    * [2.2.Requisitos_Arquiteturais](../../2.Requisitos/2.2.Requisitos_Arquiteturais/README.md)
  * [3.Manutenção do sistema](../../3.Manuten%C3%A7%C3%A3o%20do%20sistema/README.md)
  * [4.Arquitetura-C4](../../4.Arquitetura-C4/README.md)
    * [C1 - Context](../../4.Arquitetura-C4/C1%20-%20Context/README.md)
    * [C2 - Container](../../4.Arquitetura-C4/C2%20-%20Container/README.md)
    * [C3 - Components](../../4.Arquitetura-C4/C3%20-%20Components/README.md)
      * [Aplicação Mobile](../../4.Arquitetura-C4/C3%20-%20Components/Aplica%C3%A7%C3%A3o%20Mobile/README.md)
      * [Componente API](../../4.Arquitetura-C4/C3%20-%20Components/Componente%20API/README.md)
    * [C4 - Code](../../4.Arquitetura-C4/C4%20-%20Code/README.md)
      * [Ciclo de vida do Evento](../../4.Arquitetura-C4/C4%20-%20Code/Ciclo%20de%20vida%20do%20Evento/README.md)

---

[2.Requisitos (up)](../../2.Requisitos/README.md)

---

### **2.1.1 Requisitos Funcionais**

**O usuario pode:**

<table>
<tr>
<th>RF</th>
<th>Requisitos</th>
<th>Descrição</th>
<th>Prioridade</th>
</tr>

<tr>
<td>RF-001</td>
<td>Ter acesso ao calendario academico da universidade:</td>
<td>O usuário pode navegar para a tela de calendário onde constará as datas do calendário acadêmico. As datas do calendário também estarão disponíveis no calendário semanal</td>
<td>Essencial</td>
</tr>

<tr>
<td>RF-002</td>
<td>Ter acesso aos eventos relacionados a universidade:</td>
<td> O usuário pode navegar para a tela de calendário onde constará os Eventos da Universidade. Esses eventos também estarão disponíveis no calendário seman</td>
<td>Essencial</td>
</tr>
<tr>
<td>RF-003</td>
<td>Ter acesso aos eventos relacionados com o curso escolhido no momento do cadastro:</td>
<td> O usuário pode navegar para a tela de calendário onde constará os Eventos do seu curso. os Eventos dos cursos também estarão disponíveis no calendário semanal</td>
<td>Essencial</td>
</tr>
<tr>
<td>RF-004</td>
<td>Se cadastrar no sistema:</td>
<td>O usuário, na tela de navegação, clica no botão de cadastro, e lá pode preencher os campos e se cadastrar no sistema</td>
<td>Essencial</td>
</tr>
<tr>
<td>RF-005</td>
<td>Receber notificações relacionados aos curso que estuda:</td>
<td>Sempre que um novo evento for anunciado, e o usuário estiver relacionado à categoria desse evento, uma notificação aparecerá em sua tela</td>
<td>Importante</td>
</tr>
<tr>
<td>RF-006</td>
<td>Receber notificações de enquetes:</td>
<td>O usuário pode receber notificações de enquetes para ele responder contendo um link do google forms</td>
<td>Importante</td>
</tr>
<tr>
<td>RF-007</td>
<td>Ter acesso a eventos de outros cursos:</td>
<td>O usuário pode pesquisar por eventos que não pertecem ao seu curso clicando no respectivo botão na área de navegação e selecionando o curso</td>
<td>Essencial</td>
</tr>
<tr>
<td>RF-008</td>
<td>Logar no sistema:</td>
<td> O usuário pode logar no sistema acessando o respectivo botão na tela de navegação, preenchendo seus dados de autenticação e confirmando</td>
<td>Essencial</td>
</tr>
<tr>
<td>RF-009</td>
<td>Alterar dados do perfil:</td>
<td>O usuário pode alterar dados do seu perfil, acessando o respectivo botão na tela de navegação e fazendo as alterações que deseja.</td>
<td>Essencial</td>
</tr>
<tr>
<td>RF-010</td>
<td>Acessar eventos gerais sem estar cadastrado:</td>
<td>O usuário tem acesso à eventos públicos, que não está delimitado para um curso específico, sem precisar estar logado.</td>
<td>Essencial</td>
</tr>
<tr>
<td>RF-011</td>
<td>Ter acesso a eventos das disciplinas que cursa:</td>
<td>O usuário pode navegar para a tela de calendario onde constará os eventos da disciplina. Os eventos da disciplina também poderão ser visualizados no calendário mensal.</td>
<td>Essencial</td>
</tr>
<tr>
<td>RF-012</td>
<td>Gerenciar eventos:</td>
<td> O usuário pode criar, editar e excluir eventos que ele tenha permissão.</td>
<td>Essencial</td>
</tr>
</table>


### **2.1.2 Requisitos Não-Funcionais**

**O sistema deve:**
<table>
  <tr>
    <th>RN</th>
    <th>Requisitos</th>
    <th>Descrição</th>
    <th>Prioridade</th>
  </tr>
  <tr>
    <td>RN-001</td>
    <td>Manter os dados sensíveis seguros</td>
    <td>O sistema deve manter seguros os dados sensiveis do usuario, através de criptografia e da ausencia de trafego desses dados.</td>
    <td>Essencial</td>
  </tr>
   <tr>
    <td>RN-002</td>
    <td>Ser resistente a falhas</td>
    <td>Se houverem falhas, o sistema deve se recuperar sem prejuízo aos usuários. Falhas não devem provocar a inoperância do sistema.</td>
    <td>Essencial</td>
  </tr>
  <tr>
    <td>RN-003</td>
    <td>Estar disponível 24 horas por dia</td>
    <td>O sistema deve poder ser acessado e estar disponível em qualquer hora do dia.</td>
    <td>Essencial</td>
  </tr>
  <tr>
    <td>RN-004</td>
    <td>Atualizar dados de eventos em até 30 segundos depois de publicado/modificado</td>
    <td>Os eventos modificados ou publicados devem estar disponíveis em até 30 segundos para que todos usuários se mantenham atualizados sem divergencia de informação</td>
    <td>Essencial</td>
  </tr>
  <tr>
    <td>RN-005</td>
    <td>Garantir a integridade dos dados</td>
    <td>Ao ocorrer uma modificação, publicação ou qualquer outra ação que seja compartilhada entre usuários, o sistema deve garantir que os dados sejam atualizados para todos os usuarios.</td>
    <td>Essencial</td>
  </tr>
  <tr>
    <td>RN-006</td>
    <td>Restringir usuários, não autorizados, de fazer alterações no sistema</td>
    <td>Usuários só podem modificar seus próprios dados ou eventos criados pelo mesmo.</td>
    <td>Essencial</td>
  </tr>
  <tr>
    <td>RN-007</td>
    <td>Autenticação pelo google</td>
    <td>Deve permitir cadastros por meio da API do Google</td>
    <td>Essencial</td>
  </tr>
  <tr>
    <td>RN-008</td>
    <td>Ser uma aplicação Mobile</td>
    <td>A aplicação deve ter suporte para Android</td>
    <td>Essencial</td>
  </tr>
</table>