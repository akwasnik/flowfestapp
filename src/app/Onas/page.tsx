import OnasText from "@/components/main/OnasText";

export default function Onas() {
  return (

    <div className="flex flex-col items-center mt-[6em] bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 py-16 h-[screen]">
      <div className="text-white text-5xl font-extrabold tracking-wide uppercase mb-8 animate-fade-in">
        <h1 className="border-b-4 border-purple-500 pb-2 px-6 font-asusrog">O NAS</h1>
      </div>

      <OnasText/>
      
    </div>
  );
}