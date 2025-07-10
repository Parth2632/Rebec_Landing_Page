import React from "react";

function LogoGroupSection() {
  const logos = [
    { src: "/images/deradh_logo.png", alt: "Deradh Logo" },
    { src: "/images/kompte_logo.png", alt: "Kompet Logo", highlight: true },
    { src: "/images/medX_logo.png", alt: "MedX Logo" },
    { src: "/images/vm_logo.png", alt: "VM Logo" },
    { src: "/images/rebec_img.png", alt: "Rebec Logo", highlight: true }
  ];

  return (
    <section className="py-4 sm:py-8 bg-white">
      <div className="w-full flex flex-col items-center mb-3 sm:mb-6">
        <span className="block text-center text-base sm:text-xl md:text-2xl font-semibold text-black tracking-wide mb-3 sm:mb-6 px-2 sm:px-4">
          Helping People Change The World
        </span>
      </div>
      <div className="w-full rounded-xl px-2 py-2 flex flex-col items-center">
        <div className="hidden md:flex justify-center items-center gap-6 lg:gap-12 w-full">
          {logos.map((logo, index) => (
            <div key={index} className={`flex items-center justify-center h-16 lg:h-24 min-w-[80px] lg:min-w-[100px] max-w-[160px] lg:max-w-[200px] mx-1 lg:mx-2 ${logo.highlight ? 'md:h-20 lg:h-28' : ''}`}>
              <img
                src={logo.src}
                alt={logo.alt}
                className={`object-contain w-auto max-h-16 lg:max-h-24${logo.src.includes('vm_logo.png') ? '' : ' filter-black-logo'}`}
                style={{ background: 'transparent' }}
              />
            </div>
          ))}
        </div>
        <div className="flex md:hidden justify-center items-center gap-6 w-full flex-wrap mt-0">
          {logos.map((logo, index) => (
            <div key={index} className={`flex items-center justify-center h-12 sm:h-16 min-w-[56px] sm:min-w-[70px] max-w-[100px] sm:max-w-[140px] mx-0.5 sm:mx-1 ${logo.highlight ? 'h-16 sm:h-20' : ''}`}>
              <img
                src={logo.src}
                alt={logo.alt}
                className={`object-contain w-auto max-h-12 sm:max-h-16${logo.src.includes('vm_logo.png') ? '' : ' filter-black-logo'}`}
                style={{ background: 'transparent' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoGroupSection;
