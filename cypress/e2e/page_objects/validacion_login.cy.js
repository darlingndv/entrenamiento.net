import Validacion_login from '../../support/page_objects_models/Validacion_login.cy'
/// <reference types="cypress" />

describe('Page objects Models', () =>{

    const master=new Validacion_login()

    master.VisitHome()

    it("Test login", () =>{
        master.credenciales_vacias()
        master.credenciales_invalidas()
        master.credenciales_validas()
        master.cerrar_sesion()
    })


})// cirerre describe