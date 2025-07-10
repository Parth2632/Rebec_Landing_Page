import React from "react";
import MainButton from "../common/MainButton";

function Consultation() {
  const handleBookNow = () => {
    window.open("https://calendly.com/gopal-ag0224/next-launch-mvp-consultation?month=2025-07", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="consultation-section" className="flex items-center justify-center min-h-[350px] bg-white">
      <div className="w-full max-w-2xl flex flex-col items-center justify-center text-center rounded-[35px] shadow-[0_4px_32px_0_rgba(185,255,102,0.35)] p-8 sm:p-12 transition-all duration-300 relative overflow-hidden hover:scale-[1.025] cursor-pointer bg-white text-black">
        <div className="relative z-10 flex flex-col items-center">
          <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 tracking-wider text-black">
            We Build. You Own.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-primary my-3 sm:my-4">
            Book Free MVP Consultation
          </p>
          <p className="my-4 sm:my-6 md:my-[26px] text-gray-700 text-base sm:text-lg font-medium max-w-xl">
            Get started with a no-cost consultation where we understand your vision, brainstorm possibilities, and map out the steps to bring your idea to life.
          </p>
          <ul className="space-y-4 w-full max-w-xs mx-auto mb-8">
            <li className="flex items-center justify-center gap-3 text-lg sm:text-xl font-semibold text-black transition-colors duration-300">
              <span className="inline-block w-3 h-3 bg-primary rounded-full shadow-[0_0_8px_2px_rgba(185,255,102,0.5)] animate-pulse"></span>
              Get an Unmatched Quote
            </li>
            <li className="flex items-center justify-center gap-3 text-lg sm:text-xl font-semibold text-black transition-colors duration-300">
              <span className="inline-block w-3 h-3 bg-primary rounded-full shadow-[0_0_8px_2px_rgba(185,255,102,0.5)] animate-pulse"></span>
              Watch Your Idea Take Shape
            </li>
            <li className="flex items-center justify-center gap-3 text-lg sm:text-xl font-semibold text-black transition-colors duration-300">
              <span className="inline-block w-3 h-3 bg-primary rounded-full shadow-[0_0_8px_2px_rgba(185,255,102,0.5)] animate-pulse"></span>
              Next, Launch with Confidence
            </li>
          </ul>
          <MainButton
            text="Book Now!"
            action={handleBookNow}
            classes="w-full md:w-[231px] text-base sm:text-[18px] font-bold"
          />
        </div>
      </div>
    </section>
  );
}

export default Consultation;
