import cambiar_password from '../../support/Proyecto_Ronald/cambiar_password.cy'
/// <reference types="cypress" />

describe('Page objects Models', () =>{

    const master=new cambiar_password()

    master.VisitHome()

    it("Listar usuarios con perfil admin", () =>{
        master.cambiar_password()
    })


})// cierre describe