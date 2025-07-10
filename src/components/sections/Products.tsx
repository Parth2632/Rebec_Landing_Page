"use client";

import React, { useState, useEffect } from "react";
import WorkingProcessCard from "../cards/WorkingProcessCard";
import { Accordion } from "../ui/accordion";

function Products() {
  // Remove showAll and isMobile logic
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        {/* Product1 card (Deradh.com) */}
        <a
          href="https://deradh.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full block group flex items-stretch justify-center"
        >
          <div className="w-full h-full min-h-[300px] sm:min-h-[400px] grid grid-rows-[96px_40px_1fr] items-start justify-center text-center rounded-[25px] sm:rounded-[35px] md:rounded-[45px] p-4 sm:p-8 md:p-[50px] bg-[#B9FF66] shadow-md border-b-[6px] border-b-black transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group">
            <div className="flex items-center justify-center mb-3">
              <img src="/images/deradh_logo.png" alt="Deradh Logo" className="max-h-[64px] object-contain" />
            </div>
            <div className="flex items-center justify-center mb-2">
              <div className="text-lg sm:text-xl md:text-2xl font-bold rounded-[7px] px-1 text-black">
                Deradh.com
              </div>
            </div>
            <div>
              <div className="text-xs sm:text-sm md:text-base font-medium rounded-[7px] inline-block px-1 text-black mb-4 text-center max-w-xs mx-auto">
                Say goodbye to size confusion and high return rates.<br className="hidden sm:block" />
                <span className="text-primary block mt-1">Revolutionizing Fashion with AI.</span>
              </div>
              <ul className="list-disc pl-5 space-y-2 w-full max-w-xs mx-auto text-left text-xs sm:text-sm mt-2">
                <li className="font-semibold text-black">AI virtual Dress Try-On</li>
                <li className="font-semibold text-black">AI Measurements</li>
                <li className="font-semibold text-black">AI Fashion Recommender</li>
              </ul>
            </div>
          </div>
        </a>
        {/* VM Board card */}
        <a
          href="https://app.vmboard.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full block group flex items-stretch justify-center"
        >
          <div className="w-full h-full min-h-[300px] sm:min-h-[400px] grid grid-rows-[96px_40px_1fr] items-start justify-center text-center rounded-[25px] sm:rounded-[35px] md:rounded-[45px] p-4 sm:p-8 md:p-[50px] bg-white shadow-md border-b-[6px] border-b-black transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group">
            <div className="flex items-center justify-center">
              <img src="/images/vm_logo.png" alt="VM Board Logo" className="max-h-[64px] object-contain" />
            </div>
            <div className="flex items-center justify-center">
              <div className="text-lg sm:text-xl md:text-2xl font-bold rounded-[7px] px-1 text-black">
                VM Board
              </div>
            </div>
            <div>
              <div className="text-xs sm:text-sm md:text-base font-medium rounded-[7px] inline-block px-1 text-black">
                Accelerate Development with Our Cutting-Edge Server Management System with Seamless Web-Based Management
              </div>
            </div>
          </div>
        </a>
        {/* Kompte card - always show */}
        <a
          href="https://kompte.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full block group flex items-stretch justify-center"
        >
          <div className="w-full h-full min-h-[300px] sm:min-h-[400px] grid grid-rows-[96px_40px_1fr] items-start justify-center text-center rounded-[25px] sm:rounded-[35px] md:rounded-[45px] p-4 sm:p-8 md:p-[50px] bg-black shadow-md border-b-[6px] border-b-black transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group">
            <div className="flex items-center justify-center">
              <img src="/images/kompte_logo.png" alt="Kompte Logo" className="max-w-[80px] max-h-[80px] object-contain mx-auto mt-[32px]" />
            </div>
            <div className="flex items-center justify-center">
              <div className="text-lg sm:text-xl md:text-2xl font-bold rounded-[7px] px-1 text-white">
                Kompte.com
              </div>
            </div>
            <div>
              <div className="text-xs sm:text-sm md:text-base font-medium rounded-[7px] inline-block px-1 text-white">
                North India&apos;s Biggest Sporting Events Hosting Company
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Products;

