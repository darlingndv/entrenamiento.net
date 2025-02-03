import Validacion_no_admin from '../../support/Proyecto_Ronald/Validacion_no_admin.cy'
/// <reference types="cypress" />

describe('Page objects Models', () =>{

    const master=new Validacion_no_admin()

    master.VisitHome()

    it("Test login", () =>{
        master.validacion_perfil()
        master.Registro_user()
    })


})// cirerre describe