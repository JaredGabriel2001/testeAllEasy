const {Given, When, Then, After, Before} = require ('@cucumber/cucumber'); //carrega os modulos GIVEN WHEN THEN, After e Before do cucumber para informar as açoes tomadas antes e depois de executar as etapas da feature
const {expect} = require('chai'); //carrega o modulo expect do chai, para validar o resultado 
const {By} = require("selenium-webdriver"); // '' By do selenium-webdriver para informar o tipo de dado esperado 
const {setDefaultTimeout}= require('@cucumber/cucumber'); // '' setDefaultTimeout para limitar o tempo de espera do driver
const {initDriver} = require('../Support/driveUtil.js')// '' iniDriver do arquivo driveUtil para construir o driver
setDefaultTimeout(60*1000); //seta para 1 minuto o tempo de espera maximo do driver

let driver;
//inicia o driver 
Before(function(){
    this.driver = initDriver();
});
//fecha o driver
After(function(){
    this.driver.quit();
});

When('nao preencher os campos de login', async() => {
    
});

Then('entao o login nao deve ser realizado', async() => {
    let text = await driver.findElement(By.xpath('//*[@id="center_column"]/div[1]/ol/li')).getText();
    expect(text).equal("An email address required.");
});