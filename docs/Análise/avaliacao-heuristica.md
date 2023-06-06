# Avaliação Heurística - Gameprofile

<div align="center">

### Histórico de Versões
| Data | Versão |Descrição| Autor
|--|--|--|--|
| 29/05/2023 | v2.0 | Enumerando erros através da coluna código | [Patrick Santos](https://github.com/patrickmf)|
| 19/05/2023 | v1.0 | Criação de documento realizado para analise de usabilidade | [Patrick Santos](https://github.com/patrickmf)|
</div>

<div align="center">

### Diretrizes de usabilidade, a partir da lista desenvolvida por Matos e Freire (2019)

| Código | Problema | Onde | Princípio violado | Solução |
| --- | --- | --- | --- | --- | 
| 01 | Ícone que representa a escolha da posição para jogar é uma porta | Barra de navegação lateral exibida após o login | Consistência Externa | a) A metáfora do Alvo ou Lista no ícone|
| 02 | Ícones de tipo diferente (com preenchimento e sem preenchimento) na aba de navegação lateral | Barra de navegação lateral exibida após o login | Consistência Interna  | a) Escolher um tipo para representação de todos os ícones na plataforma. </br></br> b) Usar tipos diferentes para representar alguma interação, como hover ou seleção, por exemplo |
| 03 | Formulário de criação do grupo tem tamanho e cor de fonte diferentes nos campos de input e título | Página de criação do grupo/partida | Tipografia Adequada | a) Definir através de um guia de estilo(ou Design System)a paleta de cores, bem como o tamanhos e tipo das fontes usadas  </br></br> b) Criar componentes(referência ao framework react, utilizado no projeto) que facilitem o processo replicado/padronizado |
| 04 | Informações mal distribuídas | Página do perfil do jogador e formulário de criação do grupo | Densidade informacional | a) Distribuir informações de partida e grupo em containers diferentes e em linhas diferentes que ocupem |
| 05 | Campos relacionados ao agendamento da partida são posicionados em linhas diferentes | Formulário de criação do grupo | Proximidade | a) Posicionar dados do mesmo subconjunto(campos opcionais e/ou data e hora) mais próximos |
| 06 | Cards de posição e botões de confirmar e cancelar não seguem nenhum alinhamento dos componentes da página | Formulário de criação do grupo | Alinhamento | a) Redimensionar container dos cards para ocupar do fim da barra lateral até a margem oposta </br></br> b) Redistribuir os cards nesse novo espaço do container c) alinhar botões(confimar/cancelar) a margem oposta a barra lateral |
| 07 | Opção sugerida, opção selecionada e hover tem mesmo estilo causando a falsa impressão visual de 3 opções selecionadas | Barra de navegação lateral na página do formulário de criação do grupo | Contraste | a) Definir através de um guia de estilo(ou Design System)a paleta de cores analogas para diferencias interações hover e seleção |
| 08 | Ação de confirmar e cancelar não possui contraste entre ações | Formulário de criação do grupo | Paletas de cor | a) Definir através de um guia de estilo(ou Design System)a paleta de cores de contraste e aplica-las nos botões |
| 09 | Termos abreviados estão sem tradução ou legenda (termos pick e aka, por exemplo)| Página do perfil do jogador e formulário de criação do grupo | Linguagem Adequeda | a) Apresentar tradução ou legenda junto aos nomes |
| 10 | Não há nenhuma indicação de como navegar pela página ou sobre a relevância das informações apresentadas| Tela inicial | Affordance | a) Criar uma página inicial com parte das funções|
| 11 | Não existe nenhum ícone que indique o retorno | Cadastro e login | Metáfora | a) Atendendo a consistência interna trocar nome por ícone de seta para indicar retorno|
| 12 | Não Há referências aos signos que representam o universo gamer(neon, aventura, mistério, comunidade)| Página do perfil do jogador e Formulario para criação do grupo| Valorização do contexto cultural | a) Substituir cards para seleção de posição por mapa com botões mapeando as posições do jogo </br></br> b) criar ícones para diferenciar o conceito de grupos e partidas |
| 13 | Não existe indicação visual para ajuste dos dados do grupo ou partida | Página do perfil do jogador | Edição de ações | a) Permitir a edição de partidas não iniciadas, como a redefinição do horário |
| 14 | Não há sugestão para nome de Usuário | Tela de cadastro do usuário | Escrita inteligente | a) Conectar a conta Riot </br></br> b) Sugerir nome aleatório </br></br> c) Exibir fora do campo regras para criação do nome </br></br> d) Exibir dentro do campo um exemplo de nome que pode ser usado |
| 15 | Não existe indicação para o padrão definido que temos definido como minimamente seguro a ser usado no campo senha| Tela do Cadastro do usuário | Prevenção de erros | a) Exibir fora do campo regras para criação do nome </br></br> b) Exibir em vermelho quando regra não for atendida |
| 16 | Campos obrigatórios no formulário de criação do grupo não tem nenhuma indicação descritiva antes do erro | Formulário de criação do grupo | Restrições | a) Adicinar legenda aos campos obrigatórios e/ou segmenta-los dos opcionais |
  </div>
