# Documentação de caso de uso


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


### Links importantes 


- [Diagrama de casos de uso](https://github.com/tads-cnat/gameprofile/blob/main/docs/An%C3%A1lise/Caso%20de%20uso%20PDS%20distribuido%2001.drawio%20(1).png)


- [Figma do projeto](https://www.figma.com/file/dSRnqVj6y8ODgOGTLHax9r/Prototipos?node-id=0%3A1&t=BJKo6lfCw5KZHLYS-1)