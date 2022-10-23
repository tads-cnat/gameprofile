
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

# GameProfile
## 1 - Objetivo do Projeto
A GameProfile é uma plataforma/rede social que busca conectar jogadores de Esports (Jogos eletrônicos) para que haja uma interação entre eles. 


## 2 - Descrição do problema
### Jogadores
Encontrar pessoas/jogadores para interagir e jogar aquela partida com você acaba sendo algo difícil nos dias de hoje com os jogos rodeados e disseminados de ''trolls', o que dificulta uma boa experiência para o jogador, que, as vezes, só procura jogar uma partida casual sem estresse.
|  |  |
|--|--|
| O Problema | Estabelece-se em jogadores dos jogos digitais possuem dificuldade para realizar amizades e integrar uma comunicação social entre eles. |
| Quem afeta | Os Jogadores de esportes eletrônicos |
| O Impacto é | O desperdício de uma oportunidade que poderia mudar a experiência do jogador naquele jogo. |
| A solução seria | A criação de uma rede social com foco na interação e comunicação dos jogadores.|

## 3 - Descrição dos Usuários
| Nome | Descrição | Responsabilidade|
|--|--|--|
| Player | O player é o usuário que interage com o sistema abastecendo ele com informações suas e interagindo com outros players via mensagem/chat | Cadastrar informações na plataforma - Interagir com outros jogadores. |

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
- Sistema de interação/comunicação com outros players.
- Perfil próprio com informações úteis que facilitam o processo de ser mais visível.

## 6 - Alternativas concorrentes
* Linkedin
* Facebook
* Alvanista

## 7 - Visão geral do Produto

A gameprofile é uma rede social que busca conectar jogadores para que possam interagir entre eles, trazendo uma melhor dinâmica e jogabilidade para suas partidas.

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
