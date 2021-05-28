Funcionalidade: Criação de Pedal
    Sendo um usuário logado no Pedal Radical
    Desejo criar um Pedal
    Para que eu e outros usuário possamos participar


    Cenário: Criar Pedal
        Dado que faço uma solicitação de Criação de Pedal
        Quando envio as informações do meu pedal
        Então devo receber uma mensagem: "Pedal criado com sucesso"  
        E as informações do pedal cadastrado
        
        Examples:
            | name | start_date  | start_date_registration | end_date_registration | additional_information | start_place | participants_limit |
            | Davi | 2021-06-30  | 2021-05-28              | 2021-06-20            | Any                    | Rio do Sul  | 50                 |

    Cenário: Data de Início de Registro maior ou igual a Data de Início
        Dado que faço uma solicitação de Criação de Pedal
        Quando envio uma Data de Início de Registro maior ou igual a Data de Início
        Então devo receber uma mensagem de erro: "A Data de Início de Registro não pode ser igual ou maior que a Data de Início do Pedal"

        Examples:
            | name  | start_date  | start_date_registration | end_date_registration | additional_information | start_place | participants_limit |
            | Pedal | 2021-06-25  | 2021-06-28              | 2021-06-31            | Any                    | Rio do Sul  | 50                 |

    Cenário: Data de Fim de Registro maior ou igual a Data de Início
        Dado que faço uma solicitação de Criação de Pedal
        Quando envio uma Data de Fim de Registro maior ou igual a Data de Início
        Então devo receber uma mensagem de erro: "A Data de Fim de Registro não pode ser igual ou maior que a Data de Início do Pedal"

        Examples:
            | name  | start_date  | start_date_registration | end_date_registration | additional_information | start_place | participants_limit |
            | Pedal | 2021-06-30  | 2021-05-28              | 2021-06-30            | Any                    | Rio do Sul  | 50                 |

    Cenário: Data de Fim de Registro menor que a Data de Início de Registro
        Dado que faço uma solicitação de Criação de Pedal
        Quando envio uma Data de Fim de Registro menor que a Data de Início de Registro
        Então devo receber uma mensagem de erro: "A Data de Fim de Registro não pode ser menor que a Data de Início de Registro"

        Examples:
            | name  | start_date  | start_date_registration | end_date_registration | additional_information | start_place | participants_limit |
            | Pedal | 2021-06-30  | 2021-06-21              | 2021-06-20            | Any                    | Rio do Sul  | 50                 |

    Cenário: Número de participantes menor que 1 e diferente de nulo
        Dado que faço uma solicitação de Criação de Pedal
        Quando envio o número limite de participantes menor do que 1 e diferente de nulo
        Então devo receber uma mensagem de erro: "O número máximo de participantes não pode ser menor que 1 caso seja preenchido"

        Examples:
            | name  | start_date  | start_date_registration | end_date_registration | additional_information | start_place | participants_limit |
            | Pedal | 2021-06-30  | 2021-06-21              | 2021-06-20            | Any                    | Rio do Sul  | 0                  |

Funcionalidade: Visualização de Pedais
    Sendo um usuário logado no Pedal Radical
    Desejo visualizar pedais
    Para que eu possa visualizar os pedais cadastrados por mim e outras pessoas

    Cenário: Visualizar Pedais Criados por mim
        Dado que faço uma solicitação de Visualização de Pedais
        Então recebo uma lista com os pedais que eu criei
        

        Examples:
            | id | name  | start_date  | start_date_registration | end_date_registration | additional_information | start_place | participants_limit  |
            | id | Pedal | 2021-06-30  | 2021-06-21              | 2021-06-20            | Any                    | Rio do Sul  | 50                  |

    Cenário: Visualizar Pedais que participei
        Dado que faço uma solicitação de Visualização de Pedais
        Quando eu tiver me inscrito em um pedal
        E a data de início do pedal for maior ou igual a data atual
        Então recebo uma lista com os pedais que eu participei
        

        Examples:
            | id | name  | start_date  | start_date_registration | end_date_registration | additional_information | start_place | participants_limit |
            | id | Pedal | 2021-06-30  | 2021-06-21              | 2021-06-20            | Any                    | Rio do Sul  | 50                  |

    Cenário: Visualizar Pedais Criados por outras pessoas

        Dado que faço uma solicitação de Visualização de Pedais
        Quando um pedal não for criado por mim
        Então recebo uma lista com os pedais que outras pessoas criaram
        

        Examples:
            | id | name    | start_date  | start_date_registration | end_date_registration | additional_information | start_place | participants_limit  | user_id |
            | id | Pedal   | 2021-06-30  | 2021-06-21              | 2021-06-20            | Any                    | Rio do Sul  | 50                  | user_id |
            | id | Radical | 2021-06-30  | 2021-06-21              | 2021-06-20            | Any                    | Indaial     | 20                  | user_id |



Funcionalidade: Se increver em Pedais
    Sendo um usuário logado no Pedal Radical
    Desejo me inscrever em um pedal
    Para que eu possa participar dele

    Cenário: Inscrição 
        Dado que faço uma solicitação de Inscrição em um Pedal
        Então recebo uma mensagem: "Inscrição no Pedal concluída!"
        E recebo as informações do pedal que me inscrevi
    

        Examples:
            | ride_id | user_id | subscription_date |
            | ride_id | user_id | subscription_date |

            | id | name  | start_date  | start_date_registration | end_date_registration | additional_information | start_place | participants_limit  |
            | id | Pedal | 2021-06-30  | 2021-06-21              | 2021-06-20            | Any                    | Rio do Sul  | 50                  |
    
    Cenário: Data atual é maior que Data de Fim de Registro
        Dado que faço uma solicitação de Inscrição em um Pedal
        Quando a Data Atual for maior que a Data de Fim de Registro
        Então recebo uma mensagem de erro: "Não foi possível realizar a inscrição pois a Data de Fim de Registro é menor que a Data Atual"
    
    Cenário: Identificador do Pedal não é enviado
        Dado que faço uma solicitação de Inscrição em um Pedal
        Quando não envio o ride_id
        Então recebo uma mensagem de erro: "É necessário que seja enviado o 'ride_id'"