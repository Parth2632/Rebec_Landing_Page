import React from "react";
import ServiceCard from "../cards/ServiceCard";
import type { IProps } from "../cards/ServiceCard";

export default function ServiceSection() {
  const services: IProps[] = [
    {
      titleTop: "Elite Team",
      titleBottom: "Work with a blend of experienced developers and briliant students from pretigious institutions like IIT's,BITS & Thapar",
      bg: "bg-white",
      text: "text-black",
      arrow: "dark",
      link: "/",
    },
    {
      titleTop: "Lightning-Fast MVPs",
      titleBottom: "Transform your ideas into working prototypes in record time",
      bg: "bg-black",
      text: "text-white",
      arrow: "light",
      link: "/",
    },
    {
      titleTop: "Ideas to IP's",
      titleBottom: "Convert your innovative concepts into intellectual property",
      bg: "bg-[#B9FF66]",
      text: "text-black",
      arrow: "dark",
      link: "/",
    },
    {
      titleTop: "AI-Driven Customization",
      titleBottom: "Personalized solutions powered by cutting-edge AI technology",
      bg: "bg-white",
      text: "text-black",
      arrow: "dark",
      link: "/",
    },
    {
      titleTop: "Unbeatable Pricing",
      titleBottom: "Premium quality development at competitive market rates",
      bg: "bg-black",
      text: "text-white",
      arrow: "light",
      link: "/",
    },
    {
      titleTop: "Scalable Solutions",
      titleBottom: "Build systems that grow with your business needs",
      bg: "bg-[#B9FF66]",
      text: "text-black",
      arrow: "dark",
      link: "/",
    },
  ];
  return (
    <section id="service-section" className="bg-white py-8 flex flex-col items-center">
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 max-w-3xl mx-auto text-black tracking-tight text-center px-2">
          Turn Your Million-Dollar Idea Into Reality With <span className="text-[#B9FF66]">Rebec</span>
        </p> 
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 w-full">
        {services.map((service, index) => (
          <ServiceCard {...service} key={index} />
        ))}
      </div>
    </section>
  );
}
