import React from 'react';
import myImg from "../assets/myImg.png";
import { Link } from 'react-router-dom';


const SideNavbar = () => {

    const navItems = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About Me",
            path: "/about"
        },
        {
            name: "Resume",
            path: "/resume"
        },
        {
            name: "Portfolio",
            path: "/portfolio"
        },
        {
            name: "Testimonials",
            path: "/testimonials"
        },
        {
            name: "Contact",
            path: "/contact"
        }
    ]

  return (
    <div className='flex flex-col justify-center items-center w-70 h-screen m-0'>
                
                <div className='h-[30%] w-[100%] bg-[#414141] flex items-center justify-center p-1 w-420px '>
                    <img src={myImg} alt="" className='h-40 w-40 rounded-full border-2 border-white' />
                </div>
            
                <div className='w-[100%] h-[70%] flex flex-col gap-10 font-bold font-font1 justify-center items-center  bg-[#F9B52B] '>
                  {
                      navItems.map((items, index) =>
                          <div key={index} className='hover:text-white flex flex-col  justify-between items-center gap-15'><Link to={items.path}>{items.name}</Link></div>
                    )
                  }
          </div>
    </div>
  )
}

export default SideNavbar
