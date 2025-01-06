import editar_user_listado from '../../support/Proyecto_Ronald/editar_user_listado.cy'
/// <reference types="cypress" />

describe('Page objects Models', () =>{

    const master=new editar_user_listado()

    master.VisitHome()

    it("Listar usuarios con perfil admin", () =>{
        master.editar_user_listado()
    })


})// cierre describe