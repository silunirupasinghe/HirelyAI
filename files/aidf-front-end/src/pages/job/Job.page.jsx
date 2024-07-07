import { Briefcase, MapPin } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const getJob = async (id) => {
    const res = await fetch(`http://localhost:8000/jobs/${id}`, {
        method: "GET",
    });
    const job = await res.json();
    return job;
};

const createJob = async (jobApplication) => {
    const res = await fetch(`http://localhost:8000/jobApplication/`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jobApplication),
    });
};

function JobPage() {
    const [job, setJob] = useState(null);
    const params = useParams()

    useEffect(() => {
        getJob(params.id)
            .then((data) => {
                setJob(data);
                console.log(data);
            })
            .catch((err) => { })
            .finally(() => { });
    }, [params]);

    const [formData, setFormData] = useState({
        fullName: "",
        a1: "",
        a2: "",
        a3: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        createJob({
            fullName: formData.fullName,
            answers: [formData.a1, formData.a2],
            job: params.id,
            userId :"123"
        })
    }
    return (
        <div>
            <div>
                <h2>{job?.title}</h2>
                <div className="flex items-center gap-x-4 mt-4">
                    <div className="flex items-center gap-x-2">
                        <Briefcase />
                        <span>{job?.type}</span>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <MapPin />
                        <span>{job?.location}</span>
                    </div>
                </div>
            </div>
            <div className="mt-4 py-4">
                <p>{job?.description}</p>
            </div>
            <div className="mt-4 py-4">
                <p>{job?.description}</p>
            </div>
            <Separator />

            <div>
                <form className="py-8 flex  flex-col gap-y-8" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-y-4">
                        <Label>
                            Full Name
                        </Label>
                        <Input required onChange={(event) => setFormData({ ...formData, fullName: event.target.value })} />
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <Label>
                            {job?.questions[0]}
                        </Label>
                        <Textarea required onChange={(event) => setFormData({ ...formData, a1: event.target.value })} />
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <Label>
                        {job?.questions[1]}  </Label>
                        <Textarea required onChange={(event) => setFormData({ ...formData, a2: event.target.value })} />
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <Label>
                        {job?.questions[2]}</Label>
                        <Textarea required onChange={(event) => setFormData({ ...formData, a3: event.target.value })} />
                    </div>
                    <div>
                        <Button type="submit" className="bg-card text-card-foreground">
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default JobPage