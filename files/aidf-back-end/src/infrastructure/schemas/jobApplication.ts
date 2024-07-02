import mongoose from "mongoose";
import Job from "./job";

const jobApplicationScema = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
    },
    fullName:{
        type: String,
        required: true,
    },
    answers:{
        type: [String],
        required: true,
    },
    job:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
        required: true
    },
    rating:{
        type: String,
    },
})

const JobApplication = mongoose.model("JobApplication", jobApplicationScema)
export default JobApplication