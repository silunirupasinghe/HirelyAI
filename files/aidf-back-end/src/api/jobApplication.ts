import express  from "express";
import { createJobApplication, deleteJobApplicationById, getAllApplication, getJobApplicationById, updateJobApplication } from "../application/jobApplication";

const jobApplicationRoute= express.Router();

jobApplicationRoute.route("/").get(getAllApplication).post(createJobApplication)
jobApplicationRoute.route("/:_id").get(getJobApplicationById).put(updateJobApplication).delete(deleteJobApplicationById)

export default jobApplicationRoute