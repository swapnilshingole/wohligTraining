export default {
    /**
     * This function adds one to its input.
     * @param {number} input any number
     * @returns {number} that number, plus one.
     */
    search: async function(_query, callback) {
        const students = await Student.find()
        Student.aggregate([
            {
                $lookup: {
                    from: "courses",
                    localField: "course",
                    foreignField: "_id",
                    as: "course"
                }
            }
        ]).exec(callback)
        //     callback(null, students)
    },
    getOne(data, callback) {
        // const student = Student.findById({
        //     _id: data.id
        // })
        //    .populate("course")
        //    .exec(callback)
        Student.aggregate([
            {
                $match: { _id: ObjectId(data.id) }
            },

            {
                $lookup: {
                    from: "courses",
                    localField: "course",
                    foreignField: "_id",
                    as: "course"
                }
            }
        ]).exec(callback)
    },
    saveData: (data, callback) => {
        const student = new Student(data)
        student.save(callback)
    }
}
