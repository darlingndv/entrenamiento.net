import Resultados_estado from '../../support/Proyecto_Ronald/Resultados_estado.cy'
/// <reference types="cypress" />

describe('Page objects Models', () =>{

    const master=new Resultados_estado()

    master.VisitHome()

    it("Realizar busqueda por estado", () =>{
        master.Resultados_estado()
    })


})// cirerre describe