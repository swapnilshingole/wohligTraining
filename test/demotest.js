const mochatest = require("../mochatest")
const assert = require("chai").assert
var chai = require("chai")
const should = require("should")
var chaiHttp = require("chai-http")
var expect = chai.expect

chai.use(chaiHttp)

const adminUrl = "http://localhost:3000/Course"
// describe("mochatest", function() {
//     it("mochatest function should be return hello", function() {

//         assert.equal(mochatest.sayHello(), "hello")
//     })
// })

/*
 * Test the /POST route
 */
// describe("/POST course", () => {
//     it("it should POST a course ", (done) => {
//         let course = {
//             name: "Computer Engineering",
//             duration: "3 years",
//             seats: 60,
//             fees: 25000
//         }

//         chai.request(adminUrl+'Course')
//             .post("/")
//             .send(course)
//             .end(function(err, res) {
//                 expect(err).to.be.null
//                 expect(res).to.have.status(200)
//                 done()
//             })
//     })
// })
/*
 * Test the /GET route
 */
describe("/GET course Data", () => {
    it("it should get a course data Array", (done) => {
        setTimeout(done, 300)
        chai.request(adminUrl)
            .get("/")
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res.body).to.be.an("array")
                // console.log("All data :", res.body)
                done()
            })
    })
})
/*
 * Test the /GET route
 */
describe("/GET course Data By ID", () => {
    it("it should get a course data Object", (done) => {
        let id = "5d809e4d4f470707c975637b"

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
})
/*
 * Test the /PUT route
 */
describe("/PUT course Data By ID", () => {
    it("it should update a course data Object by Id", (done) => {
        let id = "5d809e4d4f470707c975637b"

        chai.request(adminUrl)

            .put("/" + id + "")
            .send({ name: "Mech Engineering" })
            .end(function(err, res) {
                //   expect(err).to.be.null
                expect(res).to.have.status(200)
                //  expect(res.body).to.be.an("object")
                // console.log("single data :", res.body)
                done()
            })
    })
})
/*
 * Test the /DELETE route
 */
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

describe("DELETE BY ID", () => {
    it("should get delete teachers record by ID", (done) => {
        let id = "5d809e4d4f470707c975637b"

        chai.request(adminUrl)
            .delete("/" + id + "")
            // .send({'name': 'john'})
            .end((err, res) => {
                // console.log("data displayed",res.body)
                done()
            })
    })
})
