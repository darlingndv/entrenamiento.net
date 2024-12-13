import Validacion_registro from '../../support/page_objects_models/Validacion_registro.cy'
/// <reference types="cypress" />

describe('Page objects Models', () =>{

    const master=new Validacion_registro()

    master.VisitHome()

    it("Test registro", () =>{
        master.Registro_validacion()
        master.Registro_existente()
    })



})// cirerre describe