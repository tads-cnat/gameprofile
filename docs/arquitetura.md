<div align="center">

# Gameprofile
## Documento de Arquitetura do sistema

### Histórico de Revisão
| Data | Versão |Descrição| Autor
|--|--|--|--|
| 22/01/2023 | v1.0 |  Adição dos primeiros detalhes da arquitetura do sistema|  [Ruan Franklin](https://github.com/Ruan-Franklin)|

</div>

<div align="center">

# Informações sobre o sistema






## 1. Introdução
</div>

* Fundada em Natal (RN), a rede social Gameprofile tem como objetivo permitir a interação entre jogadores de games em geral. 


* O Gameprofile é uma rede social que busca conectar jogadores com outros jogadores, de forma simples, pretendendo proporcionar aos jogadores uma forma fácil de encontrar colegas para formar grupos e jogarem juntos.
<div align="center">

## 2. Termos e abreviações

| Palavra | Significado|
|---------|------------|
| Jogador | Usuário do sistema GameProfile|
| Lol | Gíria usada para abreviar o nome do jogo League of Legends, o qual nossa plataforma propõe conectar "Players" |
| Nome de invocador | Seu nome(nick) dentro do Lol |
| Campeões | Personagens jogáveis na partida |
| Nexus | Torre fixada na área inicial de cada time e que representa o objetivo central de alguns modos de jogo |
| 5v5 ou 5x5 | Modo de jogo onde 2 grupos de 5 campeões se enfrentam |
| Summoner’s Rift | Modo de jogo mais popular, onde temos um confronto 5v5 com o objetivo de destruir o Nexus inimigo |
| ARAM | Modo de jogo mais rápido com mesmo objetivo Summoner’s Rift |
| TFT | Abreviação usada para outro modo de jogo mais estratégico (teamfight tactics), onde apenas duas pessoas se enfrentam em cada partida |
| Topo | Rota superior do modo Summoner’s Rift |
| Meio | Rota do meio do modo Summoner’s Rift |
| Bot | Rota inferior do modo Summoner’s Rift |
| Atirador | Posição com foco em aumentar a força do seu campeão na partida |
| Suporte | Posição onde o jogador tenta manter o ADC vivo |
| Selva | Rota do modo Summoner’s Rift onde encontramos "bichos" que não pertencem aos times, mas que permitem através de batalhas a melhora do personagem na partida |
</div>

<div align="center">

## 3. Descrição de requisitos
### 3.1 - Requisitos Funcionais
| Código |Nome|Descrição|
| -- | -- | -- |
| FP01 | Efetuar cadastro | O Jogador deve ser capaz de conseguir se cadastrar no sistema. |
| FP02 | Efetuar login na plataforma |O jogador irá realizar a autenticação na plataforma após o cadastro.|
| FP03 | Criar Perfil| O jogador deve ser capaz de criar seu perfil após realizar cadastro na plataforma.|
| FP04 | Editar Perfil| O jogador deve ser capaz de alterar suas informações pessoais a qualquer momento desde que esteja autenticado na plataforma.|
| FP05 | Visualizar Perfil| O jogador deve ser capaz de visualizar seu perfil a qualquer momomento na rede social|
| FP06 | Criar grupo de jogadores |Será possível criar grupo com jogadores para encontrar alguém que você queira jogar.|
| FP07 | Realizar amizade com outros jogadores. |Será adicionado um campo que permite realizar amizade com outros usuários/jogadores. |
| FP08 | Excluir perfil| O jogador deve ser capaz de excluir o seu perfil (O perfil ficará inativo, mas persistirá no banco de dados por 4 anos).|

### 3.2 - Atributos de qualidade

| ID |Atributo de qualidade|Motivação|
| -- | -- | -- |
| 1| O nick do jogador não pode ser alterado | Segurança |
| 2 | Não é possível um mesmo usuário se conectar em duas contas diferentes ao mesmo tempo| Segurança
| 3 | O jogador deve conseguir alterar o tema claro para um tema escuro| Usabilidade|
| 4 | Um jogador só consegue ver informações confidenciais do seu próprio perfil| Segurança e praticidade|

## 4. Descrição de requisitos

### 4.1 - Restrições técnicas


| RT | Tipo de restrição | Restrição | Contexto e/ou motivação |
| -- | -- | -- | -- |
|RT1 |Restrição de interface e uso do software|Acessibilidade |  Não foi realizada implementação de ferramentas para auxiliar usuários com deficiência visual
|RT2 |Sistema operacional compatível com o Java 17 |Sistema operacional |  Para rodar o projeto, é necessário que o sistema operacional seja compatível com a versão do Java 17
|RT3 | Espaço em disco de pelo menos 124 MB | Hardware | É necessário ter pelo menos 124 MB de espaço no disco para rodar o Java e suas ferramentas 


</div>




