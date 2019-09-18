const mochatest = require("../mochatest")
const assert = require("chai").assert
var chai = require("chai")
var should = require("should")
var supertest = require("supertest")
var should = require("chai").should()

var chaiHttp = require("chai-http")
var expect = chai.expect

chai.use(chaiHttp)

const adminUrl = "http://localhost:3000/Course"

/*
 * Test the /POST route
 */
// describe("/POST course", () => {
//     it("it should POST a course ", (done) => {
//         let course = {
//             name: "IT Engineering",
//             duration: "3 years",
//             seats: 60,
//             fees: 25000
//         }

//         chai.request(adminUrl)
//             .post("/")
//             .send(course)
//             .end(function(err, res) {
//                 expect(err).to.be.null
//                 expect(res).to.have.status(200)
//                 res.body.should.be.a("object")
//                 done()
//             })
//     })
// })
/*
 * Test the /GET route
 */
// describe("/GET course Data", () => {
//     it("it should get a course data Array", (done) => {
//         setTimeout(done, 300)
//         chai.request(adminUrl)
//             .get("/")
//             .end((err, res) => {
//                 expect(err).to.be.null
//                 expect(res).to.have.status(200)
//                 expect(res.body).to.be.an("array")
//                 // console.log("All data :", res.body)
//                 done()
//             })
//     })
// })
/*
 * Test the /GET route
 */
describe("/GET course Data By ID", () => {
    it("it should get a course data Object", (done) => {
        let id = "5d81b80279147b041aebbdb9"

        chai.request(adminUrl)
            .get("/" + id + "")
            //.send(course)
            .end(function(err, res) {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res.body).to.be.an("object")
                console.log("single data :", res.body)
                done()
            })
    })

    //Testing the status 404 for task not found
    it("returns status 404 when id is not found", function(done) {
        var id = "fakeId"

        chai.request(adminUrl)
            .get("/" + id)
            .end(function(err, res) {
                expect(res).to.have.status(404)
                done(err)
            })
    })
})
// /*
//  * Test the /PUT route
//  */
// describe("/PUT course Data By ID", () => {
//     it("it should update a course data Object by Id", (done) => {
//         let id = "5d81b80279147b041aebbdb9"

//         chai.request(adminUrl)

//             .put("/" + id + "")
//             .send({ name: "Extc Engineering" })
//             .end(function(err, res) {
//                 //   expect(err).to.be.null
//                 expect(res).to.have.status(200)
//                 //  expect(res.body).to.be.an("object")
//                 // console.log("single data :", res.body)
//                 done()
//             })
//     })
// })
// /*
//  * Test the /DELETE route
//  */
// describe("/DELETE course Data By ID", () => {
//     it("it should delete a course data Object by Id", (done) => {
//         let id = "5d809e4d4f470707c975637b"

//         chai.request(adminUrl)

//             .delete("/" + id + "")

//             .end(function(err, res) {
//                 expect(err).to.be.null
//                 //    expect(res).to.have.status(200)
//                 //  expect(res.body).to.be.an("object")
//                 // console.log("single data :", res.body)
//                 done()
//             })
//     })
// })

// describe("DELETE BY ID", () => {
//     it("should get delete teachers record by ID", (done) => {
//         let id = "5d81b80279147b041aebbdb9"

//         chai.request(adminUrl)
//             .delete("/" + id + "")
//             // .send({'name': 'john'})
//             .end((err, res) => {
//                 // console.log("data displayed",res.body)
//                 expect(res.body).to.be.an("object")
//                 done()
//             })
//     })
// })
