import express from "express";
import { Request, Response } from "express";
import Job from "../infrastructure/schemas/job";
const app = express();

app.use(express.json());

export const getAllJobs = async (req: Request, res: Response) => {

    const jobs = await Job.find();
    return res.status(200).json(jobs);
}

export const createJob = async (req: Request, res: Response) => {
    const job = req.body;
    await Job.create(job);
    return res.status(200).send();
}
export const getJobById = async (req: Request, res: Response) => {
    const job = await Job.findById(req.params._id)
    if (!job) {
        return res.status(404).send()
    }
    return res.json(job);
}

export const deleteJobById = async (req: Request, res: Response) => {
    const job = await Job.findByIdAndDelete(req.params._id)
    if (!job) {
        return res.status(404).send()
    }
    return res.status(204).send();
}

export const updateJob = async (req: Request, res: Response) => {
    const jobToUpdate = await Job.findByIdAndUpdate(req.params._id)
    if (!jobToUpdate) {
        return res.status(404).send()
    }
    await Job.findByIdAndUpdate(req.params._id, {title: req.body.title, location: req.body.location, type: req.body.type, description: req.body.description})
    return res.status(204).send();
}

