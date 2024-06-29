import { buttonVariants } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import Hero from "./components/Hero.jsx"
import JobSection from "./components/JobSection.jsx"

function home() {
 
  return (
    <>
    <main>
      <div className="container">
       <Hero/>
       <JobSection/>

       </div>
       </main>
    </>
  )
}

export default home
