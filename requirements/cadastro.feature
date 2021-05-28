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
            | email          | password | confirmation_password |
            | davi@teste.com | teste    | teste                 |

    Cenário: Email não informado
        Dado que faço uma solicitação de Cadastro
        Quando envio a senha e confirmação de senha sem um email e 
        Então devo receber um erro com a mensagem "É necessário que o campo 'email' seja preenchido"

        Example:
            | email | password | confirmation_password |
            |       | teste    | teste                 |

    Cenário: Senha não informada
        Dado que faço uma solicitação de Cadastro
        Quando envio o email sem uma senha
        Então devo receber um erro com a mensagem "É necessário que o campo 'password' seja preenchido"

        Example:
            | email          | password | confirmation_password |
            | davi@teste.com |          | teste                 |

    Cenário: Senha divergente
        Dado que faço uma solicitação de Cadastro
        Quando envio os dados de cadastro e as senha não são iguais
        Então devo receber um erro com a mensagem "As senhas informadas não são iguais"

        Example:
            | email          | password | confirmation_password |
            | davi@teste.com | teste    | test2                 |

    Cenário: Nenhum campo preenchido
        Dado que faço uma solicitação de Cadastro
        Quando envio os campos de cadastro vazio
        Então devo receber um erro com a mensagem "É necessário que os campos 'email', 'password', 'confirmation_password',  sejam preenchidos"

        Example:
            | email | password | confirmation_password |
            |       |          |                       |

    Cenário: Email já cadastrado
        Dado que faço uma solicitação de Cadastro
        Quando envio meu cadastro e já existe um cadastro com o mesmo email
        Então devo receber um erro com a mensagem "Já existe um usuário cadastrado com o email informado"

        Example:
            | email          | password | confirmation_password |
            | davi@teste.com | teste    | teste                 |