/// <reference types="cypress" />

import * as google from '../../Object-Repositry/Google/Google.PO'

Cypress.Commands.add('Recherche_Google', () =>{



Cypress.on('uncaught:exception',()=>{
    return false
})

cy.visit('https://www.google.com/')
cy.get(google.inputGoogle)
  .type('Cypress')
  .type('{enter}')

})
