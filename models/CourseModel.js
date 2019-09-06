export default {
    
    search: async function(_query, callback) {
        const course = await Course.find().exec()
        callback(null, course)
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

    deleteOne :(data, callback) => {
        Course.findByIdAndRemove({_id: data.id
        }).exec(callback)
    },

    updateById :(data) => {
        Course.findByIdAndUpdate(data.params.id, {
            name   : data.body.name,
            duration: data.body.duration,
            seats  : data.body.seats,
            fees: data.body.fees

        }, {new: true})
        .then(course => {
            if(!course) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.id
                });
            }
        //    res.send(course);
        }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.id
                });                
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.id
            });
        });
    },

    pegination : async function(data, callback) {
        const resPerPage = 2; // results per page
        
        const page = data.params.page; // Page

        const course = await Course.find().skip((resPerPage * page) - resPerPage)
        .limit(resPerPage) .exec();
        
        callback(null, course)
    }
}
