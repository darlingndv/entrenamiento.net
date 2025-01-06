import Perfil_user from '../../support/Proyecto_Ronald/Perfil_user.cy'
/// <reference types="cypress" />

describe('Page objects Models', () =>{

    const master=new Perfil_user()

    master.VisitHome()

    it("Ingresar a la página con diferentes perfiles de usuario", () =>{
        master.credenciales_validas()
        master.credenciales_validas_normal()
    })


})// cierre describe