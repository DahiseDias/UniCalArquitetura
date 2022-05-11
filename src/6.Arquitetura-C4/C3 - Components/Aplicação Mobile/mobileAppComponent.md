### **Nível 2: diagrama de componentes**

Nesse diagrama, ampliamos e decompomos cada contêiner ainda mais para identificar os principais blocos de construção estruturais e suas interações.

O diagrama de Componentes mostra como um contêiner é composto por vários "componentes", o que são cada um desses componentes, suas responsabilidades e os detalhes de tecnologia/implementação.

**Elementos primários**: componentes dentro do contêiner no escopo.

**Elementos de suporte**: Containers (dentro do sistema de software em escopo) mais pessoas e sistemas de software diretamente conectados aos componentes.

**Público-alvo**: arquitetos e desenvolvedores de software.

### Descrição Geral

A aplicação mobile é responsavel pela interação com o usuario através da interface. Nela é possivel utilizar os serviços desenvolvidos na API de forma visual e intuitiva em qualquer lugar.

A seguir enumeramos os principais componentes da aplicação:
- **Telas**
  Componentes que organizam o código que renderizará a tela com suas funcionalidades para o usuário
- **Componentes**
  Códigos reusáveis utilizados para compor telas
- **Contexto**
  Componente central da aplicação, compartilha o estado da aplicação e funções com todas as telas
- **Serviço**
  Componentes utilizados para se comunicar com o servidor (API)

### Orientações para extensão

**Organização do projeto**
- Métodos compartilhados devem ser adicionados no AppContext
- A aplicação foi desenvolvida com um contexto único, criar um novo contexto pode causar efeitos colaterais.
- Métodos que se comunicam com a API devem ser criados no pacote de serviços e referenciados no contexto.
- Novas telas são devem ser adicionadas ao pacote "screens".
- Componentes reutilizáveis devem ser adicionados ao pacote "components"

**Criação de telas e navegação**
- Ao criar uma nova tela ela deve ser adicionada à navegação, criando um componente "Stack.Screen".
- Adicionar a referência da nova tela ao respectivo tipo de navegação no arquivo types.
  
**Criação de novos botões da tela de navegação**
- Para criar novos botões para tela de navegação, adicionar o botão à lista corresponde ao tipo de usuário desejado, no arquivo "NavigationButtons" no pacote "constants"
- Seguir padrão predefinido dos botões anteriores.
