const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    apiUrl: "https://reqres.in",
    userEmail: "eve.holt@reqres.in",
    userPassword: "cityslicka",
  },//menggunakan web reqres.in

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
