import React from 'react'
import SideNavbar from './SideNavbar'
import RightSideNavbar from './rightSideNavbar'

const Resume = () => {

  const education = [
    {
      heading: "Computer Science",
      years: "2017-2019",
      details: "A browser tool used by developers, designers, and QA engineers to quickly generate and insert realistic placeholder data"
    },
    {
      heading: "Computer Science",
      years: "2017-2019",
      details: "A browser tool used by developers, designers, and QA engineers to quickly generate and insert realistic placeholder data"
    },
    {
      heading: "Computer Science",
      years: "2017-2019",
      details: "A browser tool used by developers, designers, and QA engineers to quickly generate and insert realistic placeholder data"
    }
  ]

  const experience = [
    {
      heading: "Web Designing",
      years: "2021-2024",
      details: "A browser tool used by developers, designers, and QA engineers to quickly generate and insert realistic placeholder data"
    },
    {
      heading: "Graphic Designing",
      years: "2021-2024",
      details: "A browser tool used by developers, designers, and QA engineers to quickly generate and insert realistic placeholder data"
    },
    {
      heading: "Product designing",
      years: "2021-2024",
      details: "A browser tool used by developers, designers, and QA engineers to quickly generate and insert realistic placeholder data"
    }
  ]

  return (
    <div className='fixed top-0 left-0 flex flex-row justify-between items-center  m-0 p-0'>
        
      {/* navbar */}
    <div className=' w-90 h-screen '>
            
      <SideNavbar/>

    </div>
          
    <div className='flex flex-col justify-start items-start gap-10 w-[70%] pl-20'>
            
        {/* heading */}
      <div className='flex flex-col justify-center items-start gap-3'>
                
         <h1 className='text-5xl font-font2 text-black pb-5'>RESUME</h1>
            
      </div>
      
      {/* Information */}
      <div className='flex flex-col justify-center itemas-start gap-10'>

        {/*first section  */}
        
        <div className='flex flex-col justify-center items-start  gap-5'>
          {/* Heading  */}
          <div className='px-3 w-50 py-1.5 bg-[#F9B52B] text-2xl rounded-full text-center' >
            <h1>EDUCATION</h1>
          </div>
          <div className='flex  justify-center items-start gap-3'>
            {education.map((items,index)=>
              <div key={index} className='flex flex-col justify-center items-start text-left gap-3'>
                <div className='bg-black rounded-full w-30 text-white px-2 py-1'>
                  {items.years}
                </div>  
                <h1 className='font-semibold text-lg'>{items.heading}</h1>
                <p>{items.details}</p>
              </div>
            )}
          </div>
        </div>
        
        {/* seond Section */}
        
        <div className='flex flex-col justify-center items-start  gap-5'>
          {/* Heading  */}
          <div className='px-3 w-50 py-1.5 bg-[#F9B52B] text-2xl rounded-full text-center' >
            <h1>EXPERIENCE</h1>
          </div>
          <div className='flex  justify-center items-start gap-3'>
            {experience.map((items,index)=>
              <div key={index} className='flex flex-col justify-center items-start text-left gap-3'>
                <div className='bg-black rounded-full w-30 text-white px-2 py-1'>
                  {items.years}
                </div>  
                <h1 className='font-semibold text-lg'>{items.heading}</h1>
                <p>{items.details}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
    </div>
        
    <div className='flex flex-col justify-center items-center w-[10%]'>
            <RightSideNavbar/>
    </div>
      
  </div>
  )
}

export default Resume
