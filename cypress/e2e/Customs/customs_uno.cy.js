/// <reference types="cypress" />

describe('Comandos personalizados', () =>{  
    let tiempo=1000
    before(()=>{
        cy.visit('host.docker.internal:8081'),
        cy.title().should('eq','Elecciones 2024')
        cy.wait(tiempo)
        cy.get('.nav-item > .header-nav-a-link').should("be.visible").click()
        cy.wait(tiempo)
    })
    
    it("Demo uno", () =>{
        cy.texto_visible("#Email","ddiaz@teravisiontech.com",500)
        cy.texto_visible("#passwordInput","Lucas2.12",500)
        cy.boton("#loginForm > button",500)
        cy.dropdawn("#settingsDropdown",".dropdown-item",".profile-logout-btn",500)

    })





    
})// cirerre describe