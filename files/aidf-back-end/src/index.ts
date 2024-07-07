import express from "express";
import { Request, Response } from "express";
import jobsRouter from "./api/jobs";
import "dotenv/config"
import { connectDB } from "./infrastructure/db";
import jobApplicationRoute from "./api/jobApplication";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

app.use("/jobs", jobsRouter )
app.use("/jobApplication", jobApplicationRoute)
connectDB();
const PORT= 8000
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}.`));
