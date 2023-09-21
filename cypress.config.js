const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.specPattern = [
        'cypress/e2e/RegistrationTest.cy.js',
        'cypress/e2e/LoginTest.cy.js',
        'cypress/e2e/UserListTest.cy.js'
      ]
    },
  },
});
