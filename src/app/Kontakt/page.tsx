import CallButton from "@/components/main/CallButton";
import EmailButton from "@/components/main/EmailButton";

export default function Kontakt() {
  return (
    <div className="flex flex-col items-center mt-[6em] bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 py-16 h-[screen]">

      <div className="z-30 text-white text-5xl font-extrabold tracking-wide uppercase mb-8">
        <h1 className="border-b-4 border-purple-500 pb-2 px-6 font-asusrog">Kontakt</h1>
      </div>

      <div className="flex items-center justify-center">
        <CallButton phoneNumber="+48 571 050 285"></CallButton>
        <EmailButton email="flowfest.events@gmail.com"/>
      </div>

        <div className="z-30 text-white text-2xl w-[90%] md:w-[40%] bg-slate-800 p-8 rounded-2xl shadow-lg border border-purple-500 text-center">
          <p className="mb-4">
            Masz pomysł, opinię lub chcesz podzielić się swoją sugestią dotyczącą FlowFest? Czekamy na Twoje wiadomości! Jesteśmy otwarci na wszelkie propozycje, które pomogą nam tworzyć jeszcze lepsze wydarzenia.
          </p>
          <p className="mb-4 border-t-4 pt-12 px-6 mt-12 border-purple-500">
            Jeśli masz pomysł na nową atrakcję – skontaktuj się z nami. Chętnie podejmiemy rozmowę i współpracę. Przykładem może być (postawienie maszyny rozrywkowej typu boxer/rzucanie do kosza) lub inna atrakcja.
          </p>
          <p className="mb-4 border-t-4 pt-12 px-6 mt-12 border-purple-500">
            Jesteśmy również zainteresowani wszelkiego rodzaju sponsoringiem. Jeżeli Twoja firma chciałaby wspierać nasze wydarzenia i zyskać widoczność wśród młodych odbiorców – napisz do nas!
          </p>
          <p className="border-t-4 pt-12 px-6 mt-12 border-purple-500">
            Zapraszamy do kontaktu poprzez e-mail, telefon lub nasze media społecznościowe. Nasz zespół jest gotowy, aby odpowiedzieć na każde pytanie i nawiązać współpracę.
          </p>
        </div>
      
      

    </div>
  );
}