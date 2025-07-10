import React from "react";
import { Separator } from "../ui/separator";

function FooterSection() {
  const socialLinks = [
    { name: "Discord", url: "/", icon: "/images/discord.png" },
    { name: "X", url: "/", icon: "/images/social-media.png" },
    { name: "Instagram", url: "/", icon: "/images/instagram.png" },
    { name: "Facebook", url: "/", icon: "/images/facebook.png" },
    { name: "Telegram", url: "/", icon: "/images/telegram.png" }
  ];

  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="flex flex-col items-center justify-center w-full px-4 sm:px-8 py-6 sm:py-8 gap-4">
        {/* Centered Social Icons in a row */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-2">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 transition-all duration-200"
              title={social.name}
            >
              <img
                src={social.icon}
                alt={social.name}
                className="w-5 h-5 sm:w-6 sm:h-6 filter brightness-0"
              />
            </a>
          ))}
        </div>
        {/* Centered Copyright */}
        <p className="text-gray-500 text-xs sm:text-sm text-center mt-2">
          © {new Date().getFullYear()} Rebec Technologies Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default FooterSection;
