import { expect } from "chai"
const envVar = require ('../fixtures/envVar.json')

describe("Get a specific user info", ()=>{
    it("Enters the user ID", ()=>{
        cy.request({
            method: "GET",
            url:envVar.baseUrl + "/users/7",
            headers:{
             'Authorization' : envVar.token,
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
            //console.log(response.body)
            //var token = response.body.data.Token
            //envVar.token = token
            cy.writeFile('cypress/fixtures/UserList.json', response.body)

        })
    })
})
