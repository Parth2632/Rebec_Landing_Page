"use client";

import React, { useState, useEffect } from "react";
import MainButton from "../common/MainButton";

function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const textOptions = [
    "Tech Driven Success",
    "Bringing ideas to life",
    "Building The Future",
    "Empowering Innovation",
    "Tech-Driven Governance"
  ];

  const currentText = textOptions[currentTextIndex];
  const typingSpeed = isDeleting ? 50 : 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentText) {
      // Pause at the end of typing
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && displayText === "") {
      // Move to next text after deleting
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % textOptions.length);
    } else {
      // Continue typing or deleting
      timeout = setTimeout(() => {
        if (isDeleting) {
          setDisplayText(currentText.substring(0, displayText.length - 1));
        } else {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentText, typingSpeed, deletingSpeed, pauseTime, textOptions.length]);

  const handleBookNow = () => {
    window.open("https://calendly.com/gopal-ag0224/next-launch-mvp-consultation?month=2025-07", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="flex flex-col items-center justify-center w-full bg-white text-black py-8 pt-20 sm:pt-24">
      <div className="max-w-4xl w-full">
        <p className="text-2xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6 text-center">
          Rebec Technologies
        </p>
        <p className="text-xl sm:text-3xl md:text-4xl font-semibold text-black min-h-[1.2em] mb-6 text-center">
            {displayText}
          <span className="animate-pulse text-black">|</span>
        </p>
        <div className="mt-6 flex justify-center">
          <MainButton
            text="BUILD.SCALE.WIN"
            action={handleBookNow}
            classes="text-lg sm:text-xl w-full sm:w-auto font-bold"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
