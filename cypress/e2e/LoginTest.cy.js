import { expect } from "chai"
const envVar = require ('../fixtures/envVar.json')

describe("Testing the login function", ()=>{
    it("Enters the valid credentials and receives the token ", ()=>{
        cy.request({
            method: "POST",
            url:envVar.baseUrl + "/authaccount/login",
            body:{
            "email":"Developer5588@gmail.com",
            "password":558800
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
            //console.log(response.body)
            var token = response.body.data.Token
            envVar.token = token
            cy.writeFile('cypress/fixtures/envVar.json', JSON.stringify(envVar))

        })
    })
})
