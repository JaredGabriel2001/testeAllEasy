const webdriver = require('selenium-webdriver'); // carrega o modulo do webdriver do selenium

exports.initDriver = () => {
    driver = new webdriver.Builder() //constroi o driver
        .forBrowser('chrome') //seta o navegador Chrome para ser criado
        .build();
    return driver; // retorna o driver construido 
}
