import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

const url = 'https://www.google.co.uk'

Given('As someone interested in cryptocurrencies', () => {
  cy.visit(url)
  cy.reload()
})

When('I type {string} in Google search input', (searchtxt) => {
    cy.get("input[aria-label='Search']").type(searchtxt).type('{esc}')            
})

And('I click on the search button', () => {    
    cy.get("input[id='gbqfbb']").prev().click()     
})

And('I press Enter', () => {    
    cy.get("input[aria-label='Search']").type('{enter}')        
})

Then('I should see {string} as one of the search results', (verifylink) => {         
    cy.get("div[id='search']").contains(verifylink)
})


