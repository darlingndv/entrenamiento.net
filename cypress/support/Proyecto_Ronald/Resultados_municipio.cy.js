class Resultados_municipio{

    VisitHome(){
        let tiempo=1000
        before(()=>{
            cy.visit('http://host.docker.internal:8081/'),
            cy.title().should('eq','Elecciones 2024')
            cy.wait(tiempo)
            cy.get('.nav-item > .header-nav-a-link').should("be.visible").click()
            cy.wait(tiempo)
        })
    }



//Iniciar sesion
Resultados_municipio(){
    let tiempo=1000
    cy.get("#Email").clear().should("be.visible").type("ddiaz@teravisiontech.com")
    cy.wait(tiempo)
    cy.get("#passwordInput").clear().should("be.visible").type("Lucas2.12")
    cy.wait(tiempo)
    cy.get("#loginForm > button").should("be.visible").click()
    cy.wait(tiempo)
    cy.get('.nav-item > .header-nav-a-link').should("be.visible").click()

//Busqueda por municipio
    cy.get('#selectEstado').should("be.visible").select("Dtto. Capital")
    cy.wait(tiempo)
    cy.get('#selectMunicipio').should("be.visible").select("Mp. Blvno Libertador")
    cy.wait(tiempo)
    cy.get('#btnBuscar').should("be.visible").click()
    cy.wait(tiempo)
    cy.get('#rowsSelect').should("be.visible").select("10")
    cy.wait(tiempo)
    cy.get("#resultadosTableContainer").scrollTo(0, 200)
    cy.wait(tiempo)
    cy.get('#rowsSelect').should("be.visible").select("20")
    cy.wait(tiempo)
    cy.get("#resultadosTableContainer").scrollTo(0, 200)
    cy.wait(tiempo)
    cy.get("#resultadosTableContainer").scrollTo(0, 500)
    cy.wait(tiempo)
    cy.get("#resultadosTableContainer").scrollTo(0, 700)
    cy.wait(tiempo)
    cy.get('#rowsSelect').should("be.visible").select("50")
    cy.wait(tiempo)
    cy.get("#resultadosTableContainer").scrollTo(0, 300)
    cy.wait(tiempo)
    cy.get("#resultadosTableContainer").scrollTo(0, 800)
    cy.wait(tiempo)
    cy.get("#resultadosTableContainer").scrollTo(0, 1100)
    cy.wait(tiempo)
    cy.get("#resultadosTableContainer").scrollTo(0, 1400)
    cy.wait(tiempo)
    cy.get("#resultadosTableContainer").scrollTo(0, 1900)
    cy.wait(tiempo)

//Paginación
cy.get('.pagination > button').should("be.visible").click()
cy.wait(tiempo)
cy.get('#resultadosParciales > div.pagination > button:nth-child(3)').should("be.visible").click()
cy.wait(tiempo)

}

}//final

export default Resultados_municipio;