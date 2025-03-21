"use client";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok, FaCopyright } from "react-icons/fa";
import CallButton from "./CallButton";
import EmailButton from "./EmailButton";
import useWindowSize from "@/hooks/useWindowSize";

export default function Footer() {
  const [width] = useWindowSize();
  return (
    <footer className="bg-black z-50 text-white border-t border-purple-600 transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row items-center justify-between">

        <div className="flex flex-col items-center text-center mb-8 md:mb-0">

          <h2 className="text-lg font-bold">Kontakt</h2>
        
          <div className="grid grid-cols-2 items-center h-auto md:h-[65px] text-center text-sm">
            <CallButton phoneNumber="+48 571 050 285"/>
            <EmailButton email="flowfest.events@gmail.com"/>
            { (width <= 768) && (
              <>
                <div>+48571050285</div>
                <div>flowfest.events@gmail.com</div>
              </>
            )
    
            }
          </div>

        </div>

        <div className="mb-6 md:mb-0 rounded-md border-white border-solid border-10 text-center ">

          <h2 className="text-lg font-bold mb-4">Dokumenty</h2>
    
          <ul className="space-y-2">
            <li>
              <Link href="documents/regulamin.pdf" className="hover:text-purple-400" target="_blank" rel="noopener noreferrer">
                Regulamin
              </Link>
            </li>
            <li>    
              <Link href="documents/zgoda.pdf" className="hover:text-purple-400" target="_blank" rel="noopener noreferrer">
                Zgoda rodzica
              </Link>
            </li>
          </ul>

        </div>

        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-lg flex items-center justify-center md:justify-start">
            Created by FlowFest <FaCopyright className="ml-2 mr-2" /> All rights reserved.
          </p>
        </div>

        <div className="flex space-x-4">
          <Link href="https://www.facebook.com/profile.php?id=61550707652384" target="_blank">
            <FaFacebook size={28} className="hover:text-purple-400" />
          </Link>
          <Link href="https://www.instagram.com/flow_fest_events" target="_blank">
            <FaInstagram size={28} className="hover:text-purple-400" />
          </Link>
          <Link href="https://www.tiktok.com/@flowfest_events" target="_blank">
            <FaTiktok size={28} className="hover:text-purple-400" />
          </Link>
        </div>

      </div>
    </footer>
  );
}