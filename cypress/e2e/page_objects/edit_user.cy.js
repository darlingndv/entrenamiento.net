import edit_user from '../../support/page_objects_models/edit_user.cy'
/// <reference types="cypress" />

describe('Page objects Models', () =>{

    const master=new edit_user()

    master.VisitHome()

    it("Test login", () =>{
        master.Editar_user_admin()
    })


})// cierre describe