import registro_user_admin from '../../support/Proyecto_Ronald/registro_user_admin.cy'
/// <reference types="cypress" />

describe('Page objects Models', () =>{

    const master=new registro_user_admin()

    master.VisitHome()

    it("Registrar usuario con perfil admin", () =>{
        master.registro_user_admin()
    })


})// cierre describe