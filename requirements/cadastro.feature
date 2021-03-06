# language: pt

Funcionalidade: Cadastro
    Sendo um visitante que não possui cadastro no Pedal Radical
    Quero fazer o meu cadastro
    Para que eu possar ouvir minhas músicas favoritas

    Cenário: Cadastro
        Dado que faço uma solicitação de Cadastro
        Quando envio meu cadastro
        Então devo receber um token de Authenticação

        Example:
            | email          | password | passwordConfirmation |
            | davi@teste.com | teste    | teste                 |

    Cenário: Email não informado
        Dado que faço uma solicitação de Cadastro
        Quando envio a senha e confirmação de senha sem um email e 
        Então devo receber um erro com a mensagem "É necessário que o campo 'email' seja preenchido"

        Example:
            | email | password | passwordConfirmation |
            |       | teste    | teste                 |

    Cenário: Senha não informada
        Dado que faço uma solicitação de Cadastro
        Quando envio o email sem uma senha
        Então devo receber um erro com a mensagem "É necessário que o campo 'password' seja preenchido"

        Example:
            | email          | password | passwordConfirmation |
            | davi@teste.com |          | teste                 |

    Cenário: Confirmação de senha não informada
            Dado que faço uma solicitação de Cadastro
            Quando envio os parametros de cadastros sem a confirmação de senha
            Então devo receber um erro com a mensagem "É necessário que o campo 'passwordConfirmation' seja preenchido"

            Example:
                | email          | password | passwordConfirmation |
                | davi@teste.com | teste    |                       |

    Cenário: Senha divergente
        Dado que faço uma solicitação de Cadastro
        Quando envio os dados de cadastro e as senha não são iguais
        Então devo receber um erro com a mensagem "As senhas informadas não são iguais"

        Example:
            | email          | password | passwordConfirmation |
            | davi@teste.com | teste    | test2                 |


    Cenário: Email já cadastrado
        Dado que faço uma solicitação de Cadastro
        Quando envio meu cadastro e já existe um cadastro com o mesmo email
        Então devo receber um erro com a mensagem "Já existe um usuário cadastrado com o email informado"

        Example:
            | email          | password | passwordConfirmation |
            | davi@teste.com | teste    | teste                 |