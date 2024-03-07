const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "jmgkaa",
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    // reportDir: "cypress\reports",
    overwrite: true,
    html: true,
    json: false,
    embeddedScreenshots: true,
    reportPageTitle: "My test Suite Result"

  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      // implement node event listeners here
    },
    baseUrl: "https://demoqa.com"
  },
  //reponsive same with laptop device
  viewportWidth: 1366,
  viewportHeight: 768
});