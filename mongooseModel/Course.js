var schema = new Schema({
    name: String,
    duration: String,
    seats: Number,
    fees: Number
})
export default mongoose.model("Course", schema)
