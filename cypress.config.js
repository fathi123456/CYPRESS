const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env : {
      baseUrl : "https://parabank.parasoft.com/parabank/index.htm" ,
      user : "fathi" ,
      password : "fathi",
      error : "An internal error has occurred and has been logged."
    },
    defaultCommandTimeout : 10000,
    pageLoadTimeout :  20000,
    video : true,
    //viewportHeight :   ,
    //viewportWidth : ,
    chromeWebSecurity : false
  },

});
