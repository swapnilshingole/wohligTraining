async = require("async")
export default {
    search: function(_query, callback) {
        //    const course = await Course.find().exec()
        //    console.log("course", course)
        //    callback(null, course)

        async.parallel(
            {
                course: async function(callback) {
                    //  setTimeout(function() {
                    console.log("Task One")
                    const course = await Course.find().exec()
                    console.log("course-", course)
                    callback(null, course)
                    //   }, 200);
                },
                student: async function(callback) {
                    //  setTimeout(function() {
                    console.log("Task Two")
                    const student = await Student.find().exec()
                    console.log("student-", student)
                    callback(null, student)
                    //   }, 100);
                }
            },
            function(err, results) {
                console.log("done")
                // the results array will equal [1, 2] even though
                // the second function had a shorter timeout.
            }
        )
    },

    searchById(data, callback) {
        async.waterfall(
            [
                function(callback) {
                    callback(null, data.id)
                },
                function(studentId, callback) {
                    const student = Student.findOne({
                        _id: studentId
                    }).exec(callback)
                },
                function(student, callback) {
                    console.log("courseId-", student.course)

                    const course = Course.findOne({
                        _id: student.course
                    }).exec(callback)

                    //  callback(null, course)
                }
            ],
            function(err, result) {
                // result now equals to 'Task1 and Task2 completed'
                console.log(result)
            }
        )
    }
}
