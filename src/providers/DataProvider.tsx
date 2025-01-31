"use client";
import testimonialImage1 from "@/assets/images/test1.jpeg";
import testimonialImage2 from "@/assets/images/test2.jpeg";
import testimonialImage3 from "@/assets/images/test3.jpeg";
import { DataContextProps } from "@/types/types";
import { Music, PartyPopper, GraduationCap, Cake } from "lucide-react";
import { createContext } from "react";

const testimonials = [
    {
      name: "Anna Kowalska",
      feedback:
        "FlowFest uczynił naszą studniówkę niezapomnianym przeżyciem! Muzyka, oświetlenie i atmosfera były idealne.",
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
        "Dzięki FlowFest moja osiemnastka stała się imprezą życia! Wszyscy świetnie się bawili.",
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

export const DataContext = createContext< DataContextProps >({testimonials : [{ name: "", feedback : "", image: testimonialImage1}], features: [{title: "",description: ""}]})

export default function DataProvider({children}: {children: React.ReactNode}){

    return(
        <DataContext.Provider value={{ testimonials, features}}>
            {children}
        </DataContext.Provider>
    )

}