import React, { useState } from 'react';
import SideNavbar from './SideNavbar';
import RightSideNavbar from './rightSideNavbar';


const Portfolio = () => {

    const [active, setActive] = useState("all")

    const projects = [
  { id: 1, category: "photography", title: "Portrait 1", img: "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp" },
  { id: 2, category: "web", title: "Website 1", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIJ4tsK-5-am7SRNPPnw4HNrBxOLFQOv0ihrH2AhNTCA&s=10" },
  { id: 3, category: "print", title: "Brochure 1", img: "https://img.magnific.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_hybrid&w=740&q=80" },
  { id: 4, category: "web", title: "Website 2", img: "https://static.vecteezy.com/system/resources/thumbnails/057/516/329/small/the-vibrant-red-roses-shine-beautifully-each-petal-glistening-with-delicate-droplets-showcasing-nature-s-elegance-on-a-quiet-day-photo.jpg" },
  { id: 5, category: "web", title: "Website 3", img: "https://png.pngtree.com/thumb_back/fh260/background/20240913/pngtree-dp-pictures-for-whatsapp-beautiful-pics-image_16199698.jpg" },
  { id: 6, category: "photography", title: "Portrait 2", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7CBJorho6YGePkRtqPY5gj9l2RwFyfdqGTNlddvpwwLiN5b6RyrkbjMJo&s=10" },
  { id: 7, category: "print", title: "Magazine 1", img: "https://thumbs.dreamstime.com/b/monarch-orange-butterfly-bright-summer-flowers-background-blue-foliage-fairy-garden-macro-artistic-image-monarch-167030287.jpg" },
  { id: 8, category: "photography", title: "Landscape 1", img: "https://png.pngtree.com/thumb_back/fh260/background/20241010/pngtree-the-bengal-tiger-emblem-of-wild-image_16362570.jpg" },
  { id: 9, category: "photography", title: "Portrait 3", img: "https://img.magnific.com/free-photo/lavender-field-sunset-near-valensole_268835-3910.jpg?semt=ais_hybrid&w=740&q=80" },
  { id: 10, category: "print", title: "Flyer 1", img: "https://images.pexels.com/photos/19183135/pexels-photo-19183135/free-photo-of-spring-blossoms-lostintespace.jpeg?cs=tinysrgb&dpr=1&w=500" },
  { id: 11, category: "web", title: "Website 4", img: "https://static.photo-ac.com/static/assets/image/logo/photo_open_graph.jpeg" },
  { id: 12, category: "print", title: "Poster 1", img: "https://media.istockphoto.com/id/1296913338/photo/sonoran-sunset.jpg?s=612x612&w=0&k=20&c=lGXd-vnDmH_bCnR53BNmwxsh3qn8MBLQoh5M926QAbY=" },
    ];
    
    const filters = [
  { key: "all", label: "All" },
  { key: "print", label: "Print Design" },
  { key: "web", label: "Web Design" },
  { key: "photography", label: "Photography" },
    ];

     const visible =
    active === "all" ? projects : projects.filter((p) => p.category === active);
    

  return (
    <div className='fixed top-0 left-0 flex flex-row justify-between items-center  m-0 p-0'>
        
      {/* navbar */}
        <div className=' w-90 h-screen '>
            
            <SideNavbar/>

        </div>
          
        <div className='flex flex-col justify-start items-start gap-7 w-[70%] pl-10'>
            
            {/* heading */}
            <div className='flex flex-col justify-center items-start gap-3'>
                
                <h1 className='text-5xl font-font2 text-black pb-5'>Portfolio</h1>
            
            </div>
      
            {/* Information */}
            <div className='flex flex-wrap gap-3 mt-5 mb-6'>
              {filters.map((iteam) =>
                  <button key={iteam.key}
                      onClick={()=> setActive(iteam.key)}
                      className={`px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider cursor-pointer transition-colors ${
              active === iteam.key ? "bg-amber-400" : "bg-transparent hover:bg-amber-200"
                      }`}>{iteam.label}</button>    
                )}
                  
            </div>
            
            
            {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
        {visible.map((iteams) => (
          <div key={iteams.id} className="aspect-[4/3] overflow-hidden rounded-2xl">
            <img
              src={iteams.img}
              alt={iteams.title}
              className="h-full w-full object-cover block transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
      
        </div>
        
        <div className='flex flex-col justify-center items-center w-[10%]'>
            <RightSideNavbar/>
        </div>
      
  </div>
  )
}

export default Portfolio
