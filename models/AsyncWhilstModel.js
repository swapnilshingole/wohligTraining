var async = require("async")
var count = 0

// async.whilst(
//     function testCondition() {
//         console.log("count", count)
//         return count < 5
//     },
//     function anotherFunction(callback) {
//         count++
//         console.log("hiiiii")
//         setTimeout(callback, 1000)
//     },
//     function callback(err, data) {
//         if (err) {
//             console.log("error occured")
//             return
//         }
//         console.log("Data Printing completed")
//     }
// )

export default {
    asyncManipulation: (data, abc) => {
        var page = 1
        var resPerPage = 2
        var pageCount = true
        async.whilst(
            function testCondition() {
                console.log("page--" + page)
                return pageCount
            },
            function(callback) {
                async.waterfall(
                    [
                        function(callback) {
                            console.log("callback", callback)
                            callback(null, data)
                        },
                        function(data, callback) {
                            const student = Student.find()
                                .skip(resPerPage * page - resPerPage)
                                .limit(resPerPage)
                                .exec(callback)
                        },
                        function(studentArr, callback) {
                            //  console.log("studentArraySize", studentArr.length)
                            page++
                            _.each(studentArr, function(student, callback) {
                                // console.log("methodcalling")
                                methodeCalling(student)
                            })
                            if (studentArr.length != resPerPage) {
                                pageCount = false
                            }
                            //  callback(null, course)
                        }
                    ],
                    function(err, result) {
                        // result now equals to 'Task1 and Task2 completed'
                        // console.log("dddddd")
                        console.log(result)
                    }
                )
                setTimeout(callback, 1000)
            },
            function callback(err, data) {
                if (err) {
                    console.log("error occured")
                    return
                }
                console.log("Data Printing completed")
            }
        )
    }
}
function methodeCalling(student) {
    // console.log("------" + student)
    console.log("hiiii " + student.name)
}
