import edit_user_admin from '../../support/Proyecto_Ronald/edit_user_no_admin.cy'
/// <reference types="cypress" />

describe('Page objects Models', () =>{

    const master=new edit_user_admin()

    master.VisitHome()

    it("Test login", () =>{
        master.Editar_user_admin()
    })


})// cierre describe