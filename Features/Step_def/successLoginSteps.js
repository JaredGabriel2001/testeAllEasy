const {Given, When, Then, After, Before} = require ('@cucumber/cucumber'); //carrega os modulos GIVEN WHEN THEN, After e Before do cucumber para informar as açoes tomadas antes e depois de executar as etapas da feature
const {expect} = require('chai'); //carrega o modulo expect do chai, para validar o resultado 
const {By} = require("selenium-webdriver"); // '' By do selenium-webdriver para informar o tipo de dado esperado 
const {setDefaultTimeout}= require('@cucumber/cucumber'); // '' setDefaultTimeout para limitar o tempo de espera do driver
const {initDriver} = require('../Support/driveUtil');// '' iniDriver do arquivo driveUtil para construir o driver
setDefaultTimeout(60*1000); //seta para 1 minuto o tempo de espera maximo do driver

let driver;
//inicia o driver 
Before(function(){
    driver = initDriver();
});

//fecha o driver
After(function(){
    driver.quit();
});

Given('que tenha acesso ao site', async() => {
    await driver.get("http://automationpractice.com/index.php"); //url do site
    driver.findElement(By.xpath('//*[@id="header"]/div[2]/div/div/nav/div[1]/a')).click; //botao de login
});

When('informar os dados corretamente', async() => {
    let email = await driver.findElement(By.xpath('//*[@id="email"]/div/div[1]/a')).sendKeys('gabrieljaredjared@gmail.com'+'\n');
    await driver.findElement(By.css('input[id=passwd]')).sendKeys('99743461'+'\n');
}); 

Then('o login deve ser realizado com sucesso', async() => {
    let text = await driver.findElement(By.className('page-heading')).getText();
    expect(text).equal("Order history and details");
});
