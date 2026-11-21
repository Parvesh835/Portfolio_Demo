import React from "react";
import {
  Home,
  UserRound,
  BriefcaseBusiness,
  Monitor,
  Megaphone,
  Send,
} from "lucide-react";
import myImg from "../assets/myImg.png"
import { Link } from "react-router-dom";

const Home1 = () => {
  const navigation = [
    { icon: Home, name: "Home", path: "/" },
    { icon: UserRound, name: "About", path: "/about" },
    { icon: BriefcaseBusiness, name: "Portfolio", path: "/portfolio" },
    { icon: Monitor, name: "Services", path: "/services" },
    { icon: Megaphone, name: "Contact", path: "/contact" },
    { icon: Send, name: "Message", path: "/message" },
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center overflow-hidden relative">

      {/* Left Yellow Bar */}
      <div className="absolute left-0 top-[27%] h-[46%] w-12 bg-[#F9B52B]"></div>

      {/* Right Yellow Bar */}
      <div className="absolute right-0 top-[27%] h-[46%] w-12 bg-[#F9B52B]"></div>

      <div className="w-full max-w-[1450px] min-h-screen flex items-center px-10 md:px-16 lg:px-20">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 z-10 py-16">

          <div className="max-w-[500px] mx-auto lg:mx-0">

            {/* Heading */}
            <h3 className="text-[#F9B52B] text-3xl md:text-5xl font-extrabold mb-3">
              HI THERE!
            </h3>

            <div className="w-36 h-2 bg-[#F9B52B] mb-8"></div>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold mb-5 whitespace-nowrap">
              <span className="text-black [-webkit-text-stroke:1px_black]">
                I'M
              </span>{" "}
              <span className="text-transparent [-webkit-text-stroke:2px_#F9B52B]">
                SARITA
              </span>
            </h1>

            {/* Designation */}
            <div className="inline-block bg-[#F9B52B] px-3 py-1 mb-3">
              <h3 className="text-black font-bold text-sm md:text-base tracking-wide">
                GRAPHIC DESIGNER / PHOTOGRAPHER
              </h3>
            </div>

            <br />

            <div className="inline-block bg-black px-3 py-1 mb-10">
              <h3 className="text-[#F9B52B] font-bold text-sm md:text-base tracking-wide">
                READY TO HANDLE YOUR NEW PROJECT
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-10 max-w-[470px]">
              Veratio choris eserum fuga. Pa cusaper roviti nonsequos
              accate cus venibearum intur? Quis et eos arumque
              repta pene nonet apelitore commin volore reptius
              undebitas si cus estem harasped quossure vitemque
              isquam facest quia volupta cum sus.
            </p>

            {/* Button */}
            <button className="bg-black text-white px-8 py-4 rounded-full font-bold tracking-wider hover:bg-[#F9B52B] hover:text-black transition duration-300">
              MORE ABOUT ME
            </button>

          </div>
        </div>

        {/* RIGHT PROFILE SECTION */}
        <div className="hidden lg:flex w-1/2 items-center justify-center relative h-[750px]">

          {/* Yellow Orbit */}
          <div className="absolute w-[370px] xl:w-[440px] h-[650px] xl:h-[700px] rounded-full border-[3px] border-[#F9B52B] border-l-transparent rotate-[-5deg]">

            {/* Top Dot */}
            <div className="absolute top-[-5px] left-[3%] w-4 h-4 bg-[#F9B52B] rounded-full"></div>

            {/* Bottom Dot */}
            <div className="absolute bottom-[-5px] left-[3%] w-4 h-4 bg-[#F9B52B] rounded-full"></div>

          </div>

          {/* Profile Image */}
          <div className="relative z-10 w-[470px] h-[470px] xl:w-[590px] xl:h-[590px] rounded-full overflow-hidden">
            <img
              src={myImg}
              alt="Profile"
              className=" h-130  object-cover"
            />
          </div>

          {/* Navigation Icons */}
          <div className="absolute right-[2%] xl:right-[0%] top-1/2 -translate-y-1/2 z-20 flex flex-col gap-6">

            {navigation.map((item, index) => {
              const Icon = item.icon;

              return (
                <button
                  key={index}
                  title={item.name}
                  className="w-12 h-12 xl:w-14 xl:h-14 bg-black rounded-full flex items-center justify-center text-[#F9B52B] hover:bg-[#F9B52B] hover:text-black transition duration-300 shadow-md"
                >
                  <Link to={item.path}><Icon size={23} strokeWidth={2.5} /></Link>
                </button>
              );
            })}

          </div>

        </div>

      </div>
    </div>
  );
};

export default Home1;