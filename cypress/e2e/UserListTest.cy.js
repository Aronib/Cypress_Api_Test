import { expect } from "chai"
const envVar = require ('../fixtures/envVar.json')

describe("Get User List and write it in a JSON file", ()=>{
    it("", ()=>{
        cy.request({
            method: "GET",
            url:"http://restapi.adequateshop.com/api/users?page=1",
            headers:{
                "Authorization": envVar.token
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