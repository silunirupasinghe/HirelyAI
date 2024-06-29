import { Link } from "react-router-dom"
import JobCard from "@/components/shared/JobCard"
function JobSection(){
    const jobs=[
        {
            _id: "xyz",
            title: "Intern- Software enigineer",
            type:"Remote",
            location: "Colombo"

        },
        {
            _id: "xyz",
            title: "Software Architech",
            type:"Full-Time",
            location: "Colombo, Sri Lanka"

        },
    ];

    return(
        <section className="py-8">
            Availabe Jobs
            32.33
            <JobCard  _id={"xyz"} title={"Software Engineer"} type={"Full-Time"} location={"Colombo, Sri Lanka"} />
            <JobCard _id={"pqy"} title={"Software Engineering Intern"} type={"Remote"} location={"Hikkaduwa, Sri Lanka"} />
            {
                
            }
        </section>
    )
}
export default JobSection