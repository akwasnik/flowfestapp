"use client";

import { motion } from "motion/react"
import { TextGenerateEffect } from "../ui/text-generate-effect"
import { useEffect,useState } from "react";

export default function OnasText(){

    const [counter, setCounter] = useState(0);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect( () =>{
        if(isClient){
            console.log(counter)
            const timer = setTimeout(() => {
                setCounter(prev => prev+1)
            }, 10000);

            if (counter == 2) {
            clearTimeout(timer)
            }
        }
    } ,[counter,isClient]);

    return (
        <motion.div className="w-[90%] md:w-[60%] lg:w-[40%] bg-slate-800 text-white p-8 rounded-2xl shadow-lg border border-purple-500 text-center"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        transition={{ duration: 2, ease: "easeOut"}}
      >
        <TextGenerateEffect
          words="Jesteśmy grupą młodych ludzi, którym brakowało świeżych, atrakcyjnych imprez w okolicy – dlatego postanowiliśmy stworzyć 
          FlowFest i zapewnić Wam świetne okazje do wybawienia się przy dobrej muzyce. FlowFest to cykle eventów w województwie pomorskim, 
          które gromadzą fanów dobrej zabawy w każdym wieku. To wszystko w rytmach serwowanych przez najlepszych DJ-ów, dzięki którym muzyka nigdy się nie nudzi."
        />

        { (counter >= 1) && (
            <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'fit-content' }}
            transition={{ duration: 2, ease: "easeOut"}}
            >
                <TextGenerateEffect
                    words="Podczas dotychczasowych edycji zbudowaliśmy reputację miejsca,
                    w którym każda impreza zostaje w pamięci na długo. Dbamy nie tylko o dobrą atmosferę, ale też o komfort wszystkich gości: 
                    w FlowFest zawsze czeka na Was otwarty bar z napojami oraz pysznym jedzeniem. Priorytetem jest dla nas także Wasze bezpieczeństwo 
                    – nasz zespół profesjonalnej ochrony czuwa nad spokojem i dobrą atmosferą na każdym wydarzeniu."
                    className="border-t-4 pt-12 px-6 mt-12 border-purple-500"
                />
            </motion.div>
        )}

        { (counter >= 2) && (
            <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 2, ease: "easeOut" }}
            >
                <TextGenerateEffect
                    words="Chcemy, aby każdy mógł poczuć niepowtarzalny klimat Flow. 
                    Niezależnie, czy planujesz spędzić wieczór ze znajomymi, 
                    czy świętujesz ważny życiowy moment – u nas znajdziesz to, czego szukasz. 
                    Dołącz do naszej społeczności i przeżyj najlepszą imprezę swojego życia. We are Flowfest!"
                    className="border-t-4 pt-12 px-6 mt-12 border-purple-500"
                />
            </motion.div>
        )}
        
      </motion.div>
    )
}