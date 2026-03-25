import { useEffect, useRef, useState } from 'react';

interface PriceRow { label: string; price: string; }
interface ProgramBlock {
  id: string; icon: string; title: string; rows: PriceRow[]; microcopy: string;
  iconBg: string; iconColor: string; topBorder: string; priceBg: string; priceText: string;
}

const programs: ProgramBlock[] = [
  {
    id: 'gr', icon: 'ri-sun-line', title: 'Grădiniță',
    rows: [
      { label: 'Program 7:30–12:00', price: '1.200 lei / lună' },
      { label: 'Program 7:30–13:00', price: '1.500 lei / lună' },
      { label: 'Program 7:30–18:30', price: '1.750 lei / lună' },
    ],
    microcopy: 'Programul poate suferi modificări în funcție de tema săptămânii și de plecările în afara grădiniței.',
    iconBg: 'bg-orange-100', iconColor: 'text-orange-600', topBorder: 'border-t-4 border-orange-500',
    priceBg: 'bg-orange-50', priceText: 'text-orange-700',
  },
  {
    id: 'sc', icon: 'ri-graduation-cap-line', title: 'Școala Primară',
    rows: [{ label: 'Program 8:00–18:30', price: '2.500 lei / lună' }],
    microcopy: 'Taxa de școlarizare se referă la perioada 1 septembrie – 30 iunie.',
    iconBg: 'bg-amber-100', iconColor: 'text-amber-700', topBorder: 'border-t-4 border-amber-500',
    priceBg: 'bg-amber-50', priceText: 'text-amber-700',
  },
  {
    id: 'as', icon: 'ri-time-line', title: 'After School',
    rows: [{ label: 'Program 11:30–18:30', price: '1.600 lei / lună' }],
    microcopy: '',
    iconBg: 'bg-rose-100', iconColor: 'text-rose-600', topBorder: 'border-t-4 border-rose-500',
    priceBg: 'bg-rose-50', priceText: 'text-rose-700',
  },
];

const notes = [
  { icon: 'ri-percent-line', text: 'Pentru frați înscriși există un discount de 5%.' },
  { icon: 'ri-information-line', text: 'Taxele activităților extracurriculare pot varia în funcție de specificul clubului ales.' },
  { icon: 'ri-car-line', text: 'Transportul se calculează individual, la cerere.' },
  { icon: 'ri-calendar-check-line', text: 'Pentru detalii complete despre program și opțiuni, vă invităm să programați o vizită.' },
];

export default function ProgrameTarife() {
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
    <section id="programe-tarife" className="bg-[#FFFBF5] py-24 px-6">
      <div className="max-w-[1280px] mx-auto">

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-orange-500 font-bold text-[11px] uppercase tracking-[0.2em] mb-4">
            <span className="w-8 h-px bg-orange-400"></span>
            Transparență și claritate
            <span className="w-8 h-px bg-orange-400"></span>
          </div>
          <h2 className="font-black text-stone-900 leading-tight mb-4" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)' }}>
            Programe și tarife
          </h2>
          <p className="text-[1rem] text-stone-500 font-medium max-w-xl mx-auto leading-relaxed">
            Principalele formule de program și taxele de bază, prezentate clar și direct.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {programs.map((prog, i) => (
            <div
              key={prog.id}
              className={`bg-white rounded-2xl border border-stone-100 ${prog.topBorder} flex flex-col overflow-hidden ${i === 0 ? 'sm:col-span-2' : 'col-span-1'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-7">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${prog.iconBg}`}>
                    <i className={`${prog.icon} text-2xl ${prog.iconColor}`}></i>
                  </div>
                  <h3 className="text-2xl font-black text-stone-800">{prog.title}</h3>
                </div>

                <div className="space-y-3 flex-1">
                  {prog.rows.map((row) => (
                    <div key={row.label} className={`flex items-center justify-between px-5 py-3.5 rounded-xl ${prog.priceBg}`}>
                      <span className="text-sm font-semibold text-stone-700">{row.label}</span>
                      <span className={`text-lg font-black ${prog.priceText} whitespace-nowrap ml-4`}>{row.price}</span>
                    </div>
                  ))}
                </div>

                {prog.microcopy && (
                  <p className="mt-5 text-[11px] text-stone-400 font-medium leading-relaxed italic border-t border-stone-100 pt-4">{prog.microcopy}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-orange-100 rounded-xl px-8 py-6 mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {notes.map((n) => (
            <div key={n.text} className="flex items-start gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100 shrink-0">
                <i className={`${n.icon} text-sm text-orange-600`}></i>
              </div>
              <p className="text-[13px] text-stone-600 font-medium leading-relaxed mt-0.5">{n.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-[0.92rem] rounded-full transition-colors duration-200 cursor-pointer whitespace-nowrap"
          >
            <i className="ri-calendar-check-line"></i>
            Solicită detalii și programează o vizită
          </button>
        </div>

      </div>
    </section>
  );
}
