class Validacion_no_admin {

    VisitHome(){
        let tiempo=1000
        before(()=>{
            cy.visit('host.docker.internal:8081'),
            cy.title().should('eq','Elecciones 2024')
            cy.wait(tiempo)
            cy.get('.nav-item > .header-nav-a-link').should("be.visible").click()
            cy.wait(tiempo)
        })
    }

validacion_perfil(){
    let tiempo=2000
    cy.visit('http://host.docker.internal:8081/Account/UserProfile'),
    cy.wait(tiempo)
}

//Validacines de user no admin
Registro_user(){
    let tiempo=2000
    cy.visit('http://host.docker.internal:8081/Account/Login')
    cy.wait(tiempo)
    cy.get("#Email").clear().should("be.visible").click().type("ddiaz@teravisiontech.com")
    cy.wait(tiempo)
    cy.get("#passwordInput").clear().should("be.visible").click().type("Lucas2.12")
    cy.wait(tiempo)
    cy.get("#loginForm > button").should("be.visible").click()
    cy.wait(tiempo)
    cy.visit('http://host.docker.internal:8081/Account/RegisterForAdmin')
    cy.wait(3000)
    cy.visit('http://host.docker.internal:8081/Account/Login')
    cy.wait(3000)
    cy.visit('http://host.docker.internal:8081/Account/ListUsersForAdmin')
    cy.wait(tiempo)
}


}//final

export default Validacion_no_admin;