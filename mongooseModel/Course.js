var schema = new Schema({
    name: { type: String, required: true },
    duration: { type: String, rrequired: true },
    seats: { type: Number, required: true },
    fees: { type: Number, required: true }
})
export default mongoose.model("Course", schema)
