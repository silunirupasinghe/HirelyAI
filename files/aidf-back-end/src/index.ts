import express from "express";
import { Request, Response } from "express";
import jobsRouter from "./api/jobs";
const app = express();
app.use(express.json());

app.use("/jobs", jobsRouter )

const PORT= 4000
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}.`));
