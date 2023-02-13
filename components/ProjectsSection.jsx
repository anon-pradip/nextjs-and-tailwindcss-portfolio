import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SlideUp from './Slideup'
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"


const projects = [
  {
    name: "Jobster",
    description: "Jobster is a job tracking web app to track your all jobs. Features included to track are: Pending Applicatons, Interviews Scheduled and Jobs Declined. Implemented ReCharts for visualizing all tracks in charts. You can create, read, update and delete jobs.",
    image: "/job-track.png",
    github: "https://github.com/anon-pradip/JobTrack-App",
    link: "https://job-track.netlify.app/"
  },
  {
    name: "Cocktails Finder",
    description: "Cocktails is a web app where we can search for desired cocktails and get details about that cocktails. We can find information like category, instructions and ingredients too.",
    image: "/cocktails.png",
    github: "https://github.com/anon-pradip/cocktails",
    link: "https://find-cocktails.netlify.app/"
  },
  {
    name: "Dojo Online Store",
    description: "This is a full featured web app where users can view products and add them to their cart and checkout them. There is also the provision for full flexible categories like price, colors, free shipping, etc.",
    image: "/dojo.png",
    github: "https://github.com/anon-pradip/Dojo-Online-Store",
    link: "https://dojo-online-store.netlify.app/"
  },
  {
    name: "Github Users",
    description: "This is a web app in which we can searh for any specific github users and view their repos details. It has ReCharts library implemented to visualize the details in charts.",
    image: "/github-user.png",
    github: "https://github.com/anon-pradip/search-github-users-react",
    link: "https://search-for-github-users-react.netlify.app/ "
  },

]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-16">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12 justify-center items-center">
                  <div className=" md:w-1/2">
                    <Link href={project.link} target='_blank'>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}

      </div>
    </section>
  )
}


export default ProjectsSection