import {
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

import React from "react";
import SocialMediaSection from "./SocialMedia";

const contactInfo = [
  {
    icon: "",
    label: "Email",
    value: "info@ted-nomex.com",
  },
  {
    icon: <MapPinIcon />,
    label: "Location",
    value: "GJ-275-7823",
  },
  {
    icon: <PhoneIcon />,
    label: "Call",
    value: "0595808051",
  },
];

export default function Header() {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="text-gray-400 h-15 flex items-center justify-between">
          <ul className="flex  gap-2 md:space-x-10 md:border-l-[1px] md:border-r-[1px]   md:px-4">
            {contactInfo.map((info) => (
              <li
                className="flex    items-center justify-center space-x-0.5 md:space-x-1.5 text-sm"
                key={info.label}

              >
                <span className="material-symbols-outlined text-amber-400 !text-sm">mail</span>
                <a href={info.label}>{info.label}</a>
              </li>
            ))}
          </ul>

          <div>
            <SocialMediaSection />
          </div>
        </div>
      </div>
    </nav>
  );
}
