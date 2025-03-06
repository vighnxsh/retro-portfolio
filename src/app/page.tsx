"use client";

import {  FaGithub, FaReact } from "react-icons/fa";
import { SiPostgresql, SiPrisma, SiSwift, SiTypescript, SiTailwindcss, SiRemix, SiRust, SiNextdotjs } from "react-icons/si";
import { useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";
import Image from 'next/image';
export default function Home() {
  // Remove dark mode state and related effects
  
  useEffect(() => {
    // Remove dark mode class if it exists
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div className="min-h-screen p-4 md:p-8 flex items-center justify-center bg-cover bg-center relative pixel-font-alt" 
         style={{ backgroundImage: "url('/bg.png')" }}>
      {/* Semi-transparent overlay with decreased opacity for better contrast */}
      <div className="absolute inset-0 bg-white bg-opacity-20"></div>
      
      {/* Profile Header Card - Only visible on desktop */}
      <div className="hidden md:block absolute rounded-xl top-16 lg:top-24 right-8 lg:right-12 z-20 w-auto max-w-md bg-white shadow-xl overflow-hidden border-4 border-blue-600">
        {/* Browser-like header with dots */}
        <div className="w-full p-2 flex items-center">
          <div className="flex gap-1 ml-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className="bg-slate-800">
          <div className="p-6 ml-32">
            <div className="flex flex-row items-center">
              <div className="flex-1 text-left">
                <h2 className="text-2xl font-bold text-blue-600 pixel-font">VIGHNESH .S</h2>
                <h3 className="text-xl font-semibold text-gray-300 pixel-font">FULLSTACK DEV</h3>
                <div className="mt-2 text-lg text-gray-200">
                  <p>📱 +91 987852576</p>
                  <p>✉️ vighnxsh.codes@gmail.com</p>
                  <p>📍 mumbai, india</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden border-4 border-blue-700 relative z-10">
        
        {/* Browser-like header with dots */}
        <div className="w-full bg-gradient-to-r from-blue-800 to-blue-600 p-2 flex items-center">
          <div className="flex gap-1 ml-2">
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 text-center">
            <h1 className="text-sm md:text-lg font-bold text-white tracking-widest pixel-font truncate">https://VIGHNESH.ME</h1>
          </div>
          <div className="w-8 hidden md:block"></div> {/* Spacer to balance the dots */}
        </div>
        
        <div className="flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="w-full pl-3 pr-3 pt-4 md:pl-6 md:pr-0 md:w-2/5">
            
            {/* Profile info for mobile only */}
            <div className="md:hidden bg-slate-800 p-3 mb-4 rounded-lg">
              <div className="flex flex-col items-center text-center">
                <h2 className="text-lg font-bold text-blue-600 pixel-font">VIGHNESH .S</h2>
                <h3 className="text-base font-semibold text-gray-300 pixel-font">FULLSTACK DEV</h3>
                <div className="mt-1 text-xs text-gray-200">
                  <p>📱 +91 987852576</p>
                  <p>✉️ vighnxsh.codes@gmail.com</p>
                  <p>📍 mumbai, india</p>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mb-4 md:mb-8">
              <div className="flex items-center gap-2">
                <FaXTwitter className="text-gray-700 text-xs md:text-base" />
                <a href="https://twitter.com/vighnxsh" target="_blank" rel="noopener noreferrer" className="text-sm md:text-xl hover:text-blue-500 transition-colors">- @vighnxsh</a>
              </div>
{/*               <div className="flex items-center gap-2 mb-1 md:mb-2">
                <FaInstagram className="text-pink-500 text-xs md:text-base" />
                <a href="https://instagram.com/vighnxsh" target="_blank" rel="noopener noreferrer" className="text-sm md:text-xl hover:text-pink-500 transition-colors">- @vighnxsh</a>
              </div> */}
              <div className="flex items-center gap-2 mb-1 md:mb-2">
                <FaGithub className="text-gray-700 text-xs md:text-base" />
                <a href="https://github.com/vighnxsh" target="_blank" rel="noopener noreferrer" className="text-sm md:text-xl hover:text-gray-500 transition-colors">- @vighnxsh</a>
              </div>
            </div>
            
            {/* Languages */}
            <div className="mb-4 md:mb-8">
              <h2 className="text-blue-700 underline text-base md:text-xl font-bold mb-2 md:mb-4 pixel-font">LANGUAGES</h2>
              
              <div className="grid grid-cols-5 gap-1 md:gap-2">
                <div className="flex items-center justify-center w-6 h-6 md:w-10 md:h-10 text-blue-600 bg-white rounded">
                  <SiTypescript className="text-xl md:text-4xl" />
                </div>
                
                <div className="flex items-center justify-center w-6 h-6 md:w-10 md:h-10 text-blue-600 bg-white rounded">
                  <Image src="/python.png" alt="Python" width={40} height={40} className="w-6 h-6 md:w-10 md:h-10" />
                </div>
                
                <div className="flex items-center justify-center w-6 h-6 md:w-10 md:h-10 bg-white text-orange-500 rounded">
                  <SiSwift className="text-xl md:text-4xl" />
                </div>
                
                <div className="flex items-center justify-center w-6 h-6 md:w-10 md:h-10 bg-white text-orange-600 rounded">
                  <SiRust className="text-xl md:text-4xl" />
                </div>
              </div>
            </div>
            
            {/* Skills */}
            <div className="mb-4 md:mb-8">
              <h2 className="text-blue-700 underline text-base md:text-xl font-bold mb-2 md:mb-4 pixel-font">SKILLS</h2>
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-1 md:gap-2">
                <div className="flex items-center justify-center w-6 h-6 md:w-10 md:h-10 text-blue-500 rounded">
                  <FaReact className="text-2xl md:text-5xl" />
                </div>
                <div className="flex items-center justify-center w-6 h-6 md:w-10 md:h-10 bg-gray-800 text-white rounded">
                  <SiNextdotjs className="text-xl md:text-3xl" />
                </div>
                <div className="flex items-center justify-center w-6 h-6 md:w-10 md:h-10 bg-gradient-to-r from-black to-gray-600 text-white rounded">
                  <SiRemix className="text-xl md:text-3xl" />
                </div>  
                <div className="flex items-center justify-center w-6 h-6 md:w-10 md:h-10 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded">
                  <SiTailwindcss className="text-xl md:text-3xl" />
                </div>
                
                <div className="flex items-center justify-center w-6 h-6 md:w-10 md:h-10 bg-blue-600 text-white rounded">
                  <SiPostgresql className="text-xl md:text-3xl" />
                </div>
                
                <div className="flex items-center justify-center w-6 h-6 md:w-10 md:h-10 bg-gray-800 text-white rounded">
                  <SiPrisma className="text-xl md:text-3xl" />
                </div>
              </div>
            </div>
             
            {/* Experience */}
            <div className="mb-4 md:mb-8 pt-1 md:pt-4">
              <p className="text-xs sm:text-sm md:text-xl bg-black pt-1 md:pt-2 text-green-500 pr-4 md:pr-12 text-semibold leading-relaxed">
               memeber <span className="text-purple-500">@superteamIN</span> fullstack AI dev also builds solana dapps for fun (def not for money) i love solana like fr 
               i also draw sometimes. i mostly make apps in typescript and nextjs. rn learning ai and swift.
              </p>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="w-full md:w-3/5 p-3 md:p-6 md:mt-36 relative">
            {/* Content with proper spacing for the profile card */}
            <div className="md:pt-20 lg:pt-24">
              {/* Portfolio */}
              <div className="flex flex-col pt-2 md:pt-32 items-center">
                <h3 className="text-sm md:text-lg font-bold mb-2 md:mb-4 text-blue-700 pixel-font">My Projects</h3>
                <div className="flex flex-col md:flex-row gap-4">
                  {/* First Project */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <a href="https://apecrate.fun" target="_blank" rel="noopener noreferrer" className="px-2 py-1 md:px-4 md:py-2 bg-slate-800 border-2 border-blue-500 rounded-full text-center text-green-500 font-mono text-xs md:text-sm hover:bg-blue-50 transition-colors">
                        apecrate.fun 
                      </a>
                      <a href="https://github.com/vighnxsh/apecrate" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                        <FaGithub className="text-lg md:text-xl" />
                      </a>
                    </div>
                    <span className="text-xs md:text-sm text-gray-600">(previously SICKonSolana)</span>
                    <div>
                      <a href="https://twitter.com/superteam" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs md:text-sm text-gray-700">
                        got a grant from @superteam <FaXTwitter className="inline-block" />
                      </a>
                    </div>
                  </div>

                  {/* Separator */}
                  <div className="hidden md:block w-px bg-gray-300 mx-4"></div>

                  {/* Second Project */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <a href="https://forumflux.vercel.app" target="_blank" rel="noopener noreferrer" className="px-2 py-1 md:px-4 md:py-2 bg-white border-2 border-blue-500 rounded-full text-center text-blue-700 font-mono text-xs md:text-sm hover:bg-blue-50 transition-colors">
                        ForumFlux - Forum App
                      </a>
                      <a href="https://github.com/SICK-Solana" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                        <FaGithub className="text-lg md:text-xl" />
                      </a>
                    </div>
                    <span className="text-md md:text-sm text-gray-600"><u>used nextjs, tailwindcss, nextauth and shadcn/ui</u></span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute bottom-2 right-2">
                <span className="text-yellow-500 text-lg md:text-2xl">🔍</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
