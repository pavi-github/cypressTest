import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

const facebookurl = 'https://www.facebook.com/'

Given('As a social media user', () => {
  
  cy.visit(facebookurl)
  cy.get("button[data-cookiebanner='accept_button']").click()  
  cy.get("[data-testid=royal_email]").type("abc@gmail.com")
  cy.get("[data-testid=royal_pass]").type("testpassword1")
  cy.get("[data-testid=royal_login_button]").click()  

})

And('I want to publish a status update to Facebook', () => {    
  cy.get("#data-visualcompletion-ignore").click()               // DATA ELEMENTS TO BE IDENTIFIED
  cy.get("#placeholder-9jfbd").type("I am having lunch")        // DATA ELEMENTS TO BE IDENTIFIED
  cy.get("#post").click()                                       // DATA ELEMENTS TO BE IDENTIFIED

})

Then('So that everyone knows that {string}', (verifymessage) => {        
  cy.get("#postpage").contains(verifymessage)                           // DATA ELEMENTS TO BE IDENTIFIED

})
