# language: pt

Funcionalidade: Authenticação
    Sendo um visitante que já tem cadastro no Pedal Radical
    Quero fazer a Authenticação
    Para que eu possa ver meus pedais

    Cenário: Authenticar
        Dado que faço uma solicitação de Authenticação
        Quando envio o email e senha
        Então devo receber um token de Authenticação

        Example:
            | email          | password |
            | davi@teste.com | teste    |

    Cenário: Email não informado
        Dado que faço uma solicitação de Authenticação
        Quando envio a senha sem um email
        Então devo receber um erro com a mensagem "É necessário que o campo 'email' seja preenchido"

        Example:
            | email | password |
            |       | teste    |

    Cenário: Senha não informada
        Dado que faço uma solicitação de Authenticação
        Quando envio o email sem uma senha
        Então devo receber um erro com a mensagem "É necessário que o campo 'password' seja preenchido"
        
        Example:
            | email          | password |
            | davi@teste.com |          |

    Cenário: Senha incorreta
        Dado que faço uma solicitação de Authenticação
        Quando envio os dados de autenticação 
        E a senha é incorreta
        Então devo receber um erro com a mensagem "O email/senha informado está incorreto"

    Cenário: Nenhum campo preenchido
        Dado que faço uma solicitação de Authenticação
        Quando envio os campos de Authenticação vazio
        Então devo receber um erro com a mensagem "É necessário que o campo 'email' e 'password' sejam preenchidos"

        Example:
            | email | password |
            |       |          |

    Cenário: Email não cadastrado
        Dado que faço uma solicitação de Authenticação
        Quando envio o email sem uma senha
        Então devo receber um erro com a mensagem "O email/senha informado está incorreto"