var async = require("async")
var count = 0
export default {
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

    asyncManipulation: function(data, callback) {
        var page = 1
        var limit = 2
        var checkPagination = true
        async.whilst(
            function testCondition(callback) {
                // callback(null, checkPagination)
                return checkPagination
            },

            function(callback) {
                async.waterfall(
                    [
                        function(callback) {
                            callback(null, data)
                        },
                        function(data, callback) {
                            Student.find()
                                .skip(page * limit - limit)
                                .limit(limit)
                                .exec(callback)
                        },
                        function(users, callback) {
                            page++
                            if (users.length < limit) {
                                checkPagination = false
                            }

                            async.each(
                                users,
                                function(user, callback) {
                                    AsyncWhilstModel.doFunctinality(
                                        user,
                                        callback
                                    )
                                },
                                callback
                            )
                        }
                    ],
                    callback
                )
            },
            function(err) {
                callback(null, null)
            }
        )
    },
    doFunctinality: function(user, callback) {
        console.log(" hii I am " + user.name)
        callback(null, user)
    }
}
