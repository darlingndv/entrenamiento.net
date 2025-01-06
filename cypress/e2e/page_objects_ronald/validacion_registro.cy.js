import Validacion_registro from '../../support/Proyecto_Ronald/Validacion_registro.cy'
/// <reference types="cypress" />

describe('Page objects Models', () =>{

    const master=new Validacion_registro()

    master.VisitHome()

    it("Registrarse en el página", () =>{
        master.Registro_validacion()
        master.Registro_existente()
    })



})// cirerre describe