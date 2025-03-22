"use client";

import { useState } from "react";
import { PhoneCall } from "lucide-react";
import { motion } from "motion/react";

export default function CallButton({ phoneNumber,iconStyles,buttonStyles }: { phoneNumber: string, iconStyles?: string, buttonStyles?: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`${buttonStyles} relative p-[1em]`}>
      <a
        href={`tel:${phoneNumber}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={` z-20 relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500 text-white hover:bg-purple-600 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all duration-300 ${iconStyles} S${
          isHovered ? "animate-[wiggle_0.2s_ease-in-out_infinite]" : "animate-pulse"
        }`}
        onClick={() => {
          setIsHovered(false);
      }}
      >
        <PhoneCall className="text-3xl" />
      </a>
      {isHovered && (
        <motion.div
          className={`absolute top-[30px] bg-purple-500 text-nowrap text-white p-2 rounded-lg pointer-events-none z-50 ${iconStyles}`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: -140 }}
          exit={{ opacity: 0, x: -140 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          {phoneNumber}
        </motion.div>
      )}
    </div>
  );
}