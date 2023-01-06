<div align="center">

# Glossário
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

### Tecnologias Utilizadas
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Typecript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![Spring_Boot](https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
</div>
<div align="center">
Casos de uso
</div>



### Histórico da revisão
	
| Data  | Versão   | Descrição| Autor
| ------- | -------- | -------| -------|
| 01/07/2022|  v1.0  |Documentando todos os casos de uso da aplicação.|[Tonny Weslley](https://github.com/Tonny-Weslley) - [Ruan Franklin](https://github.com/Ruan-Franklin) 
| 22/10/2022   | v2.0    |  Atualizando  os casos de uso da aplicação.      | [Tonny Weslley](https://github.com/Tonny-Weslley) - [Ruan Franklin](https://github.com/Ruan-Franklin)  
| 26/12/2022   | v3.0    |  Atualizando  os casos de uso da aplicação e adicionando protótipos.      | [Dina Gomes](https://github.com/dinapgomes) - [ Ruan Franklin](https://github.com/Ruan-Franklin)    
	


## Casos de uso planejados
### UCP 01 - Criar Conta
|  |  |
|--|--|
| **Ator Principal** | Jogador. |
| **Descrição** | O jogador deve ser capaz de realizar o cadastro na plataforma.|
| **Pré-condição** | O jogador não pode possuir uma conta ativa no sistema.|
| **Pós-condição** | O jogador deve possuir um cadastro persistente no banco de dados. |
| **Fluxo** | 1 - O jogador clicar em "cadastrar-se", 2 - Informar os dados necessários, 3 - Aceitar os termos de privacidade, 4 - Clicar em cadastro.|
| **Fluxo alternativo**        | 1-  O usuário clica em "cadastra-se" 2- O usuário informa os dados necessários, 3- O usuário não aceita os termos 4- O sistema informa que é necessário aceitar os termos.

### UCP 02 - Fazer Login
|  |  |
|--|--|
| **Ator Principal** | Jogador. |
| **Descrição** | Utilizando de credenciais já cadastradas no sistema, o player deve conseguir realizar sua autenticação. |
| **Pré-condição** | O jogador deve estar cadastrado no banco de dados da aplicação.|
| **Pós-condição** | O jogador estará autenticado e pronto pra utilizar a aplicação.|
| **Fluxo** | 1 - O jogador acessar a tela de Login, 2 - O usuário informar suas Credenciais, 3 - O jogador clica em "Login".|
| **Fluxo alternativo**        | 1-  O jogador informa os dados solicitados " 2- O jogador clica em "Login", 3- O sistema informa que o login não pôde ser realizado porque o jogador não está cadastrado. 



## UCP 03 - Gerenciar Conta
|  |  |
|--|--|
| **Ator Principal** | Jogador. |
| **Descrição** | O jogador deve ser capaz de gerenciar sua conta como por exemplo alterar informações e excluir conta.|
| **Pré-condição** | Estar autenticado no sistema. |
| **Pós-condição** | A conta do jogador sofreu alterações de informações|
| **Fluxo** | 1 - O jogador acessa o menu de configurações, 2 - o jogador seleciona operação, 3 - o jogador clica em salvar informações|
| **Fluxo alternativo**        | 1 - O jogador acessa o menu de configurações, 2 - o jogador seleciona operação, 3- O jogador clica no botão do navegador de voltar, 4- O sistema pergunta se o jogador quer mesmo sair sem salvar. 

### UCP 03.1 - Exibir Informações
|  |  |
|--|--|
| **Ator Principal** | Sistema. |
| **Descrição** | O sistema deve mostrar para o player suas informações cadastradas. | 
| **Pré-condição** | Estar autenticado no sistema, estar na tela de configuração de conta. |
| **Pós-condição** | O player está visualizando suas informações. |
| **Fluxo** | 1 - Acessar tela de configuração de conta. |

### UCP 03.2 - Alterar Informações
|  |  |
|--|--|
| **Ator Principal** | Player. |
| **Descrição** | O player poderá alterar informações que escolher. |
| **Pré-condição** | Estar autenticado no sistema, estar na tela de configuração de conta. |
| **Pós-condição** | Informações alteradas. |
| **Fluxo** | 1 - Acessar tela de configuração de conta, 2 - Selecionar informação para alterar, 3 - Clicar em salvar. |

### UCP 03.3 - Excluir Conta
|  |  |
|--|--|
| **Ator Principal** | Player. |
| **Descrição** | O jogador deve excluir sua conta, deixando-a com status de inativa por 4 anos antes de ser apagada do banco de dados. |
| **Pré-condição** | Estar autenticado no sistema, estar na tela de configuração de conta. |
| **Pós-condição** | O player não terá mais acesso a sua conta nem será mais visualizada publicamente. |
| **Fluxo** | 1 - Acessar tela de configuração de conta, 2 - Selecionar opção de excluir conta, 3 - Se autenticar novamente, 4 - Confirmar. |

## UCP 04 - Gerenciar Fichas de Jogo
|  |  |
|--|--|
| **Ator Principal** | Jogador. |
| **Descrição** | O jogador deve visualizar, adicionar e excluir suas fichas de jogo. |
| **Pré-condição** | O jogador deve estar autenticado no sistema. |
| **Pós-condição** | |
| **Fluxo** | 1 - O jogador acessar a tela de fichas de jogo. |
| **Fluxo alternativo**        | 1 - O sistema não encontra nenhuma ficha de jogo. 


### UCP 04.1 - Exibir Fichas de Jogo
|  |  |
|--|--|
| **Ator Principal** | Sistema. |
| **Descrição** | O sistema deve mostrar para o player suas fichas de jogo cadastradas. | 
| **Pré-condição** | Estar autenticado no sistema, estar na tela de fichas de jogo. |
| **Pós-condição** | O player estar visualizando suas fichas de jogo. |
| **Fluxo** | 1 - Acessar tela de fichas de jogo. |

### UCP 04.2 - Criar Ficha de Jogo
|  |  |
|--|--|
| **Ator Principal** | Jogador. |
| **Descrição** | O player deve criar uma ficha de jogo selecionando o jogo desejado e adicionando informações . | 
| **Pré-condição** | Estar autenticado no sistema, estar na tela de fichas de jogo. |
| **Pós-condição** | O jogador deve possuir uma ficha de jogo ligada a seu perfil. |
| **Fluxo** | 1 - Acessar tela de fichas de jogo, 2 - Clicar em adicionar ficha, 3 - Escolher jogo, 4 - Inserir informações, 5 - Salvar. |

### UCP 04.3 - Excluir Ficha de Jogo
|  |  |
|--|--|
| **Ator Principal** | Jogador. |
| **Descrição** | O jogador deve excluir sua ficha, deixando ela com status de inativa por 3 anos antes de ser apagada do banco de dados. |
| **Pré-condição** | Estar autenticado no sistema, estar na tela de fichas de jogo. |
| **Pós-condição** | O jogador não terá mais acesso a sua ficha de jogo nem será mais visualizada publicamente. |
| **Fluxo** | 1 - Acessar tela de ficha de jogo, 2 - Selecionar opção de excluir ficha, 3 - Se autenticar novamente, 4 - Confirmar. |


### UCP 5 - Adicionar Amigo
|  |  |
|--|--|
| **Ator Principal** | Jogador. |
| **Descrição** | Criação de uma tela onde o jogador pode procurar por outro jogador (por id ou nick) e enviar uma solicitação de amizade. |
| **Pré-condição** | Jogador autenticado no sistema, jogador amigo cadastrado no sistema e com conta ativa. |
| **Pós-condição** | Os dois jogadores estarão conectados no sistema com um relacionamento de amizade. |
| **Fluxo** |  1 - O jogador  acessa a interface de adicionar amigo, 2 - busca por id ou nick, 3 - o jogador clica no botão de enviar solicitação que aparecerá ao lado dos perfis encontrados.|
| **Fluxo alternativo**        | 1 -  O jogador  acessa a interface de adicionar amigo, 2 - busca por id ou nick, 3 - O sistema não encontra o id ou nick digitado.


### UCP 6 - Avaliar Jogador

|  |  |
|--|--|
| **Ator Principal** | Jogador |
| **Descrição** | Um jogador pode avaliar outro jogador, sempre levando em consideração as características de gameplay e de comportamento do outro jogador. |
| **Pré-condição** | Ambos os jogadores precisam estar ativos na plataforma, o jogador avaliador deve estar autenticado.|
| **Pós-condição** | O jogador avaliado terá suas estatísticas ajustadas de acordo com a avaliação de outro player|
| **Fluxo** | 1 - O jogador deve visualizar o perfil de um outro jogador, 2 - O jogador deve clicar em avaliar, 3 - O jogador deve preencher informações, 4 - o jogador deve clicar em enviar análise.|
| **Fluxo alternativo**        | 1 - O jogador  visualiza o perfil de um outro jogador, 2 - O jogador  clica em avaliar, 3 - O jogador  preenche informações, 4 - o jogador deve clica em enviar análise, 5 - O sistema diz que a avaliação não pode ocorrer porque os jogadores nunca jogaram juntos.

### UCP 7 - Criar grupo
|  |  |
|--|--|
| **Ator Principal** | Jogador. |
| **Descrição** | O jogador deve ser capaz de criar um grupo para se comunicar com outros jogadores. |
| **Pré-condição** | Jogador autenticado no sistema. |
| **Pós-condição** | O sistema irá criar um novo grupo e adicionar o jogador criador como administrador. |
| **Fluxo** | 1 - O jogador acessa a interface de criar grupo, "Criar sala", 2 - coloca um nome para o grupo, 3-seleciona a quantidade de pessoas, 4- Coloca as posições.|
| **Fluxo alternativo** | 1 - O jogador acessa a interface de criar grupo, "Criar sala", 2 - coloca um nome para o grupo, 3-seleciona a quantidade de pessoas, 4-Coloca posições,  5-O sistema informa que o limite máximo de caracteres foi atingido no nome do grupo.|

	
# Guias de Instalação
Tutoriais para configurar os ambientes de front-end e back-end.
## Instalação
[Front-end](https://github.com/tads-cnat/gameprofile/blob/dev/docs/guiaFront.md)

[Back-end](https://github.com/tads-cnat/gameprofile/blob/main/docs/guiaBack.md)
