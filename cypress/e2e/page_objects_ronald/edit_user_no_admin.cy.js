import edit_user_no_admin from '../../support/Proyecto_Ronald/edit_user_no_admin.cy'
/// <reference types="cypress" />

describe('Page objects Models', () =>{

    const master=new edit_user_no_admin()

    master.VisitHome()

    it("Editar usuarios con perfil no admin", () =>{
        master.Editar_user_no_admin()
    })


})// cierre describe