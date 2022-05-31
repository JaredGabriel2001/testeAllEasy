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

When('informar algum dado incorretamente', function () {
    
});

Then('o login nao poderá ser realizado', function () {
    
});