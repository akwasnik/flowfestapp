import Features from "@/components/main/Features";
import Testimonials from "@/components/main/Testimonials";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <BackgroundGradientAnimation
        firstColor="221, 74, 255"
        secondColor="221, 74, 255"
        thirdColor="102, 0, 255"
        fourthColor="102, 0, 255"
        fifthColor="102, 0, 255"
      >
        <div className="absolute z-30 inset-0 flex flex-col items-center justify-center text-white text-center pointer-events-none">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            FlowFest — Twoje Wydarzenie. Nasza Pasja.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Zanurz się w świecie niezapomnianych imprez! Organizujemy wydarzenia, które na długo pozostają w pamięci. Dołącz do zabawy z nami!
          </p>
          <div className="flex space-x-4 pointer-events-auto">
              <Link href="/Oferta" className="p-[3px] relative font-bold rounded-lg transition duration-300 ease-in-out">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2  bg-indigo-700 rounded-[6px]  relative group transition duration-200 text-white text-xl hover:bg-transparent">
                  Sprawdź Jak?
                </div>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 z-30 w-screen text-center bg-transparent">
          <div className="text-3xl mx-auto font-normal text-neutral-100 dark:text-purple-500 lg:text-5xl">
            Tworzymy
            <FlipWords className="text-3xl lg:text-5xl" words={['eventy','imprezy','wspomnienia','dobrą zabawę','atmosferę']} duration={500} />
          </div>
      </div>
      </BackgroundGradientAnimation>
      
      <Features/>

      <Testimonials/>
    </>
  );
}