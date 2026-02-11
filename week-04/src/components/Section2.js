import React from 'react'
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaYoutube, FaTools, FaBriefcaseMedical, FaCogs } from "react-icons/fa";

export default function Section2() {
  return (
    <div className=" flex flex-col items-center text-center  text-white mt-4">
              <h1 className=" text-6xl font-bold">John Wick</h1>
              <h2 className=" text-3xl font-medium">Actor and Artist</h2>
    
              <p className="max-w-xl mt-4 ">
                John Wick is a 2014 American neo-noir action thriller film directed by Chad
                Stahelski in his directorial debut and a screenplay by Derek Kolstad.
              </p>
    
              {/* Social Icons */}
              <div className="flex gap-20 text-3xl mt-4">
                <CiFacebook/>
                <FaYoutube />
                <CiLinkedin />
              </div>
    
              {/* Image */}
              <div className="mt-10 ">
                <div className="h-[180px] w-[180px] rounded-full overflow-hidden ">
                  <img
                    src="/img.jpg" 
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
  )
}