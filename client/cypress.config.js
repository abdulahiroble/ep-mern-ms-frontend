const {defineConfig} = require("cypress");


module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    baseUrl: process.env.PUBLIC_URL,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },

  },

});

// const {defineConfig} = require('cypress')

// module.exports = defineConfig({
//   reporter: 'cypress-mochawesome-reporter',
  
//   e2e: {
//     baseUrl: 'http://localhost:3000',
//     reporter: 'reporters/custom.js',
//     setupNodeEvents(on, config) {

//       require('cypress-mochawesome-reporter/plugin')(on);

//     },
//   }
// })