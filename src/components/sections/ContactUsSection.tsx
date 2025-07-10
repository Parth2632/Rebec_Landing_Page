"use client";

import React from "react";

const projects = [
  {
    date: "June 2024",
    status: "Done",
    title: "AI-Powered Try-On & Measurements",
    desc: "Revolutionized the shopping experience with Deradh Try-On, enabling users to visualize outfits on themselves in real-time while ensuring precise measurements for the perfect fit."
  },
  {
    date: "January 2024",
    status: "In progress",
    title: "MedX: AI in Healthcare",
    desc: "Developed MedX's AI-driven summary and booking system to streamline medical history management and provide seamless appointment scheduling with virtual queues."
  },
  {
    date: "November 2024",
    status: "In progress",
    title: "Web-Based VM Board Management",
    desc: "Built a robust, web-based server management solution for virtual machines, empowering users with a simple, intuitive dashboard for resource optimization and monitoring."
  },
  {
    date: "January 2025",
    status: "Done",
    title: "AI Coach for Athletes",
    desc: "Launched DRX's AI-powered coach that offers in-depth performance analytics and virtual match reviews to help athletes refine their skills effectively."
  }
];

function ContactUsSection() {
  return (
    <section id="contactus-section" className="flex flex-col items-center justify-center w-full py-8 bg-white">
       <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wider text-black mb-6 text-center">
         Ready to get started!
       </h2>
       <h3 className="text-lg sm:text-xl font-bold text-black mb-6 text-center">
         What We&apos;re Working On
       </h3>
       <div className="w-full max-w-4xl text-center mb-6">
         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-wider text-black mb-6">
         </h2>
       </div>
       <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
         {projects.map((proj, idx) => (
           <div
             key={idx}
             className={`flex flex-col h-full min-h-[260px] rounded-[28px] border-2 border-[#B9FF66] shadow-[0_4px_32px_0_rgba(185,255,102,0.35)] p-6 transition-all duration-300 hover:scale-[1.035] cursor-pointer group 
               ${idx % 3 === 0 ? 'bg-white text-black' : idx % 3 === 1 ? 'bg-black text-white' : 'bg-[#B9FF66] text-black'}`}
           >
             <div className="flex items-center justify-between mb-2">
               <span className={`text-sm font-semibold ${idx % 3 === 1 ? 'text-[#B9FF66]' : 'text-black'}`}>
                 {proj.date}
               </span>
               {proj.status === 'In progress' ? (
                 <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-900 font-bold text-xs shadow-md animate-pulse-slow relative overflow-hidden">
                   <span className="inline-block w-2 h-2 bg-yellow-300 rounded-full animate-pulse-fast shadow-yellow-200 shadow-md"></span>
                   <span className="relative z-10">In progress</span>
                 </span>
               ) : (
                 <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-900 font-bold text-xs shadow-md animate-fade-in relative overflow-hidden">
                   <svg className="w-4 h-4 text-green-900" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                   <span className="relative z-10">Done</span>
                 </span>
               )}
             </div>
             <h4 className={`text-lg sm:text-xl font-bold mb-2 ${idx % 3 === 1 ? 'text-white' : 'text-black'}`}>
               {proj.title}
             </h4>
             <p className={`text-sm sm:text-base font-medium ${idx % 3 === 1 ? 'text-white/80' : 'text-black/80'}`}>
               {proj.desc}
             </p>
           </div>
         ))}
       </div>
        <a
         href="https://calendly.com/gopal-ag0224/next-launch-mvp-consultation?month=2025-07"
         target="_blank"
         rel="noopener noreferrer"
         className="inline-block px-8 py-4 rounded-lg font-bold text-lg mt-6 bg-[#B9FF66] text-black border-[#B9FF66] border-2 hover:bg-[#18181B] hover:text-white hover:border-[#18181B] hover:shadow-md transition-all duration-300"
       >
         IDEAS DON&apos;T WAIT, NEITHER SHOULD YOU
       </a>
     </section>
  );
}

export default ContactUsSection;
