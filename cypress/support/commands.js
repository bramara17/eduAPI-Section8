// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('loginViaAPI', (
    email = Cypress.env('userEmail'),
    password = Cypress.env('userPassword')
  ) => {
    var utoken= {
      "token": "QpwL5tke4Pnpja7X4"
  }
    cy.request('POST', `${Cypress.env('apiUrl')}/api/login`, {
      email: email,
      password
    }).then((response) => {
      cy.setCookie('token', response.body.token)
      expect(response.body.token).to.eq(utoken.token)
      expect(response.status).equal(200)
    })
 })
 