import login_admin from '../../support/page_objects_models/login_admin.cy'
/// <reference types="cypress" />

describe('Page objects Models', () =>{

    const master=new login_admin()

    master.VisitHome()

    it("Test login", () =>{
        master.credenciales_validas()
    })


})// cirerre describe