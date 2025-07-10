import React from "react";
import TeamCard from "../cards/TeamCard";
import MainButton from "../common/MainButton";

const teams = [
  {
    name: "Gopal Agarwal",
    position: "CEO & AI Architect",
    image: "/images/gopal.png",
    linkedin: "https://www.linkedin.com/in/gopal-ag/",
    summary: "Tech enthusiast with a knack for transforming ideas into impactful solutions.",
    achievements: [
      "Founder of Rebec Technologies Pvt. Ltd.",
      "Raised Funding From Gov. of India (₹700K Grant)",
      "Samsung Prism Intern",
      "Winner of 7+ Hackathons, Including SIH",
      "Expert in AI, ML, CyberSec"
    ]
  },
  {
    name: "Abhinandan Wadhwa",
    position: "CTO & Innovation Lead",
    image: "/images/abhinandan.png",
    linkedin: "https://www.linkedin.com/in/abhinandan-wadhwa/",
    summary: "Backend and DevOps specialist, with a proven track record in military and tech startups.",
    achievements: [
      "Backend and DevOps Expert",
      "Ex-Full Stack Intern @Findr ($1.82M Valuation)",
      "Developed solutions for the Indian Military",
      "Backend Dev at Rivet Technology",
      "Skilled in Backend, App Dev, Dev Ops"
    ]
  }
];

function TeamSection() {
  return (
    <section id="team-section" className="flex flex-col items-center justify-center w-full bg-white">
      <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
        <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium max-w-2xl">
          Let&apos;s Build Your Next Big Idea<br />
          <span className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-black block mt-2">
            Dreamers in Code
          </span>
        </p>
      </div>
      <div className="w-full mx-auto px-2 sm:px-8 md:px-16 lg:px-24 flex items-center justify-center">
        <div className="w-full flex flex-col rounded-[24px] sm:rounded-[35px] p-4 sm:p-8 md:p-12 transition-all duration-300">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 md:gap-[40px] items-stretch">
            {teams.map((team, index) => (
              <TeamCard
                {...team}
                key={index}
                glassy={false}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 sm:mt-10 md:mt-[40px] flex justify-center">
        <a
          href="https://calendly.com/gopal-ag0224/next-launch-mvp-consultation?month=2025-07"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 rounded-lg font-bold text-lg bg-[#B9FF66] text-black border-[#B9FF66] border-2 hover:bg-[#18181B] hover:text-white hover:border-[#18181B] hover:shadow-md transition-all duration-300"
        >
          Book Your Consultation Now
        </a>
      </div>
    </section>
  );
}

export default TeamSection;
