# 2.2.Requisitos_Arquiteturais

`\2.Requisitos\2.2.Requisitos_Arquiteturais`

* [Documentação](../../README.md)
  * [2.Requisitos](../../2.Requisitos/README.md)
    * [2.1.Requisitos_Gerais](../../2.Requisitos/2.1.Requisitos_Gerais/README.md)
    * [**2.2.Requisitos_Arquiteturais**](../../2.Requisitos/2.2.Requisitos_Arquiteturais/README.md)
  * [3.Manutenção do sistema](../../3.Manuten%C3%A7%C3%A3o%20do%20sistema/README.md)
  * [6.Arquitetura-C4](../../6.Arquitetura-C4/README.md)
    * [C1 - Context](../../6.Arquitetura-C4/C1%20-%20Context/README.md)
    * [C2 - Container](../../6.Arquitetura-C4/C2%20-%20Container/README.md)
    * [C3 - Components](../../6.Arquitetura-C4/C3%20-%20Components/README.md)
      * [Aplicação Mobile](../../6.Arquitetura-C4/C3%20-%20Components/Aplica%C3%A7%C3%A3o%20Mobile/README.md)
      * [Componente API](../../6.Arquitetura-C4/C3%20-%20Components/Componente%20API/README.md)
    * [C4 - Code](../../6.Arquitetura-C4/C4%20-%20Code/README.md)
      * [Ciclo de vida do Evento](../../6.Arquitetura-C4/C4%20-%20Code/Ciclo%20de%20vida%20do%20Evento/README.md)
        * [Em API](../../6.Arquitetura-C4/C4%20-%20Code/Ciclo%20de%20vida%20do%20Evento/Em%20API/README.md)

---

[2.Requisitos (up)](../../2.Requisitos/README.md)

---


<table>
    <tr>
        <th>RA</th>
        <th>REF</th>
        <th>Requisito</th>
        <th>Decisão arquitetural</th>
        <th>Atributo de qualidade</th>
        <th>Contemplação das RA</th>
        <th>Prioridade</th>
    </tr>
    <tr>
        <td>RA-001</td>
        <td>RF-004, RN-007</td>
        <td>Autenticação pelo Google</td>
        <td>Usar GoogleAPI Auth2</td>
        <td>Usabilidade</td>
        <td>Front-end se comunica com a API do Google e manda as informações para o back-end</td>
        <td>Importante - É um requisito requerido pelo cliente(professor) para facilitar a autenticação e diminuir o esforço em funcionalidades não essenciais</td>
    </tr>
    <tr>
        <td>RA-002</td>
        <td>RF-005, RF-006, RN-001</td>
        <td>Receber notificações</td>
        <td>React Native RefreshControl</td>
        <td>Usabilidade</td>
        <td>Uso do RefreshControl para permitir que o usuário sincronize os dados da aplicação com o servidor</td>
        <td>Essencial - A atualização é necessária para que os usuários possam manter as informações exibidas em sincronia com as mudanças e novos eventos</td>
    </tr>
    <tr>
        <td>RA-003</td>
        <td>RN-002</td>
        <td>Ser resistente a falhas</td>
        <td>Try-Catch</td>
        <td>Confiabilidade</td>
        <td>Uso de Try-Catch's em operações passíveis de erros tanto no back-end como no front-end</td>
        <td>Essencial - O uso de try-catch impedirá que uma excessão ocasione a interrupção e fechamento da aplicação</td>
    </tr>
    <tr>
        <td>RA-004</td>
        <td>RN-003</td>
        <td>Estar disponível 24 horas por dia</td>
        <td>Heroku</td>
        <td>Disponibilidade</td>
        <td>Deploy na plataforma Heroku</td>
        <td>Desejável - É uma plataforma gratuíta e acessível, capaz de suprir a demanda para esse projeto em específico</td>
    </tr>
    <tr>
        <td>RA-005</td>
        <td>RN-005</td>
        <td>Garantir a integridade dos dados</td>
        <td>Operações atômicas</td>
        <td>Confiabilidade</td>
        <td>Se algum erro ocorrer duurante atualização ou criação de novos registros, a operação é desfeita</td>
        <td>Essencial - Não garantir a integridade dos dados ocasionará em divergência de informações entre os usuários ou a exibição parcial de dados.</td>
    </tr>
    <tr>
        <td>RA-006</td>
        <td>RN-006</td>
        <td>Restringir usuários não autorizados</td>
        <td>Operações atômicas</td>
        <td>Gerenciabilidade</td>
        <td>Antes de qualquer operação de inserção ou modificação, o sistema verifica se o usuário é o autor da entidade</td>
        <td>Essencial - Restringir a modificação de dados que não foram criados pelo autor trará confiança de que os dados exibidos são de fato o que o autor quis que fosse mostrado.</td>
    </tr>
    <tr>
        <td>RA-007</td>
        <td></td>
        <td>Padrão MVC com serviços</td>
        <td>Spring MVC</td>
        <td>Manutenibilidade</td>
        <td>O back-end foi desenvolvido com separação entre controllers, models, services e views</td>
        <td>Importante - O padrão MVC é bastante usado pela comunidade, facilitando a manutenção, proporcionando separação de responsabilidades e reusabilidade</td>
    </tr>
    <tr>
        <td>RA-008</td>
        <td>RN-008</td>
        <td>Arquitetura Server-Client</td>
        <td>Spring + ReactNative</td>
        <td>Manutenibilidade</td>
        <td>O back-end foi desenvolvido separado do front. Sendo o back desenvolvido em Java com o Spring, e o front em JavaScript com ReactNative</td>
        <td>Essencial - Por ser um aplicativo mobile é necessario manter a estrutura dividida e para ter os dados íntegros e unificados em um servidor</td>
    </tr>
</table>


