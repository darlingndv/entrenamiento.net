import Resultados_municipio from '../../support/Proyecto_Ronald/Resultados_municipio.cy'
/// <reference types="cypress" />

describe('Page objects Models', () =>{

    const master=new Resultados_municipio()

    master.VisitHome()

    it("Realizar busqueda por municipio", () =>{
        master.Resultados_municipio()
    })


})// cirerre describe