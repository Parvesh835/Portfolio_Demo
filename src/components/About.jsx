import React from 'react'
import SideNavbar from './SideNavbar';
import { FileBox , PanelsTopLeft, Camera  } from 'lucide-react';
import RightSideNavbar from './rightSideNavbar';



const About = () => {

    const funFacts = [
    { heading: "10+", description: "YEARS EXPERIENCE" },
    { heading: "450", description: "PROJECTS DONE" },
    { heading: "65", description: "WON AWARDS" },
    { heading: "300+", description: "HAPPY CLIENTS" },
    { heading: "650K", description: "SATISFIED FOLLOWERS" },
    { heading: "10+", description: "NEW VIDEOS EACH MONTH" }
  ];

  return (
  <div className='fixed top-0 left-0 flex flex-row justify-between items-center  m-0 p-0'>
        
      {/* navbar */}
    <div className=' w-90 h-screen '>
            
      <SideNavbar/>

    </div>
          
    <div className='flex flex-col justify-start items-start w-[70%] pl-20'>
            
        {/* heading */}
      <div className='flex flex-col justify-center items-start gap-3'>
                
        <h1 className='text-5xl font-font2 text-black pb-5'>ABOUT ME</h1>
        <h3 className='text-xl font-font1'> I'm <span className='font-bold'>Sarita Smith,</span> Graphic Designer / Photographer.</h3>
        <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea dolorum facilis, unde quia corporis quidem sed. Vitae, accusamusvoluptates, ad amet natus quam laudantium labore iure provident quas, nostrum ipsam?
        Numquam nam, incidunt qui nesciunt quidem temporibus delectus hic accusantium sequi rem magnam quo quas et voluptatibus amet fuga perferendis cum, distinctio cumque nemo consectetur laboriosam quod eaque! Voluptas, sunt?
        Porro rerum modi ab consequatur fugit iure reprehenderit et, delectus vero! Nam labore soluta repellat iusto consequuntur qui, quam suscipit delectus quos voluptatem. Eveniet cupiditate quasi error voluptatem unde necessitatibus!
        </p>
      </div>
                
      <div className='flex flex-row justify-between items-start gap-5 mt-5'>
                
        <div className="flex flex-col justify-center items-start gap-5 text-center">

          <div className='p-2 px-5 w-50 rounded-full bg-[#F9B52B] text-black font-bold text-lg '>
            <p>What I Do?</p>
          </div>
              
          <div className='flex justify-start items-start gap-5'>
                  
            <div className='p-5 bg-[#F9B52B] rounded-full'>
              <FileBox  size={70} strokeWidth={2}/>
            </div>
                  
            <div className='flex flex-col justify-start items-start gap-3'>

              <h1 className='font-bold'>PRINT DESIGN</h1>
              <p className='text-left w-70'>I create visually appealing designs that effectively communicate your brand's message and captivate your audience.</p>
                  
            </div>
            
          </div>
                
          <div className='flex justify-start items-start gap-5'>
                  
            <div className='p-5 bg-[#F9B52B] rounded-full'>
              <PanelsTopLeft  size={70} strokeWidth={2}/>
            </div>
                  
            <div className='flex flex-col justify-start items-start gap-3'>

              <h1 className='font-bold'>WEB DESIGN</h1>
              <p className='text-left w-70'>I capture moments that tell your story and create compelling visuals that resonate with your audience.</p>
                  
            </div>
                
          </div>
                
          <div className='flex justify-start items-start text-start gap-5'>
                  
            <div className='p-5 bg-[#F9B52B] rounded-full'>
              <Camera  size={70} strokeWidth={2}/>
            </div>
                  
            <div className='flex flex-col justify-start items-start  gap-3'>

              <h1 className='font-bold'>PHOTOGRAPHY </h1>
               <p className='text-left w-70'>I design intuitive and engaging websites that provide an excellent user experience and drive results.</p>
                  
            </div>
                
          </div>
        </div>
              
        <div className="flex flex-col justify-start items-start gap-10">
                
          <div className='p-2 px-5 w-50 rounded-full bg-[#F9B52B] text-black font-bold text-lg '>
            <p>Fun Facts</p>
          </div>
                
          <div className='grid grid-cols-3 gap-5'>   
               
            {funFacts.map((items, index) =>
              <div key={index} className='p-7 text-center rounded-full bg-black flex flex-col gap-3 w-35 h-35'>
                <h1 className='text-[#F9B52B] font-bold text-4xl'>{items.heading}</h1>
                <p className='text-white text-sm'>{items.description}</p>
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


export default About
