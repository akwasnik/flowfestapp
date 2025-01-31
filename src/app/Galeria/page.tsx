import GalleryPhoto from "@/components/main/GalleryPhoto";

import { Suspense } from "react";
import { LoaderIcon } from "lucide-react"

export default function Galeria() {
  return (
    <div className="flex flex-col items-center mt-[6em] bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 py-16 h-[screen]">
      <div className="text-white text-5xl font-extrabold tracking-wide uppercase mb-8 animate-fade-in">
        <h1 className="border-b-4 border-purple-500 pb-2 px-6 font-asusrog">GALERIA</h1>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <Suspense fallback={<div className="text-white text-5xl animate-spin"><LoaderIcon width={100} height={100}/></div>}>
            <GalleryPhoto id="ffzdj8_qac0jg" />
            <GalleryPhoto id="ffzdj7_hgbmcx" width={200} />
            <GalleryPhoto id="ffzdj6_f9fbec" />
            <GalleryPhoto id="ffzdj5_xapunz" />
            <GalleryPhoto id="ffzdj4_hnimid" />
            <GalleryPhoto id="ffzdj3_eljpgv" />
            <GalleryPhoto id="ffzdj2_wrgmhg" />
            <GalleryPhoto id="ffzdj1_g109lp" width={250}/>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
