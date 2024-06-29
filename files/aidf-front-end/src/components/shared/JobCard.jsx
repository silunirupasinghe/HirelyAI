import { Link } from "react-router-dom"
import { Card,CardHeader,CardDescription,CardContent,CardTitle,CardFooter } from "@/components/ui/card"
import { Briefcase,MapPin } from "lucide-react"
function JobCard(props){
    return(
        <section className="">
         
            <div className="mt-4 flex flex-col gap-y-8">
                <Link to={`/jobs/${props._id}`} className="block">
                <Card>
                    <CardHeader>
                        <CardTitle>{props.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                    
                    </CardContent>
                    <CardFooter className='gap-x-4'>
                        <div className="flex items-center gap-y-8 ">
                            <Briefcase/>
                            <span>{props.type}</span>       
                        </div>
                        <div className="flex items-center gap-y-8 ">
                            <MapPin/>
                            <span>{props.location}</span>       
                        </div>
                    </CardFooter>
                </Card>
                </Link>
            </div>

        </section>
    )
}
export default JobCard