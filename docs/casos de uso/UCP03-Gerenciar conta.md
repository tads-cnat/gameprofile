# Documentação de caso de uso


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



### Links importantes 
- [Diagrama de casos de uso](https://github.com/tads-cnat/gameprofile/blob/main/docs/An%C3%A1lise/Caso%20de%20uso%20PDS%20distribuido%2001.drawio%20(1).png)


- [Figma do projeto](https://www.figma.com/file/dSRnqVj6y8ODgOGTLHax9r/Prototipos?node-id=0%3A1&t=BJKo6lfCw5KZHLYS-1)



