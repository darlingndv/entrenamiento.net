import edit_user_no_admin from '../../support/page_objects_models/edit_user_no_admin.cy'
/// <reference types="cypress" />

describe('Page objects Models', () =>{

    const master=new edit_user_no_admin()

    master.VisitHome()

    it("Test login", () =>{
        master.Editar_user_no_admin()
    })


})// cierre describe