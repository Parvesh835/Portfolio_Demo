import React from 'react'
import SideNavbar from './SideNavbar'
import RightSideNavbar from './rightSideNavbar'
import { Monitor, Phone , User } from 'lucide-react';
const Contact = () => {
    const contact = [
        {
            icon: Monitor,
            name: "www.xyzExample.com",
            name1: "www.xyzExample.com"
        },
        {
            icon: Phone,
            name: "+91 7467723456",
            name1: "+91 7838753462"
        },
        {
            icon: User,
            name: "SOCIAL NETWORKINGNAME",
            name1: "SOCIAL NETWORKINGNAME"
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
                
                <h1 className='text-6xl font-font2 text-black pb-5'>CONTACT</h1>
            
            </div>
      
            {/* Information */}
            <div className='flex flex-col justify-center items-start gap-3'>
                <h1 className='text-3xl'>Fell <span className='font-bold'>free</span> to contact me!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A commodi, cumque fugit vitae molestiae esse nulla id deleniti minima suscipit non reprehenderit aliquid ullam quos numquam.</p>
                <div className='flex justify-center w-full items-start pt-10 gap-40'>
                        {
                            contact.map((items, index) =>
                                <div key={index} className='flex flex-col justify-center itema-start gap-3'>
                                    <div className='bg-[#F9B52B] w-50 h-50 rounded-full flex justify-center items-center'><items.icon size={110} color='#000000' /></div>
                                    <p className='font-bold'>{items.name}</p>
                                    <p className='font-bold'>{items.name1}</p>
                                </div>
                            )
                        }
                </div>

                <h1 className='text-center w-full text-4xl pt-20 font-bold'>THANKS FOR PATIENCE!</h1>

            </div>
      
        </div>
        
        <div className='flex flex-col justify-center items-center w-[10%]'>
            <RightSideNavbar/>
        </div>
      
  </div>      
)
}

export default Contact
