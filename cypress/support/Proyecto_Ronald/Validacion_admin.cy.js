class Validacion_admin {

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

//Validacines de user admin
validacion_user_admin(){
    let tiempo=2000
    cy.visit('http://host.docker.internal:8081/Account/Login')
    cy.wait(tiempo)
    cy.get("#Email").clear().should("be.visible").click().type("adminuser@gmail.com")
    cy.wait(tiempo)
    cy.get("#passwordInput").clear().should("be.visible").click().type("AdminUser93.")
    cy.wait(tiempo)
    cy.get("#loginForm > button").should("be.visible").click()
    cy.wait(tiempo)
    cy.visit('http://host.docker.internal:8081/Account/ChangePassword')
    cy.wait(3000)
}


}//final

export default Validacion_admin;