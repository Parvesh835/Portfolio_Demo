import React from 'react'
import {
  Home,
  UserRound,
  BriefcaseBusiness,
  Monitor,
  Megaphone,
  Send,
  HomeIcon,
} from "lucide-react";
import { Link } from 'react-router-dom';


const RightSideNavbar = () => {

    return (
    <div className='fixed top-0 right-0 flex flex-col justify-center items-center gap-5 w-20 h-screen'> 
        
     <div className='p-3 bg-black hover:bg-[#F9B52B] rounded-full hover:scale-105 text-[#F9B52B] hover:text-black'>
        <Link to='/'>
            <Home size={23} strokeWidth={2.5}  />
        </Link>
     </div>
     
     <div className='p-3 bg-black hover:bg-[#F9B52B] rounded-full hover:scale-105 text-[#F9B52B] hover:text-black'>
        <Link to='/about'>
            <UserRound size={23} strokeWidth={2.5}  />
        </Link>
     </div>
     
     <div className='p-3 bg-black hover:bg-[#F9B52B] rounded-full hover:scale-105 text-[#F9B52B] hover:text-black'>
        <Link to='/resume'>
            <Monitor size={23} strokeWidth={2.5}  />
        </Link>
     </div>
     
     <div className='p-3 bg-black hover:bg-[#F9B52B] rounded-full hover:scale-105 text-[#F9B52B] hover:text-black'>
        <Link to='/portfolio'>
            <BriefcaseBusiness size={23} strokeWidth={2.5}  />
        </Link>
     </div>
     
     <div className='p-3 bg-black hover:bg-[#F9B52B] rounded-full hover:scale-105 text-[#F9B52B] hover:text-black'>
        <Link to='/message'>
            <Send size={23} strokeWidth={2.5}  />
        </Link>
     </div>
     
     <div className='p-3 bg-black hover:bg-[#F9B52B] rounded-full hover:scale-105 text-[#F9B52B] hover:text-black'>
        <Link to='/contact'>
            <Megaphone size={23} strokeWidth={2.5}  />
        </Link>
     </div>
      
    </div>
  )
}

export default RightSideNavbar
