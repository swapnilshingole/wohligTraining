var schema = new Schema({
    name: String,
    parent: String,
    email: String,

    course: {
        type: Schema.Types.ObjectId,
        ref: "Course"
    }
})
export default mongoose.model("Student", schema)
