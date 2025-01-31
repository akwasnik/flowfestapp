"use client";

import { useContext, useRef } from "react";
import { useScroll, motion, useTransform } from "motion/react";
import { DataContext } from "@/providers/DataProvider";
import { DataContextProps } from "@/types/types";



export default function Features() {

  const { features } = useContext<DataContextProps>(DataContext)

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 3", "1.33 1"]
  })
  const ScaleProgress = (idx: number) => useTransform(scrollYProgress, [0,1],[0.8-(idx*0.3),1])

  return (
    <section className="bg-black py-20 ">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div ref={ref} style={{
              scale: ScaleProgress(1),
              opacity: ScaleProgress(1)
            }}>
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Dlaczego FlowFest?
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div ref={ref} style={{
              scale: ScaleProgress(index),
              opacity: ScaleProgress(index)
            }}
              key={index}
              className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-2xl shadow-md"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}