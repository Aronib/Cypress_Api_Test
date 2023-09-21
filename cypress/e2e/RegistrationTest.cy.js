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
            console.log(response.body)
            //var token = response.body.token
            //envVar.token = token
            //cy.writeFile('cypress/fixtures/envVar.json', JSON.stringify(envVar))

        })
    })
})