
<h3 align="center">
  <a href="[https://github.com/tads-cnat/game-profile](https://github.com/tads-cnat/game-profile)">
    <img alt="Game profile logo" src="../../logo.png" width="400">
  </a>
</h3>

# Documento de Visão
### Histórico de Revisão
| Data | Versão |Descrição| Autor
|--|--|--|--|
| 23/10/2022 | v1.0 |  Documento inicial do processo de analise e projeto da aplicação | [Tonny Weslley](https://github.com/Tonny-Weslley) - [Rafael Pessoa](https://github.com/PessoaRafael)|
| 09/01/2023 | v2.0 |  Documento  com detalhamento aprimorado de tópico 7 | [Franklin Barbosa](https://github.com/Franklin-Barbosa) - [Ruan Franklin](https://github.com/Ruan-Franklin)|


# GameProfile
## 1 - Objetivo do Projeto
O objetivo da equipe é desenvolver uma plataforma web/rede social que conecte jogadores de *e-sports* (Esportes Eletrônicos) de forma simples e inteligente, visando uma melhor experiência *in-game* (Dentro do Jogo) dos usuários da plataforma. 


## 2 - Descrição do problema
Um fator crucial para um bom desempenho e uma boa experiência em jogos competitivos é o time, e confiar no sistema de matchmaking (sistema prórpio de cada jogo em que uma das funções é busca outros jogadores da plataforma os unindo em um time) nem sempre é a melhor solução para completar o seu time, essa tipo de estratégia expõe o jogador a situações longe do ideal, como por exemplo, unir jogadores que exercem a mesma função em um mesmo time, e até mesmo selecionar jogadores tóxicos para o seu time, o que atrapalha a experiência do jogo e principalmente o desempenho na partida.
|  |  |
|--|--|
| O Problema | O matchmaking implementado pelos Jogos competitivos eletrônicos não é eficiente o suficiente para fornecer aos seus jogadores as informações necessárias para que os seus usuários possam estabelecer estratégias de jogo e falham na filtargem de jogadores tóxicos. |
| Quem afeta | Os Jogadores de esportes eletrônicos. |
| O Impacto é | O desempenho e experiência do usuário na partida é comprometida, fazendo com que o jogador não posso extrair 100% do seu potêncial. |
| A solução seria | A criação de uma rede social com foco no perfilamento e na transparência de seus usuários que buscam outros usuários para completar seus respectivos times.|

## 3 - Descrição dos Usuários
| Nome | Descrição | Responsabilidade|
|--|--|--|
| Player | O player é o usuário que interage com o sistema abastecendo ele com informações suas, interagindo com outros players (Avaliar e Inspecionar) e criando grupos. | Cadastrar informações na plataforma - Interagir com outros jogadores - Criar e Entrar em grupos. |

## 4 - Descrição do Ambiente dos Usuários
### Player

- Para execução das tarefas no sistema basta o envolvimento de 1 usuário para o cadastro das informações.

- Cerca de 3 a 5 minutos o tempo gasto para execução das tarefas.

- Haverá uma restrição de termos de uso para acesso à aplicação.

- Haverá uma tela para login do player.

- Haverá uma tela de sistema para cadastro do player.

- Haverá um dashboard no sistema para utilização do player.

- Haverá uma tela para o player selecionar o avatar/ícone que vai utilizar em seu ambiente.

- Haverá uma tela onde o player pode criar um perfil em um jogo que joga.

- Haverá uma tela para que o player possa buscar por outros players com o objetivo de interagir com ele(s).

- Haverá uma tela para que o usuário encontre players para adicionar a sua rede de amigos.

- Haverá uma tela publica (visível para usuários não autenticados) que o player pode compartilhar onde haverá um resumo de suas informações.

## 5 - Principais necessidades dos usuários

### Player
- Sistema de criação de grupo.
- Lobby com salas onde possa ingressar para jogar com outros jogadores.
- Perfil próprio com informações úteis que facilitam o processo de ser mais visível.
- Visualição do perfil de terceiros.

## 6 - Alternativas concorrentes
* Facebook
* Alvanista

## 7 - Visão geral do Produto
O GameProfile é uma plataforma web/rede social que busca conectar jogadores de e-sports (Esportes Eletrônicos) para que possam interagir entre eles de forma simples e inteligente, trazendo uma melhor dinâmica e jogabilidade para suas partidas.

### 7.1 - O GameProfile é...
Uma plataforma web/rede social que conecte jogadores de e-sports de forma simples e inteligente.

### 7.2 - O GameProfile não é...
Uma plataforma de jogos, pois na plataforma os jogadores/players interagem com o sistema abastecendo-o com informações suas, interagindo com outros players e criando grupos.

### 7.3 - O GameProfile faz...
Deixa a cargo do próprio jogador/player busca e montar seu time para a partida, baseado em informações de cada usuário e avaliações de partidas anteriores.

### 7.4 - O GameProfile não faz...
Matchmaking (sistema próprio de cada jogo em que uma das funções é busca outros jogadores da plataforma os unindo em um time) pois essa estratégia pode gerar maiores problemas, como unir jogadores que exercem a mesma função em um mesmo time e/ou selecionar jogadores considerados tóxicos

## 8 - Requisitos
### 8.1 - Requisitos Funcionais
#### Player

| Código |Nome|Descrição|
| -- | -- | -- |
| FP01 | Efetuar cadastro | O Player deve ser capaz de conseguir se cadastrar no sistema. |
| FP02 | Efetuar login na plataforma |O player irá realizar a autenticação na plataforma após o cadastro.|
| FP03 | Criar Perfil| O player deve ser capaz de criar seu perfil após realizar cadastro na plataforma.|
| FP04 | Editar Perfil| O player deve ser capaz de alterar suas informações pessoais a qualquer momento desde que esteja autenticado na plataforma.|
| FP05 | Visualizar Perfil| O player deve ser capaz de visualizar seu perfil a qualquer momomento na rede social|
| FP06 | Criar grupo de jogadores |Será possível criar grupo com jogadores para encontrar alguém que você queira jogar.|
| FP07 | Realizar amizade com outros players. |Será adicionado um campo que permite realizar amizade com outros usuários/jogadores. |
| FP08 | Excluir perfil| O player deve ser capaz de excluir o seu perfil (O perfil ficará inativo, mas persistirá no banco de dados por 4 anos).|

### 8.2 Requisitos NÃO-FUNCIONAIS

Código |Nome|Descrição|Categoria|Classificação
| -- | -- | -- | -- | -- |
| NF01 | Design minimalista e intuitivo | As escolhas de design tem que seguir essas diretrizes.|**Usabilidade**|**Obrigatório**|
| NF02 | Uso de servidor com certificado SSL | O servidor de hospedagem do site deve ter certificado SSL por questões de segurança. |**Segurança**|**Desejável**|
| NF03 | Interface acessivel | A aplicação deve utilizar das tecnologias de acessibilidade presentes no html e implementar outras soluções se necessário|**Usabilidade**|**Desejável**|
