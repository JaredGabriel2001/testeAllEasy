Feature: Falha ao realizar Login

    Scenario: login nao foi realizado
        Given que tenha acesso ao site 
        When informar algum dado incorretamente 
        Then o login nao poderá ser realizado 