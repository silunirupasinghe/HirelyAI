import express, { NextFunction } from "express";
import { Request, Response } from "express";
import JobApplication from "../infrastructure/schemas/jobApplication";
import Job from "../infrastructure/schemas/job";

const app = express();
app.use(express.json())

export const getAllApplication = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {jobid} = req.query;
        
        if(jobid){
            const jobApplication= await JobApplication.find({job: jobid});
            return res.status(200).json(jobApplication)
        }
        const jobApplication = await JobApplication.find().populate("job").exec();
        return res.status(200).json(jobApplication)
    } catch (error) {
        next(error)
    }


}

export const createJobApplication = async (req: Request, res: Response) => {
    const jobApplication = req.body
    await JobApplication.create(jobApplication)
    return res.status(200).send();
}

export const getJobApplicationById = async (req: Request, res: Response) => {
    const jobApplication = await JobApplication.findById(req.params._id)
    if (!jobApplication) {
        return res.status(404).send()
    }
    return res.status(200).json(jobApplication)
}

export const deleteJobApplicationById = async (req: Request, res: Response) => {
    const job = await JobApplication.findByIdAndDelete(req.params._id)
    if (!JobApplication) {
        return res.status(404).send()
    }
    return res.status(204).send();
}

export const updateJobApplication = async (req: Request, res: Response) => {
    const jobApplication = await JobApplication.findByIdAndUpdate(req.params._id);
    if (!JobApplication) {
        return res.status(404).send()
    }
    await JobApplication.findByIdAndUpdate(req.params._id, { userId: req.body.userId, fullName: req.body.fullName, answers: req.body.answers, rating: req.body.ratings })
    return res.status(204).send();
}