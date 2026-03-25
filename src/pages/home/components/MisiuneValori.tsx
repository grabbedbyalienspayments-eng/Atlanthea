import { useEffect, useRef, useState } from 'react';

const LOGO_URL = '/images/a9d12ddd459b.webp';

const values = [
  { icon: 'ri-book-open-line', title: 'Educație', desc: 'Un parcurs structurat, coerent și adaptat nevoilor fiecărui copil, de la grădiniță la școala primară.', accent: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
  { icon: 'ri-heart-2-line', title: 'Implicare', desc: 'Prezență activă, comunicare deschisă cu părinții și atenție reală față de fiecare copil în parte.', accent: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/20' },
  { icon: 'ri-team-line', title: 'Echipă', desc: 'Cadre didactice dedicate care lucrează împreună pentru binele și progresul copiilor.', accent: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
  { icon: 'ri-award-line', title: 'Performanță', desc: 'Rezultate concrete, vizibile, construite pas cu pas prin metodă, răbdare și stimulare continuă.', accent: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
  { icon: 'ri-star-line', title: 'Unicitate', desc: 'Fiecare copil este diferit. Îl privim, îl înțelegem și îl sprijinim să crească în felul lui.', accent: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' },
  { icon: 'ri-hand-heart-line', title: 'Respect', desc: 'Relații bazate pe demnitate, empatie și considerație față de copii, părinți și colegi.', accent: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20' },
  { icon: 'ri-door-open-line', title: 'Alegere', desc: 'Libertatea de a explora, de a alege și de a participa activ la propriul parcurs de învățare.', accent: 'text-lime-400', bg: 'bg-lime-500/10', border: 'border-lime-500/20' },
  { icon: 'ri-seedling-line', title: 'Șlefuire', desc: 'Atenție la detaliu, rafinament și lucru continuu asupra caracterului și personalității copilului.', accent: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20' },
];

export default function MisiuneValori() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="misiune-valori" className="bg-[#0A0400] py-24 px-6 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">

        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="inline-flex items-center gap-3 text-orange-400/70 font-bold text-[11px] uppercase tracking-[0.22em] mb-5">
            <span className="w-8 h-px bg-orange-500/50"></span>
            <img src={LOGO_URL} alt="" className="h-6 w-auto object-contain opacity-60" aria-hidden="true" />
            Ce ne definește
            <span className="w-8 h-px bg-orange-500/50"></span>
          </div>
          <h2
            className="font-black text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)' }}
          >
            Misiune și Valori
          </h2>
          <p className="text-[0.95rem] text-white/40 font-medium max-w-lg mx-auto leading-relaxed">
            Principiile care ghidează fiecare zi petrecută alături de copiii și familiile din comunitatea noastră.
          </p>
        </div>

        {/* Values grid — editorial 4 cols on desktop */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14 transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {values.map((val, i) => (
            <div
              key={val.title}
              className={`p-6 rounded-2xl border ${val.border} ${val.bg} hover:bg-white/5 transition-colors duration-200 cursor-default`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className={`w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 mb-4`}>
                <i className={`${val.icon} text-xl ${val.accent}`}></i>
              </div>
              <h3 className={`text-lg font-black mb-2 ${val.accent}`}>{val.title}</h3>
              <p className="text-[0.82rem] text-white/45 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>

        {/* Support paragraph — centered callout */}
        <div className={`max-w-2xl mx-auto text-center transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="border border-orange-500/20 rounded-2xl px-10 py-8 bg-orange-500/5">
            <i className="ri-focus-3-line text-2xl text-orange-400/60 mb-4 block"></i>
            <p className="text-[1.02rem] text-white/65 font-medium leading-relaxed font-lora italic">
              „Ne dorim să formăm copii echilibrați, curioși, activi și încrezători, într-un mediu în care educația este susținută de atenție reală, implicare și stabilitate."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
