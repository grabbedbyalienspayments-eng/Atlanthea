import { useEffect, useRef, useState } from 'react';

const LOGO_URL = '/images/a9d12ddd459b.webp';

const benefits = [
  { icon: 'ri-user-star-line', text: 'Instructori de înot calificați' },
  { icon: 'ri-focus-3-line', text: 'Dezvoltarea coordonării și a încrederii' },
  { icon: 'ri-heart-pulse-line', text: 'Mișcare și dezvoltare armonioasă' },
  { icon: 'ri-thumb-up-line', text: 'O activitate utilă, sănătoasă și atractivă pentru copii' },
];

const tariffs = [
  { label: 'Ședință de grup', price: '70 lei', tag: 'per ședință', highlight: false },
  { label: 'Abonament 4 ședințe', price: '250 lei', tag: 'abonament', highlight: false },
  { label: 'Abonament 8 ședințe', price: '450 lei', tag: 'recomandat', highlight: true },
  { label: 'Abonament 12 ședințe', price: '600 lei', tag: 'cel mai avantajos', highlight: false },
  { label: 'Ședință individuală', price: '140 lei', tag: 'per ședință', highlight: false },
];

export default function BazinInot() {
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
    <section id="bazin-inot" className="bg-[#0A0400] py-24 px-6">
      <div className="max-w-[1280px] mx-auto">

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-orange-400/70 font-bold text-[11px] uppercase tracking-[0.22em] mb-4">
            <span className="w-8 h-px bg-orange-500/50"></span>
            Mișcare și încredere
            <span className="w-8 h-px bg-orange-500/50"></span>
          </div>
          <h2 className="font-black text-white leading-tight mb-5" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)' }}>
            Bazin de înot
          </h2>
          <p className="text-[0.95rem] sm:text-[1rem] text-white/60 font-medium max-w-2xl mx-auto leading-relaxed">
            Bazinul de înot Iepurașul Bocănilă completează experiența copilului prin mișcare, încredere, disciplină și plăcerea de a descoperi apa într-un mediu controlat și atent organizat.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="/images/104.webp"
              alt="Bazin de înot Iepurașul Bocănilă"
              loading="lazy"
              className="w-full h-[360px] object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0400]/50 to-transparent" />
            <div className="absolute bottom-5 left-5">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 text-white text-xs font-bold px-4 py-2 rounded-full">
                <i className="ri-water-flash-line text-emerald-400"></i>
                Bazin propriu în incinta instituției
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black text-white mb-6">De ce este înotul important?</h3>
            <div className="space-y-4 mb-8">
              {benefits.map((b) => (
                <div key={b.text} className="flex items-start gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-emerald-500/15 border border-emerald-500/20 shrink-0">
                    <i className={`${b.icon} text-lg text-emerald-400`}></i>
                  </div>
                  <p className="text-[0.95rem] font-semibold text-white/70 leading-relaxed mt-2">{b.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-6 py-5">
              <div className="flex items-center gap-2 mb-2">
                <i className="ri-shield-check-line text-emerald-400"></i>
                <span className="text-xs font-black text-emerald-300 uppercase tracking-wider">Mediu sigur și organizat</span>
              </div>
              <p className="text-[0.88rem] text-white/60 font-medium leading-relaxed">
                Cursurile sunt conduse de instructori calificați, în grupe mici, adaptate nivelului și vârstei fiecărui copil.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden mb-10">
          <div className="bg-emerald-600 px-8 py-5 flex items-center gap-3">
            <i className="ri-price-tag-3-line text-2xl text-white"></i>
            <h3 className="text-xl font-black text-white">Tarife cursuri de înot</h3>
          </div>
          <div className="divide-y divide-white/8">
            {tariffs.map((t) => (
              <div key={t.label} className={`flex items-center justify-between px-8 py-4 ${t.highlight ? 'bg-emerald-500/10' : ''}`}>
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap ${t.highlight ? 'bg-emerald-500 text-white' : 'bg-white/8 text-white/40'}`}>
                    {t.tag}
                  </span>
                  <span className="text-[0.9rem] font-semibold text-white/75">{t.label}</span>
                </div>
                <span className={`text-lg font-black whitespace-nowrap ${t.highlight ? 'text-emerald-400' : 'text-white'}`}>{t.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Brand footer stamp */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px flex-1 bg-white/8" />
          <img src={LOGO_URL} alt="Iepurașul Bocănilă" className="h-10 w-auto object-contain opacity-40" />
          <div className="h-px flex-1 bg-white/8" />
        </div>

        <div className="text-center">
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[0.92rem] rounded-full transition-colors duration-200 cursor-pointer whitespace-nowrap"
          >
            <i className="ri-water-flash-line"></i>
            Solicită detalii despre cursurile de înot
          </button>
        </div>

      </div>
    </section>
  );
}
