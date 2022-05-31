const {Given, When, Then} = require ('@cucumber/cucumber');
const {expect} = require('chai');
const {By} = require("selenium-webdriver");
const {setDefaultTimeout}= require('@cucumber/cucumber');
const {initDriver} = require('../Support/driveUtil');
const {After, Before} = require('@cucumber/cucumber');
setDefaultTimeout(60*1000);

let driver;
Before(function(){
    this.driver = initDriver();
});

After(function(){
    this.driver.quit();
});

Given('que tenha acesso ao site', async() => {
    await driver.get("http://automationpractice.com/index.php");
});

When('informar os dados corretamente', function () {
    
});

Then('o login deve ser realizado com sucesso', function () {
    
});
