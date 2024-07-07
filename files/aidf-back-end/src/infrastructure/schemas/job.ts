import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title :{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    questions:{
        type: [String],
        default: ["Share your acadamic background and highlight key programming concepts you've mastered. How was your education shaped your current tech skill set?" , "Discuss notable projects in your programming experience. What challenges did you face, and how did you apply your skills to overcome them? "]
    }
})

const Job= mongoose.model("Job", jobSchema);
export default Job;