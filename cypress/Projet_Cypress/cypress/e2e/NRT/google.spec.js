/// <reference  types="cypress" />

import * as google from '../../Pages/Google/Google'


it('Recherche_cypress', ()=>{
    Cypress.on('uncaught:exception',()=>{
        return false
    })
    cy.Recherche_Google();
})