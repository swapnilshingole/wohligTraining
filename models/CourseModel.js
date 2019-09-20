export default {
    search: async function(_query, callback) {
        const course = await Course.find().exec(callback)

        //  callback(null, course)
    },

    getById(data, callback) {
        Course.findOne({
            _id: data.id
        }).exec(callback)
    },
    saveData: (data, callback) => {
        const course = new Course(data)
        course.save(callback)
    },

    deleteOne: (data, callback) => {
        console.log("id---", data.id)
        Course.findByIdAndRemove({ _id: data.id }).exec(callback)
    },

    updateById: (data, callback) => {
        Course.findByIdAndUpdate(data.params.id, data.body, { new: true }).exec(
            callback
        )
    },

    pegination: async function(data, callback) {
        const resPerPage = 2 // results per page

        const page = data.params.page // Page

        const course = await Course.find()
            .skip(resPerPage * page - resPerPage)
            .limit(resPerPage)
            .exec()

        callback(null, course)
    },

    partialUpdate: (data, res) => {
        for (let [key, value] of Object.entries(data.body)) {
            const keyValue = `${key}: ${value}`
            var jsonkey = `${key}`
            var jsonvalue = `${value}`
            var obj = {}
            obj[jsonkey] = jsonvalue

            Course.findByIdAndUpdate(data.params.id, obj, { new: true }).exec(
                res.callback
            )
        }
    }
}
