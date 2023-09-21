import { expect } from "chai"
const envVar = require ('../fixtures/envVar.json')

describe("Testing the registration process", ()=>{
    it("Registers with unused email", ()=>{
        cy.request({
            method: "POST",
            url:envVar.baseUrl + "/registration",
            body:{
            "name":"Developer",
            "email":"Developer5588@gmail.com",
            "password":558800
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
            //var token = response.body.token
            //envVar.token = token
            cy.writeFile('cypress/fistures/envireonment.json', JSON.stringify(envVar))

        })
    })
})