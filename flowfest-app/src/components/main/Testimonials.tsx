"use client";

import Image from "next/image";


import { useContext, useRef } from "react";
import { useScroll, motion, useTransform } from "motion/react";
import { DataContext } from "@/providers/DataProvider";



export default function Testimonials() {

  const { testimonials } = useContext(DataContext)

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 2.7", "1.33 1"]
  })
  const ScaleProgress = (idx: number) => useTransform(scrollYProgress, [0,1],[0.8-(idx*0.2),1])

  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div ref={ref} style={{
              scale: ScaleProgress(1),
              opacity: ScaleProgress(1)
            }}>
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Opinie naszych imprezowiczów
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div ref={ref} style={{
                scale: ScaleProgress(index),
                opacity: ScaleProgress(index)
              }}
              key={index}
              className="bg-gray-300 p-6 rounded-2xl shadow-md text-center"
            >
              <Image
                src={testimonial.image}
                alt={`Zdjęcie klienta ${testimonial.name}`}
                width={100}
                height={100}
                className="rounded-full mx-auto mb-4"
              />
              <p className="text-gray-700 italic mb-4">&quot;{testimonial.feedback}&quot;</p>
              <h3 className="text-xl font-semibold text-purple-900">{testimonial.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}