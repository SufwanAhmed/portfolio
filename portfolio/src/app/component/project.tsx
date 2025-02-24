import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Project = () => {
  return (
    <div id='Projects'>
        <section className="text-gray-600 body-font bg-gray-100">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4  text-yellow-900">
        My Projects
      </h1>
    </div>
    <div className="flex flex-wrap -m-8">
        {/* Projects */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
           
          
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Calculator Project Coding
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Calculator
            </h1>
            <p className="leading-relaxed">
              This is the project which I have created for make calculation easily. 
            </p>
            <Link target="_blank"href={"https://vercel.com/farzan-ahmeds-projects/calculator"}>
            <p className='leading-relaxed text-indigo-500 mb-1 hover:underline'>View Project </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Project
