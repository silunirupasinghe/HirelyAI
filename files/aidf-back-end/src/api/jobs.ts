import express from "express";
import { createJob, deleteJobById, getAllJobs, getJobById, updateJob } from "../application/jobs";

const jobsRouter = express.Router();

jobsRouter.route("/").get(getAllJobs).post(createJob);
jobsRouter.route("/:_id").get(getJobById).put(updateJob).delete(deleteJobById);
export default jobsRouter
