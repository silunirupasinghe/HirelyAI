import { Link } from "react-router-dom"
import JobCard from "@/components/shared/JobCard"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const getJobs = async () => {
    const res = await fetch("http://localhost:8000/jobs", {
        method: "GET",
    })
    const jobs = await res.json()
    return jobs
};
function JobSection() {
    const [jobs, setJobs] = useState([]);
    const [isjobsLoading, setIsJobLoading] = useState(false);
    const [isJobError, setIsJobError] = useState(false);
    useEffect(() => {
        setIsJobLoading(true);
        getJobs()
            .then((data) => {
                setJobs(data)
            }).finally(() => {
                setIsJobLoading(false);
            }).catch((err) => {
                setIsJobError(true);

            })
    }, [])
    if (isjobsLoading) {
        return (<section className="py-8">
            <h2>Availabe Jobs</h2>
            <div className="mt-4 flex flex-col gap-y-8">
                <p>Loading...</p>
            </div>
        </section>)
    }
    if (isJobError) {
        return (<section className="py-8">
            <h2>Availabe Jobs</h2>
            <div className="mt-4 flex flex-col gap-y-8">
                <p>Error while fetching the data. Please try again.</p>
            </div>
        </section>)
    }
    return (
        <section className="py-8">
            <h2>Availabe Jobs</h2>

            <div className="mt-4 flex flex-col gap-y-8">
                {jobs.map((job) => {
                    return (
                        <JobCard key={job._id}
                            title={job.title}
                            type={job.type}
                            _id={job._id}
                            location={job.location} />

                    )
                })}

            </div>
            {

            }
        </section>
    )
}
export default JobSection