<div align="center">

# Glossário
| Palavra | Significado|
|---------|------------|
| Player | Usuário do sistema GameProfile|
| Lol | Gíria usada para abreviar o nome do jogo League of Legends, o qual nossa plataforma propõe conectar "Players" |
| Nome de invocador | Seu nome(nick) dentro do Lol |
| Campeões | Personagens jogáveis na partida |
| Nexus | Torre fixada na área inicial de cada time e que representa o objetivo central de alguns modos de jogo |
| 5v5 ou 5x5 | Modo de jogo onde 2 grupos de 5 campeões se enfrentam |
| Summoner’s Rift | Modo de jogo mais popular, onde temos um confronto 5v5 com o objetivo de destruir o Nexus inimigo |
| ARAM | Modo de jogo mais rápido com mesmo objetivo Summoner’s Rift |
| TFT | Abreviação usada para outro modo de jogo mais estratégico (teamfight tactics), onde apenas duas pessoas se enfrentam em cada partida |
| Top | Rota superior do modo Summoner’s Rift |
| Mid | Rota do meio do modo Summoner’s Rift |
| Bot | Rota inferior do modo Summoner’s Rift |
| ADC | Posição com foco em aumentar a força do seu campeão na partida |
| Suporte | Posição onde o jogador tenta manter o ADC vivo |
| Jungle | Rota do modo Summoner’s Rift onde encontramos "bichos" que não pertencem aos times, mas que permitem através de batalhas a melhora do personagem na partida |


</div>
<div align="center">

