"use client";

import { motion } from "framer-motion";
import { FaHandshake, FaMusic, FaCalendarCheck, FaStar } from "react-icons/fa";

const steps = [
  {
    title: "Pierwszy kontakt i ustalenie potrzeb",
    description:
      "Każde wielkie wydarzenie zaczyna się od rozmowy. Skontaktuj się z nami, a wspólnie omówimy Twoje oczekiwania, potrzeby oraz wizję imprezy. Dostosujemy naszą ofertę tak, aby idealnie odpowiadała Twoim wymaganiom.",
    icon: <FaHandshake className="text-purple-400 text-5xl" />, 
  },
  {
    title: "Organizacja i współpraca",
    description:
      "Po określeniu szczegółów, rozpoczynamy działanie. Kontaktujemy się z najlepszymi DJ-ami, właścicielami sali oraz dostawcami usług, aby stworzyć wydarzenie na najwyższym poziomie. Każdy aspekt imprezy jest dopracowany w najmniejszym detalu.",
    icon: <FaMusic className="text-purple-400 text-5xl" />, 
  },
  {
    title: "Ustalanie terminu i przygotowania",
    description:
      "Zarezerwujemy dogodny termin oraz rozpoczniemy przygotowania. Zadbamy o logistykę, scenografię i wszelkie elementy niezbędne do realizacji Twojej wymarzonej imprezy.",
    icon: <FaCalendarCheck className="text-purple-400 text-5xl" />, 
  },
  {
    title: "Realizacja wydarzenia i obsługa",
    description:
      "W dniu imprezy dbamy o każdy szczegół, zapewniając niesamowitą atmosferę oraz profesjonalną obsługę. Pilnujemy, aby każdy uczestnik miał niezapomniane doświadczenia i świetne wspomnienia.",
    icon: <FaStar className="text-purple-400 text-5xl" />, 
  },
];

export default function Oferta() {
  return (
    <div className="flex flex-col items-center mt-[6em] px-6 text-white">
      <motion.h1
        className="text-4xl font-bold text-purple-400 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Jak wygląda współpraca z FlowFest?
      </motion.h1>
      
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
