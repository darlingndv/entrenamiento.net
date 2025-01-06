import Perfil_user from '../../support/Proyecto_Ronald/Perfil_user.cy'
/// <reference types="cypress" />

describe('Page objects Models', () =>{

    const master=new Perfil_user()

    master.VisitHome()

    it("Test login", () =>{
        master.credenciales_validas()
        master.credenciales_validas_normal()
    })


})// cierre describe