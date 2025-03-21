"use client";

import { MenuFoldOutlined,MenuUnfoldOutlined } from "@ant-design/icons";

import { useReducer } from "react";

import Image from "next/image";
import logoflow from "@/assets/images/logoflow.png"
import NavLink from "../NavLink";
import Link from "next/link";

export default function Navigation(){

    const [pressed, toggle] = useReducer(pressed => !pressed, false);

    return (
        <nav className="bg-black fixed z-50 w-[100%] top-0 border-b border-purple-600">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between h-24 w-auto">
                    <div className="flex items-center">
                        <div className="flex-shrink-0" onClick={ pressed? toggle : undefined}>
                            <Link href="/"><Image src={logoflow} alt="FLOWFEST" width={250} priority></Image></Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-4 font-asusrog text-2xl ">
                            <NavLink href="/Onas" mobile={false}>O nas</NavLink>
                            <NavLink href="/Galeria" mobile={false}>Galeria</NavLink>
                            <NavLink href="/Kontakt" mobile={false}>Kontakt</NavLink>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button 
                        className="inline-flex items-center justify-center p-2 rounded-md text-white mr-10
                         hover:text-white focus: outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                         onClick={toggle}
                         >
                            { pressed ? (<MenuFoldOutlined className="text-2xl"/>) : (<MenuUnfoldOutlined className="text-2xl"/>)}
                         </button>
                    </div>
                </div>
            </div>
            { pressed && (
                <div className="md:hidden" onClick={toggle}>
                    <div className="font-asusrog px-16 pb-3 space-y-1">
                            <NavLink href="/Onas" mobile={true}>O nas</NavLink>
                            <NavLink href="/Galeria" mobile={true}>Galeria</NavLink>
                            <NavLink href="/Kontakt" mobile={true}>Kontakt</NavLink>
                    </div>
                </div>
            )}
        </nav>
    )
}
