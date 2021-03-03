import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

const googleurl = 'https://www.google.co.uk'

Given('As someone interested in cryptocurrencies', () => {
  cy.visit(googleurl).reload()
})

When('I type {string} in Google search input', (searchtxt) => {
    cy.get("input[aria-label='Search']").type(searchtxt).type('{esc}')            
})

And('I click on the search button', () => {    
    cy.get("#gbqfbb").prev().click()     
})

And('I press Enter', () => {    
    cy.get("input[aria-label='Search']").type('{enter}')        
})

Then('I should see {string} as one of the search results', (verifylink) => {         
    cy.get("#search").contains(verifylink)
})


