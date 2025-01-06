import edit_user_admin from '../../support/Proyecto_Ronald/edit_user_admin.cy'
/// <reference types="cypress" />

describe('Page objects Models', () =>{

    const master=new edit_user_admin()

    master.VisitHome()

    it("Editar usuarios con perfil admin", () =>{
        master.edit_user_admin()
    })


})// cierre describe