class edit_user {

    VisitHome(){
        let tiempo=1000
        before(()=>{
            cy.visit('http://localhost:8081/'),
            cy.title().should('eq','Elecciones 2024')
            cy.wait(tiempo)
            cy.get('.nav-item > .header-nav-a-link').should("be.visible").click()
            cy.wait(tiempo)
        })
    }


//Eidtar usuarios con perfil admin
Editar_user_admin(){
    let tiempo=1000
    cy.get("#Email").clear().should("be.visible").click().type("adminuser@gmail.com")
    cy.wait(tiempo)
    cy.get("#passwordInput").clear().should("be.visible").click().type("AdminUser93.")
    cy.wait(tiempo)
    cy.get("#loginForm > button").should("be.visible").click()
    cy.wait(tiempo)
    cy.get("#settingsDropdown").should("be.visible").click()
    cy.wait(tiempo)
    cy.get(':nth-child(1) > .dropdown-item').should("be.visible").click()
    cy.wait(tiempo)
    cy.get('.first-btns > .general-profile-btn').should("be.visible").click()
    cy.wait(tiempo)
    cy.get('#Nombre').clear().should("be.visible").type("a")
    cy.wait(tiempo)
    cy.get('#updateUserForm > button').click()
    cy.wait(tiempo)
}

}//final

export default edit_user;