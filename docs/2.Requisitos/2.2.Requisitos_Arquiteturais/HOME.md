# 2.2.Requisitos_Arquiteturais


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
        <td>Importante</td>
    </tr>
    <tr>
        <td>RA-002</td>
        <td>RF-005, RF-006, RN-001</td>
        <td>Receber notificações</td>
        <td>React Native RefreshControl</td>
        <td>Usabilidade</td>
        <td>Uso do RefreshControl para permitir que o usuário sincronize os dados da aplicação com o servidor</td>
        <td>Essencial</td>
    </tr>
    <tr>
        <td>RA-003</td>
        <td>RN-002</td>
        <td>Ser resistente a falhas</td>
        <td>Try-Catch</td>
        <td>Confiabilidade</td>
        <td>Uso de Try-Catch's em operações passíveis de erros tanto no back-end como no front-end</td>
        <td>Essencial</td>
    </tr>
    <tr>
        <td>RA-004</td>
        <td>RN-003</td>
        <td>Estar disponível 24 horas por dia</td>
        <td>Heroku</td>
        <td>Disponibilidade</td>
        <td>Deploy na plataforma Heroku</td>
        <td>Desejável</td>
    </tr>
    <tr>
        <td>RA-005</td>
        <td>RN-005</td>
        <td>Garantir a integridade dos dados</td>
        <td>Operações atômicas</td>
        <td>Confiabilidade</td>
        <td>Se algum erro ocorrer duurante atualização ou criação de novos registros, a operação é desfeita</td>
        <td>Essencial</td>
    </tr>
    <tr>
        <td>RA-006</td>
        <td>RN-006</td>
        <td>Restringir usuários não autorizados</td>
        <td>Operações atômicas</td>
        <td>Gerenciabilidade</td>
        <td>Antes de qualquer operação de inserção ou modificação, o sistema verifica se o usuário é o autor da entidade</td>
        <td>Essencial</td>
    </tr>
    <tr>
        <td>RA-007</td>
        <td></td>
        <td>Arquitetura MVC</td>
        <td>Spring MVC</td>
        <td>Manutenibilidade</td>
        <td>O back-end foi desenvolvido com separação entre controllers, models, services e views</td>
        <td>Importante</td>
    </tr>
    <tr>
        <td>RA-008</td>
        <td></td>
        <td>Arquitetura Server-Client</td>
        <td>Spring + ReactNative</td>
        <td>Manutenibilidade</td>
        <td>O back-end foi desenvolvido separado do front. Sendo o back desenvolvido em Java com o Spring, e o front em JavaScript com ReactNative</td>
        <td>Importante</td>
    </tr>
</table>