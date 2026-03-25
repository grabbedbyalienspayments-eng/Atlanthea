import { useEffect, useRef, useState } from 'react';

const steps = [
  { number: '01', icon: 'ri-phone-line', title: 'Solicită informații', desc: 'Contactați-ne telefonic sau prin email. Programăm o vizită la instituție și răspundem la orice întrebare.', accent: 'bg-orange-500', light: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-600' },
  { number: '02', icon: 'ri-search-eye-line', title: 'Aplică', desc: 'Descoperiți oferta educațională, spațiile și programul. Alegeți varianta potrivită pentru copilul dumneavoastră.', accent: 'bg-amber-500', light: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700' },
  { number: '03', icon: 'ri-folder-upload-line', title: 'Depune dosarul', desc: 'Înscrierea se finalizează prin completarea documentelor specifice programului ales.', accent: 'bg-rose-500', light: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-600' },
];

const documents = [
  { icon: 'ri-file-text-line', text: 'Cerere / formular de înscriere' },
  { icon: 'ri-profile-line', text: 'Certificat de naștere al copilului' },
  { icon: 'ri-id-card-line', text: 'Acte de identitate ale părinților / tutorelui' },
  { icon: 'ri-heart-pulse-line', text: 'Documente medicale și aviz epidemiologic' },
  { icon: 'ri-information-line', text: 'Programul și pașii diferă ușor în funcție de serviciul ales: grădiniță, școală primară sau after school' },
];

export default function Inscriere() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  return (
    <section id="inscriere" className="bg-white py-24 px-6">
      <div className="max-w-[1280px] mx-auto">

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-orange-500 font-bold text-[11px] uppercase tracking-[0.2em] mb-4">
            <span className="w-8 h-px bg-orange-400"></span>
            Primul pas
            <span className="w-8 h-px bg-orange-400"></span>
          </div>
          <h2 className="font-black text-stone-900 leading-tight mb-5" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)' }}>
            Înscriere și programare vizită
          </h2>
          <p className="text-[1rem] text-stone-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Primul pas este simplu: programați o vizită și descoperiți atmosfera, facilitățile, programul educațional și mediul în care copilul dumneavoastră poate crește frumos.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-8 right-0 translate-x-1/2 z-10 w-8 h-8 items-center justify-center">
                  <i className="ri-arrow-right-line text-xl text-stone-300"></i>
                </div>
              )}
              <div className={`p-7 rounded-2xl border ${step.border} ${step.light} h-full`}>
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${step.accent}`}>
                    <i className={`${step.icon} text-xl text-white`}></i>
                  </div>
                  <span className={`text-4xl font-black ${step.text} opacity-25`}>{step.number}</span>
                </div>
                <h3 className="text-xl font-black text-stone-800 mb-2">{step.title}</h3>
                <p className="text-[0.88rem] text-stone-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-orange-50 border border-orange-100 rounded-xl px-7 py-5 mb-12 flex items-start gap-3">
          <div className="w-9 h-9 flex items-center justify-center bg-orange-100 rounded-full shrink-0">
            <i className="ri-lightbulb-line text-lg text-orange-500"></i>
          </div>
          <p className="text-[0.9rem] text-stone-700 font-medium leading-relaxed">
            Vizitarea se face prin programare, iar discuția directă ajută părintele să înțeleagă mai clar ritmul, oferta și potrivirea pentru copil.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-xl font-black text-stone-800 mb-6 flex items-center gap-2">
              <i className="ri-file-list-3-line text-orange-500 text-xl"></i>
              Documente și clarificări importante
            </h3>
            <div className="space-y-3">
              {documents.map((doc) => (
                <div key={doc.text} className="flex items-start gap-3 p-4 bg-[#FFFBF5] border border-orange-100 rounded-xl">
                  <div className="w-9 h-9 flex items-center justify-center bg-orange-100 rounded-lg shrink-0">
                    <i className={`${doc.icon} text-lg text-orange-600`}></i>
                  </div>
                  <p className="text-[0.88rem] font-semibold text-stone-700 leading-relaxed mt-1">{doc.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 flex items-center justify-center bg-amber-100 rounded-xl">
                  <i className="ri-seedling-line text-xl text-amber-700"></i>
                </div>
                <h4 className="text-lg font-black text-stone-800">Acomodare graduală</h4>
              </div>
              <p className="text-[0.88rem] text-stone-600 leading-relaxed">
                Pentru grădiniță, acomodarea și ritmul copilului sunt tratate cu atenție, într-un mod prietenos și echilibrat.
              </p>
            </div>

            <div className="bg-orange-500 rounded-2xl p-8 text-center">
              <i className="ri-calendar-check-line text-4xl text-white/70 mb-4 block"></i>
              <h4 className="text-xl font-black text-white mb-2">Suntem bucuroși să vă primim</h4>
              <p className="text-white/75 text-sm font-medium mb-6 leading-relaxed">
                Vizitați instituția și descoperiți personal mediul educațional Iepurașul Bocănilă.
              </p>
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-orange-600 font-bold text-sm rounded-full hover:bg-orange-50 transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-map-pin-line"></i>
                Programează o vizită
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
