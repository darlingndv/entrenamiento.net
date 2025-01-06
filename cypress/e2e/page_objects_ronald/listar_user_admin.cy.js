import listar_user_admin from '../../support/Proyecto_Ronald/listar_user_admin.cy'
/// <reference types="cypress" />

describe('Page objects Models', () =>{

    const master=new listar_user_admin()

    master.VisitHome()

    it("Listar usuarios con perfil admin", () =>{
        master.listar_user_admin()
    })


})// cierre describe