### Tecnologias Utilizadas
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Typecript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![Spring_Boot](https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

<div align="center">
Casos de uso
</div>



### Histórico da revisão
	
| Data  | Versão   | Descrição| Autor
| ------- | -------- | -------| -------|
| 01/07/2022|  v1.0  |Documentando todos os casos de uso da aplicação.|[Tonny Weslley](https://github.com/Tonny-Weslley) - [Ruan Franklin](https://github.com/Ruan-Franklin) 
| 22/10/2022   | v2.0    |  Atualizando  os casos de uso da aplicação.      | [Tonny Weslley](https://github.com/Tonny-Weslley) - [Ruan Franklin](https://github.com/Ruan-Franklin)   
	


## Casos de uso planejados
### UCP 01 - Criar Conta
|  |  |
|--|--|
| **Ator Principal** | Player. |
| **Descrição** | O player deve ser capaz de realizar o cadastro na plataforma.|
| **Pré-condição** | O player não pode possuir uma conta ativa no sistema.|
| **Pós-condição** | O player deve possuir um cadastro persistente no banco de dados. |
| **Fluxo** | 1 - Clicar em cadastrar-se, 2 - Informar os dados necessários, 3 - Aceitar os termos de privacidade, 4 - Clicar em cadastro.|

### UCP 02 - Fazer Login
|  |  |
|--|--|
| **Ator Principal** | Player. |
| **Descrição** | Utilizando de credenciais já cadastradas no sistema, o player deve conseguir realizar sua autenticação. |
| **Pré-condição** | O player deve estar cadastrado no banco de dados da aplicação.|
| **Pós-condição** | O player estará autenticado e pronto pra utilizar a aplicação.|
| **Fluxo** | 1 - Acessar tela de Login, 2 - Informar suas Credenciais, 3 - clicar em Login.|



### UCP 03 - Gerenciar Conta
|  |  |
|--|--|
| **Ator Principal** | Player. |
| **Descrição** | O player deve ser capaz de gerenciar sua conta como por exemplo alterar informações e excluir conta.|
| **Pré-condição** | Estar autenticado no sistema. |
| **Pós-condição** | A conta do player sofreu alterações de informações|
| **Fluxo** | 1 - Acessar o menu de configurações, 2 - selecionar operação, 3 - salvar informações|

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

### UCP 04 - Gerenciar Fichas de Jogo
|  |  |
|--|--|
| **Ator Principal** | Player. |
| **Descrição** | O player deve visualizar, adicionar e excluir suas fichas de jogo. |
| **Pré-condição** | Estar autenticado no sistema. |
| **Pós-condição** | |
| **Fluxo** | 1 - Acessar tela de fichas de jogo. |

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
| **Ator Principal** | Player. |
| **Descrição** | O player deve criar uma ficha de jogo selecionando o jogo desejado e adicionando informações . | 
| **Pré-condição** | Estar autenticado no sistema, estar na tela de fichas de jogo. |
| **Pós-condição** | O player deve possuir uma ficha de jogo ligada a seu perfil. |
| **Fluxo** | 1 - Acessar tela de fichas de jogo, 2 - Clicar em adicionar ficha, 3 - Escolher jogo, 4 - Inserir informações, 5 - Salvar. |

### UCP 04.3 - Excluir Ficha de Jogo
|  |  |
|--|--|
| **Ator Principal** | Player. |
| **Descrição** | O jogador deve excluir sua ficha, deixando ela com status de inativa por 3 anos antes de ser apagada do banco de dados. |
| **Pré-condição** | Estar autenticado no sistema, estar na tela de fichas de jogo. |
| **Pós-condição** | O player não terá mais acesso a sua ficha de jogo nem será mais visualizada publicamente. |
| **Fluxo** | 1 - Acessar tela de ficha de jogo, 2 - Selecionar opção de excluir ficha, 3 - Se autenticar novamente, 4 - Confirmar. |

### UCP 5 - Adicionar Amigo
|  |  |
|--|--|
| **Ator Principal** | Player. |
| **Descrição** | Criação de uma tela onde o Player pode procurar por outro player (por id ou nick) e enviar uma solicitação de amizade. |
| **Pré-condição** | Player autenticado no sistema, Player amigo cadastrado no sistema e com conta ativa. |
| **Pós-condição** | Os dois players estarão conectados no sistema com um relacionamento de amizade. |
| **Fluxo** |  1 - O player acessa interface de adicionar amigo, 2 - busca por id ou nick, 3 - clica no botão de enviar solicitação que aparecerá ao lado dos perfis encontrados.|


### UCP 6 - Avaliar Player
|  |  |
|--|--|
| **Ator Principal** | Player |
| **Descrição** | Um player pode avaliar outro player, sempre levando em consideração as características de gameplay e de comportamento do outro player. |
| **Pré-condição** | Ambos os Jogadores precisam estar ativos na plataforma, o jogador avaliador deve estar autenticado.|
| **Pós-condição** | O Player avaliado terá suas estatísticas ajustadas de acordo com a avaliação de outro player|
| **Fluxo** | 1 - Visualizar o perfil de um Player, 2 - Clicar em avaliar, 3 - preencher informações, 4 - clicar em enviar analise.|

### UCP 7 - Criar grupo
|  |  |
|--|--|
| **Ator Principal** | Player. |
| **Descrição** | O jogador deve ser capaz de criar um grupo para se comunicar com outros jogadores. |
| **Pré-condição** | Player autenticado no sistema. |
| **Pós-condição** | O sistema irá criar um novo grupo e adicionar o jogador criador como administrador. |
| **Fluxo** | 1 - O player acessa a interface de criar grupo, 2 - coloca um nome para o grupo, 3-seleciona a quantidade de pessoas.|
	
# Instalação nas versões anteriores
para  a execução do projeto sem problemas, se faz recomendado a preparação do ambiente.

1. Programas que utilizamos para o desenvolvimento do projeto:
	- [Python 3.10](https://www.python.org/downloads/)
	- [Git](https://git-scm.com/)
	- [Visual Studio Code](https://code.visualstudio.com/Download)
2. Clonando o projeto:
	- Via HTTP
		 ```bash
		 git clone https://github.com/tads-cnat/game-profile.git
		 ```
	- Via SSH
		```bash
		git clone git@github.com:tads-cnat/game-profile.git
		```
3. Criando e preparando ambiente virtual python
	- Criando um ambiente virtual
		- por questões praticas, vamos criar um ambiente virtual chamado "venv" 
		```bash
		python -m venv venv
		``` 
	- Iniciando ambiente virtual
		```bash
		venv\Scripts\activate
		```
		o retorno esperado é:
		```bash
		(venv) C:/<path>
		```
	- Instalando Django no ambiente virtual
		```bash
		(venv) pip install django
		```
4. Executando o projeto
	- Dentro dos arquivos do projeto, em "projeto", digite:
		```bash 
		python3 manage.py runserver
		```
	- Abrir o navegador e acessar o endereço:
	[http://127.0.0.1:8000](http://127.0.0.1:8000)
___
</div>  

