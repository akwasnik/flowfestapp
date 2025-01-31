import type { Metadata } from "next";
import Navigation from "@/components/main/Navigation";
import localfont from "next/font/local";
import "./globals.css";
import Footer from "@/components/main/Footer";
import {ReactLenis} from "@/lib/lenis";
import DataProvider from "@/providers/DataProvider";
import { cookies } from "next/headers";
import { MdAdminPanelSettings } from "react-icons/md";
import { LogOutIcon } from "lucide-react";


const asusrog = localfont({
  src:[
    {
      path: "../../public/fonts/asusrog_regular.ttf",
    },
  ],
  variable: "--font-asusrog"
})

export const metadata: Metadata = {
  title: "Flow Fest",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  const session = (await cookies()).get("session")?.value;

  return (
    <html lang="en" className={`${asusrog.variable}`}>
      <ReactLenis root>
        <body>
          {session && (
            <div className="fixed z-[100] top-6 left-1 lg:top-6 lg:left-3 text-purple-500 text-5xl flex items-center space-x-4">
              <MdAdminPanelSettings width={30} height={30}></MdAdminPanelSettings>
              <button onClick={ async () => {
                'use server';
                (await cookies()).delete("session")
                }}>
                <LogOutIcon width={30} height={30}></LogOutIcon>
              </button>
            </div>
          )}
          <Navigation/>
              <DataProvider>
                {children}
              </DataProvider>
          <Footer/>
        </body>
      </ReactLenis>
    </html>
  );
}
