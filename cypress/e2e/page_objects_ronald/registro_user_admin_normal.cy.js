import registro_user_admin_normal from '../../support/Proyecto_Ronald/registro_user_admin_normal.cy'
/// <reference types="cypress" />

describe('Page objects Models', () =>{

    const master=new registro_user_admin_normal()

    master.VisitHome()

    it("Registrar usuario con perfil admin", () =>{
        master.registro_user_admin_normal()
    })


})// cierre describe