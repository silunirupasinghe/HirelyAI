import express from "express";
import { Request, Response } from "express";
import Job from "../infrastructure/schemas/job";
const app = express();

app.use(express.json());

export const getAllJobs = async (req: Request, res: Response) => {
    try {
        const jobs = await Job.find();
        return res.status(200).json(jobs);
    } catch (error) {
        console.log(error); //dev
        return res.status(500).send(); //for the front end
    }

}

export const createJob = async (req: Request, res: Response) => {
    try {
        const job = req.body;
        if (typeof job.title == "undefined" || typeof job.location == "undefined" || typeof job.description == "undefined" || typeof job.type == "undefined") {
            return res.status(400).send()
        }
        await Job.create(job);
        return res.status(200).send();
    } catch (error) {
        console.log(error);
        return res.status(500).send();
    }

}

export const getJobById = async (req: Request, res: Response) => {
    try {
        const job = await Job.findById(req.params._id)
        if (!job) {
            return res.status(404).send()
        }
        return res.json(job);
    } catch (error) {
        console.log(error);
        return res.status(500).send();
    }

}

export const deleteJobById = async (req: Request, res: Response) => {
    try {
        const job = await Job.findByIdAndDelete(req.params._id)
        if (!job) {
            return res.status(404).send()
        }
        return res.status(204).send();
    } catch (error) {
        console.log(error);
        return res.status(500).send();
    }

}

export const updateJob = async (req: Request, res: Response) => {
    try {
        const jobToUpdate = await Job.findByIdAndUpdate(req.params._id)
        if (!jobToUpdate) {
            return res.status(404).send()
        }
        await Job.findByIdAndUpdate(req.params._id, { title: req.body.title, location: req.body.location, type: req.body.type, description: req.body.description })
        return res.status(204).send();
    } catch (error) {
        console.log(error);
        return res.status(500).send();
    }

}

