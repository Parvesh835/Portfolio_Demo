import React from 'react';
import SideNavbar from './SideNavbar';
import RightSideNavbar from './rightSideNavbar';
import Oliver from '../assets/Oliver.jpg';
import Luna from '../assets/Luna.jpg';
import Janny from '../assets/Janny.jpg';
import Marko from '../assets/Marko.jpg';
import { IterationCcw, Star } from 'lucide-react'; 


const Testimonials = () => {

    const testo = [
        {
            name: "Oliver",
            img: Oliver,
            heading: "UX (User Experience)",
            details: "Although web design has a fairly recent history, it can be linked to other areas such as graphic design, user experience, and multimedia arts, but is more aptly seen from a technological standpoint.",
        },
        {
            name: "Janny",
            img: Janny,
            heading: "UX (User Experience)",
            details: "Although web design has a fairly recent history, it can be linked to other areas such as graphic design, user experience, and multimedia arts, but is more aptly seen from a technological standpoint.",
        },
        {
            name: "Luna",
            img: Luna,
            heading: "UX (User Experience)",
            details: "Although web design has a fairly recent history, it can be linked to other areas such as graphic design, user experience, and multimedia arts, but is more aptly seen from a technological standpoint.",
        },
        {
            name: "Marko",
            img: Marko,
            heading: "UX (User Experience)",
            details: "Although web design has a fairly recent history, it can be linked to other areas such as graphic design, user experience, and multimedia arts, but is more aptly seen from a technological standpoint.",
        }
    ]

  return (
    <div className='fixed top-0 left-0 flex flex-row justify-between items-center  m-0 p-0'>
        
      {/* navbar */}
        <div className=' w-90 h-screen '>
            
            <SideNavbar/>

        </div>
          
        <div className='flex flex-col justify-start items-start gap-7 w-[70%] pl-10'>
            
            {/* heading */}
            <div className='flex flex-col justify-center items-start gap-3'>
                
                <h1 className='text-5xl font-font2 text-black pb-5'>TESTIMONIALS</h1>
            
            </div>
      
            {/* Information */}
            <div className='grid grid-cols-2 gap-5'>
                  {testo.map((items, index)=>
                    <div key={index} className='bg-gray-800 h-70 w-full flex p-3 gap-5 rounded-lg '>
                        <div className='flex flex-col gap-5 justify-center items-center'>
                              <img src={items.img} className='h-40 ' alt={items.name} /> 
                              <div className='flex justify-center items-center'><Star color='#F9B52B' className=''/><Star color='#F9B52B' className='' /><Star color='#F9B52B' className='' /><Star color='#F9B52B' className='' /><Star color='#F9B52B' className='' /></div>
                        </div>
                        
                        <div className='flex flex-col gap-5 justify-center items-start'>
                            <div className='flex flex-col justify-center items-start gap-2'>
                              <h1 className='text-2xl text-[#F9B52B]' font-bold> {items.name}</h1>
                              <h3 className='text-lg font-semibold text-white'>{items.heading}</h3>
                              <p className='text-sm text-white'>{items.details}</p>
                            </div>
                            <div className='flex  text-white justify-end w-full pr-5 '>
                                  <h1 className='text-right'>-{items.name}</h1>
                            </div>
                              
                        </div>
                    </div>
                  )}
            </div>
      
        </div>
        
        <div className='flex flex-col justify-center items-center w-[10%]'>
            <RightSideNavbar/>
        </div>
      
  </div>
  )
}

export default Testimonials
