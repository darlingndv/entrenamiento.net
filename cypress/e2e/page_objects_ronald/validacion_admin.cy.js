import Validacion_admin from '../../support/Proyecto_Ronald/Validacion_admin.cy'
/// <reference types="cypress" />

describe('Page objects Models', () =>{

    const master=new Validacion_admin()

    master.VisitHome()

    it("Test login", () =>{
        master.validacion_perfil()
        master.validacion_user_admin()
    })


})// cirerre describe