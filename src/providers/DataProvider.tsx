"use client";
import testimonialImage1 from "@/assets/images/test1.jpeg";
import testimonialImage2 from "@/assets/images/test2.jpeg";
import testimonialImage3 from "@/assets/images/test3.jpeg";
import { DataContextProps } from "@/types/types";
import { Music, PartyPopper, GraduationCap, Cake } from "lucide-react";
import { createContext } from "react";
import { FaHandshake, FaMusic, FaCalendarCheck, FaStar } from "react-icons/fa";

const testimonials = [
    {
      name: "Anna Kowalska",
      feedback:
        "FlowFest uczynił sylwester niezapomnianym przeżyciem! Muzyka, oświetlenie i atmosfera były idealne.",
      image: testimonialImage1,
    },
    {
      name: "Piotr Nowak",
      feedback:
        "Halloween z FlowFest to najlepsze wydarzenie, na jakim byłem! Cała organizacja była perfekcyjna.",
      image: testimonialImage2,
    },
    {
      name: "Magda Wiśniewska",
      feedback:
        "Dzięki FlowFest połowinki mojej szkoły stały się imprezą życia! Wszyscy świetnie się bawili.",
      image: testimonialImage3,
    },
  ];

const features = [
    {
      title: "Niezapomniana Rozrywka",
      description:
        "Od najlepszych DJ-ów po spektakularne efekty wizualne — tworzymy eventy, które rozpalą każdą imprezę.",
      icon: <Music className="text-purple-500 w-12 h-12 mb-4" />,
    },
    {
      title: "Studniówki & Połowinki",
      description:
        "Twój pierwszy wielki bal? Z FlowFest wasze studniówki i połowinki będą wyjątkowe i pełne wrażeń.",
      icon: <GraduationCap className="text-purple-500 w-12 h-12 mb-4" />,
    },
    {
      title: "Figliki & Osiemnastki",
      description:
        "Zabawa bez granic! Organizujemy niezapomniane figliki i osiemnastki w najlepszym stylu.",
      icon: <PartyPopper className="text-purple-500 w-12 h-12 mb-4" />,
    },
    {
      title: "Kompleksowa Organizacja",
      description:
        "Zajmujemy się wszystkim od A do Z — scenografia, muzyka, prowadzenie imprez i koordynacja wydarzenia.",
      icon: <Cake className="text-purple-500 w-12 h-12 mb-4" />,
    },
  ];

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

export const DataContext = createContext< DataContextProps >({testimonials : [{ name: "", feedback : "", image: testimonialImage1}], features: [{title: "",description: ""}], steps: [{title: "",description: ""}]})

export default function DataProvider({children}: {children: React.ReactNode}){

    return(
        <DataContext.Provider value={{ testimonials, features, steps}}>
            {children}
        </DataContext.Provider>
    )

}