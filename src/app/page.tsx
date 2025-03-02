"use client";

import { FaInstagram, FaGithub, FaPython, FaReact } from "react-icons/fa";
import { SiPostgresql, SiPrisma, SiSwift, SiTypescript, SiTailwindcss, SiRemix, SiRust, SiNextdotjs } from "react-icons/si";
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize dark mode based on user preference or system preference
  useEffect(() => {
    // Check if user has a preference stored
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode !== null) {
      setDarkMode(JSON.parse(savedDarkMode));
    } else {
      // Check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
    }
  }, []);

  // Update document when dark mode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save preference to localStorage
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen p-4 md:p-8 flex items-center justify-center bg-cover bg-center relative pixel-font-alt" 
         style={{ backgroundImage: "url('/bg.png')" }}>
      {/* Semi-transparent overlay with increased opacity for better contrast */}
      <div className="absolute inset-0 bg-white bg-opacity-25 dark:bg-gray-900 dark:bg-opacity-85"></div>
      
      {/* Dark Mode Toggle Button */}
      <button 
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 z-30 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg border-2 border-blue-500 dark:border-blue-400"
        aria-label="Toggle dark mode"
      >
        {darkMode ? 
          <FaSun className="text-yellow-500 text-xl" /> : 
          <FaMoon className="text-blue-700 text-xl" />
        }
      </button>
      
      {/* Profile Header Card - Positioned absolutely to overlap */}
      <div className="absolute rounded-xl top-16 md:top-24 right-4 md:right-12 z-20 w-full max-w-md bg-white dark:bg-gray-800  shadow-xl   overflow-hidden border-4 border-blue-600">
        {/* Browser-like header with dots */}
        <div className="w-full p-2 flex items-center">
          <div className="flex gap-1 ml-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        
        <div className="p-6 bg-slate-800">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 pixel-font">VIGHNESH .S</h2>
              <h3 className="text-xl font-semibold text-gray-300 dark:text-gray-300 pixel-font">FULLSTACK DEV</h3>
              <div className="mt-2 text-lg text-gray-200 dark:text-gray-200">
                <p>📱 +91 987852576</p>
                <p>✉️ vighnxsh.codes@gmail.com</p>
                <p>📍 mumbai, india</p>
              </div>
            </div>
           
          
          </div>
          {/* <div className="mb-8">
                
              
              </div> */}
        </div>
      </div>

      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden border-4 border-blue-700 relative z-10">
        
        {/* Browser-like header with dots */}
        <div className="w-full bg-gradient-to-r from-blue-800 to-blue-600 p-2 flex items-center">
          <div className="flex gap-1 ml-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 text-center">
            <h1 className="text-lg font-bold text-white tracking-widest pixel-font">https://VIGHNESH.ME</h1>
          </div>
          <div className="w-8"></div> {/* Spacer to balance the dots */}
        </div>
        
        <div className="flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="w-full pl-6 pt-4 md:w-2/5 bg-yellow-10 dark:bg-yellow-900/30 p-">
            
            {/* Social Media */}
            <div className="mb-8">
              <div className="flex items-center gap-2">
                <FaXTwitter className="text-gray-700 dark:text-gray-300" />
                <a href="https://twitter.com/vighnxsh" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-500 transition-colors">- @vighnxsh</a>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <FaInstagram className="text-pink-500" />
                <a href="https://instagram.com/vighnxsh" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-pink-500 transition-colors">- @vighnxsh</a>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <FaGithub className="text-gray-700 dark:text-gray-300" />
                <a href="https://github.com/vighnxsh" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-500 transition-colors">- @vighnxsh</a>
              </div>
            </div>
            
            {/* Languages */}
            <div className="mb-8">
              <h2 className="text-blue-700 dark:text-blue-400 underline text-xl font-bold mb-4 pixel-font">LANGUAGES</h2>
              
              <div className="grid grid-cols-5 gap-2">
                <div className="flex items-center justify-center w-10 h-10 text-blue-600 bg-white rounded">
                  <SiTypescript className="text-4xl" />
                </div>
                
                <div className="flex items-center justify-center w-10 h-10 text-blue-600 bg-white rounded">
                  <FaPython className="text-4xl" />
                </div>
                
                <div className="flex items-center justify-center w-10 h-10 bg-white text-orange-500 rounded">
                  <SiSwift className="text-4xl" />
                </div>
                
                <div className="flex items-center justify-center w-10 h-10 bg-white text-orange-600 rounded">
                  <SiRust className="text-4xl" />
                </div>
                
               
                
              </div>
            </div>
            
            {/* Likings */}
         
            
            {/* Skills */}
            <div className="mb-8">
              
              <h2 className="text-blue-700 dark:text-blue-400 underline text-xl font-bold mb-4 pixel-font">SKILLS</h2>
              <div className="grid grid-cols-5 gap-2">
               
              <div className="flex items-center justify-center w-10 h-10 text-blue-500 rounded">
                  <FaReact className="text-5xl" />
                </div>
                <div className="flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded">
                  <SiNextdotjs className="text-3xl" />
                </div>
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-black to-gray-600 text-white rounded">
                  <SiRemix className="text-3xl" />
                </div>  
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded">
                  <SiTailwindcss className="text-3xl" />
                </div>
                
                <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded">
                  <SiPostgresql className="text-3xl" />
                </div>
                
                <div className="flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded">
                  <SiPrisma className="text-3xl" />
                </div>
                
           
                
              
                
              
           
                
                
              </div>
            </div>
             
               {/* Experience */}
               <div className="mb-8 pt-4">
               <p className="text-xl pt-2 text-blue-800 dark:text-gray-300 leading-relaxed">
                  Fullstack developer from Mumbai specializing in TypeScript and modern web technologies. Passionate about blockchain development, particularly Solana dApps. Crypto enthusiast and Solana degen who enjoys exploring the cutting edge of decentralized finance. Also enjoys drawing and creative pursuits when not coding.
                </p>
              </div>
          </div>

          
          
          {/* Right Column */}
          <div className="w-full md:w-3/5 p-6 mt-36 relative bg-yellow-10 dark:bg-yellow-900/20">
            {/* Content with proper spacing for the profile card */}
            <div className="pt-20 md:pt-24">
              {/* About */}
          
              
           
              
              {/* Portfolio */}
              <div className="flex flex-col pt-32 items-center">
                <h3 className="text-lg font-bold mb-4 text-blue-700 pixel-font">PORTFOLIO HERE</h3>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="p-2 border-2 border-blue-500 rounded-lg">
                    <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <span className="text-xs">QR CODE</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="px-4 py-2 bg-white dark:bg-gray-700 border-2 border-blue-500 rounded-full text-center text-blue-700 dark:text-blue-400 font-mono text-sm">
                      WEB DEVELOPMENT
                    </div>
                    <div className="px-4 py-2 bg-white dark:bg-gray-700 border-2 border-blue-500 rounded-full text-center text-blue-700 dark:text-blue-400 font-mono text-sm">
                      SOLANA DAPPS
                    </div>
                    <div className="px-4 py-2 bg-white dark:bg-gray-700 border-2 border-blue-500 rounded-full text-center text-blue-700 dark:text-blue-400 font-mono text-sm">
                      BLOCKCHAIN
                    </div>
                    <div className="px-4 py-2 bg-white dark:bg-gray-700 border-2 border-blue-500 rounded-full text-center text-blue-700 dark:text-blue-400 font-mono text-sm">
                      TYPESCRIPT
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute bottom-2 right-2">
                <span className="text-yellow-500 text-2xl">🔍</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
