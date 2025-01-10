import Resultados_parroquia from '../../support/Proyecto_Ronald/Resultados_parroquia.cy'
/// <reference types="cypress" />

describe('Page objects Models', () =>{

    const master=new Resultados_parroquia()

    master.VisitHome()

    it("Realizar busqueda por municipio", () =>{
        master.Resultados_parroquia()
    })


})// cirerre describe