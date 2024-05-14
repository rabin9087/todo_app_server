import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true,
        default: "low"
    },
    status: {
        type: String,
        required: true,
        default: 'not yet completed'
    },
}, {
    timestamps: true,
})

export default mongoose.model("tasksList", taskSchema)