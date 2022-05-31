Feature: Login em branco 

    Scenario: login nao preenchido
        Given que tenha acesso ao site 
        When nao preencher os campos de login
        Then entao o login nao deve ser realizado 