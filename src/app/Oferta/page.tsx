"use client";

import { motion } from "framer-motion";
import { DataContext } from "@/providers/DataProvider";
import { DataContextProps } from "@/types/types";
import { useContext } from "react";

import CallButton from "@/components/main/CallButton";
import EmailButton from "@/components/main/EmailButton";


export default function Oferta() {
  const { steps } = useContext<DataContextProps>(DataContext)
  return (
    <div className="flex flex-col items-center mt-[7em] mb-[5em] px-6 text-white">
      <motion.h1
        className="text-4xl font-bold text-purple-400 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Jak wygląda współpraca z FlowFest?
      </motion.h1>
      <div className="flex items-center justify-center">
        <CallButton phoneNumber="+48509474346"></CallButton>
        <EmailButton email="flowfest.events@gmail.com"/>
      </div>
      <div className="w-full max-w-4xl space-y-16">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center gap-6 p-6 bg-gray-900 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="flex-shrink-0">{step.icon}</div>
            <div>
              <h2 className="text-2xl font-semibold text-purple-300">{step.title}</h2>
              <p className="mt-2 text-gray-300">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
