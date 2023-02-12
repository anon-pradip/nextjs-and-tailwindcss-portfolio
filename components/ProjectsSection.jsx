import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


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
    description: "",
    image: "/cocktails.png",
    github: "https://github.com/anon-pradip/cocktails",
    link: "https://find-cocktails.netlify.app/"
  },

]

const ProjectsSection = () => {
  return (
    <div>ProjectsSection</div>
  )
}

export default ProjectsSection