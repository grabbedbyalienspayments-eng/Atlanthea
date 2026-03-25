import { useEffect, useRef, useState } from 'react';

const highlights = [
  { icon: 'ri-building-2-line', title: 'Clădire dedicată', desc: 'Construită special ca instituție de învățământ', ib: 'bg-orange-500/15', ic: 'text-orange-400' },
  { icon: 'ri-water-flash-line', title: 'Bazin de înot propriu', desc: 'Mișcare, sănătate și dezvoltare fizică', ib: 'bg-emerald-500/15', ic: 'text-emerald-400' },
  { icon: 'ri-first-aid-kit-line', title: 'Cabinet medical', desc: 'Control medical zilnic și siguranță permanentă', ib: 'bg-rose-500/15', ic: 'text-rose-400' },
  { icon: 'ri-restaurant-line', title: 'Bucătărie proprie', desc: 'Meniu echilibrat și hrănitor zilnic', ib: 'bg-amber-500/15', ic: 'text-amber-400' },
];

interface FacilityItem {
  icon: string;
  title: string;
  desc: string;
}

interface FacilityCategory {
  id: string;
  title: string;
  icon: string;
  textColor: string;
  bgColor: string;
  borderColor: string;
  stripColor: string;
  items: FacilityItem[];
}

const facilityCategories: FacilityCategory[] = [
  {
    id: 'spatii',
    title: 'Spații & Mediu',
    icon: 'ri-building-2-line',
    textColor: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    stripColor: 'bg-orange-400',
    items: [
      { icon: 'ri-building-2-line', title: 'Clădire dedicată', desc: 'Construită special ca instituție de învățământ' },
      { icon: 'ri-layout-grid-line', title: 'Săli spațioase și luminoase', desc: 'Proiectate pentru confortul și dezvoltarea copiilor' },
      { icon: 'ri-armchair-line', title: 'Mobilier ergonomic', desc: 'Adaptat vârstei și nevoilor fiecărui copil' },
      { icon: 'ri-shield-star-line', title: 'Mediu sigur și stimulativ', desc: 'Supraveghere video și monitorizare continuă' },
      { icon: 'ri-football-line', title: 'Curte, joacă & sport', desc: 'Teren propriu de joacă și sală de sport' },
    ],
  },
  {
    id: 'sanatate',
    title: 'Sănătate & Îngrijire',
    icon: 'ri-heart-pulse-line',
    textColor: 'text-rose-600',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    stripColor: 'bg-rose-400',
    items: [
      { icon: 'ri-first-aid-kit-line', title: 'Cabinet medical', desc: 'Control medical zilnic în incinta instituției' },
      { icon: 'ri-mental-health-line', title: 'Cabinet psihologic', desc: 'Evaluare psihologică și terapie educațională' },
      { icon: 'ri-restaurant-line', title: 'Bucătărie proprie', desc: 'Sală de mese la cele mai înalte standarde' },
      { icon: 'ri-leaf-line', title: 'Meniu echilibrat', desc: 'Alimentație sănătoasă, diversificată zilnic' },
    ],
  },
  {
    id: 'sport',
    title: 'Sport & Activități',
    icon: 'ri-water-flash-line',
    textColor: 'text-teal-700',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    stripColor: 'bg-teal-500',
    items: [
      { icon: 'ri-water-flash-line', title: 'Bazin de înot', desc: 'Propriu, în incinta instituției' },
      { icon: 'ri-cake-2-line', title: 'Petreceri pentru copii', desc: 'Aniversări și momente speciale organizate' },
      { icon: 'ri-calendar-check-line', title: 'Program pe tot anul', desc: 'Funcționăm continuu, fără pauze prelungite' },
    ],
  },
  {
    id: 'familie',
    title: 'Educație & Familie',
    icon: 'ri-team-line',
    textColor: 'text-amber-700',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    stripColor: 'bg-amber-400',
    items: [
      { icon: 'ri-user-star-line', title: 'Personal calificat', desc: 'Pregătit continuu și dedicat copiilor' },
      { icon: 'ri-book-2-line', title: 'Materiale educaționale', desc: 'Calitate superioară în tot ce folosim' },
      { icon: 'ri-group-line', title: 'Workshop-uri pentru părinți', desc: 'Implicare și comunicare deschisă' },
      { icon: 'ri-parent-line', title: 'Consultații individuale', desc: 'Dialog direct și personalizat cu familia' },
      { icon: 'ri-bus-2-line', title: 'Transport la cerere', desc: 'Flexibilitate pentru programul familiei' },
    ],
  },
];

export default function Facilitati() {
  const imageRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [imgOffset, setImgOffset] = useState(0);
  const [gridVis, setGridVis] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop, { passive: true });
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    let rafId: number;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (imageRef.current) {
          const rect = imageRef.current.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
            setImgOffset((progress - 0.5) * 80);
          }
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [isDesktop]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setGridVis(true); },
      { threshold: 0.05 }
    );
    if (gridRef.current) obs.observe(gridRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="facilitati" className="bg-[#0A0400] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[44%_56%]">

        {/* ── LEFT: STICKY DARK PANEL ── */}
        <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between relative overflow-hidden px-6 sm:px-10 lg:px-12 py-12 lg:py-16">

          {/* BG decorative circles */}
          <div className="hidden lg:block absolute -right-28 top-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-white/[0.03] pointer-events-none" />
          <div className="hidden lg:block absolute -right-10 top-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full border border-orange-500/[0.07] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-orange-950/20 to-transparent pointer-events-none" />

          {/* Top: label + title */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-orange-500/50" />
              <span className="text-[10px] text-orange-400/65 font-black uppercase tracking-[0.22em]">Facilități și mediu educațional</span>
            </div>
            <h2 className="font-black text-white leading-[0.95] mb-5" style={{ fontSize: 'clamp(1.9rem, 3vw, 2.9rem)' }}>
              Infrastructură<br />
              <span className="text-orange-400">reală</span>
            </h2>
            <p className="text-[0.9rem] text-white/72 font-medium leading-[1.85] max-w-[340px]">
              Unul dintre diferențiatorii reali ai Iepurașului Bocănilă este infrastructura proprie și mediul construit special pentru educație, mișcare și siguranță.
            </p>
          </div>

          {/* Middle: 4 key highlights */}
          <div className="space-y-4 sm:space-y-5 my-8 lg:my-0">
            <p className="text-[9px] text-white/22 font-black uppercase tracking-[0.25em] mb-2">Facilități cheie</p>
            {highlights.map((h, i) => (
              <div key={h.title} className="flex items-center gap-3 sm:gap-4 group">
                <span className="text-[10px] font-black text-white/18 w-5 shrink-0 group-hover:text-orange-400/60 transition-colors">0{i + 1}</span>
                <div className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl ${h.ib} shrink-0`}>
                  <i className={`${h.icon} text-base sm:text-lg ${h.ic}`} />
                </div>
                <div>
                  <p className="text-sm font-black text-white/80">{h.title}</p>
                  <p className="text-[11px] text-white/32 font-medium">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom micro quote */}
          <div className="pt-5 border-t border-white/[0.07]">
            <p className="text-[13px] sm:text-[14px] text-white/60 font-medium italic font-lora leading-relaxed">
              „La Iepurașul Bocănilă, infrastructura nu este doar decor, ci o parte reală a experienței educaționale."
            </p>
          </div>
        </div>

        {/* ── RIGHT: SCROLLABLE CONTENT ── */}
        <div className="bg-[#FFFBF5]">

          {/* Feature image with parallax */}
          <div ref={imageRef} className="relative overflow-hidden" style={{ height: '50vh', minHeight: '280px' }}>
            <img
              src="/images/dc790276245b.webp"
              alt="Facilitățile Iepurașul Bocănilă"
              loading="lazy"
              className="absolute left-0 right-0 w-full object-cover object-center"
              style={{
                height: isDesktop ? 'calc(100% + 80px)' : '100%',
                top: isDesktop ? '-40px' : '0',
                transform: isDesktop ? `translateY(${imgOffset}px)` : 'none',
                willChange: isDesktop ? 'transform' : 'auto',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-stone-950/10 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFFBF5]/25 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 max-w-md">
              <p className="text-white/55 text-[10px] font-black uppercase tracking-[0.18em] mb-1.5">Un mediu construit cu grijă</p>
              <p className="text-white text-[1rem] sm:text-[1.1rem] font-black leading-snug">
                Fiecare detaliu al spațiului a fost gândit pentru siguranța, confortul și dezvoltarea copilului.
              </p>
            </div>
          </div>

          {/* ── FACILITY CATEGORIES GRID ── */}
          <div ref={gridRef} className="p-6 sm:p-8 lg:p-10 pb-12 lg:pb-14 space-y-8">

            <p className="text-[10px] font-black text-stone-400/70 uppercase tracking-[0.22em]">Tot ce oferim</p>

            {facilityCategories.map((cat, catIdx) => (
              <div
                key={cat.id}
                style={{
                  opacity: gridVis ? 1 : 0,
                  transform: gridVis ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 0.5s ease ${catIdx * 100}ms, transform 0.5s ease ${catIdx * 100}ms`,
                }}
              >
                {/* Category header */}
                <div className={`flex items-center gap-3 mb-4 py-2.5 px-4 rounded-xl ${cat.bgColor} border ${cat.borderColor}`}>
                  <div className={`w-8 h-8 flex items-center justify-center rounded-lg bg-white ${cat.borderColor} border shrink-0`}>
                    <i className={`${cat.icon} text-base ${cat.textColor}`} />
                  </div>
                  <span className={`text-[13px] font-black uppercase tracking-[0.12em] ${cat.textColor}`}>
                    {cat.title}
                  </span>
                  <span className={`ml-auto text-[11px] font-bold ${cat.textColor} opacity-60`}>
                    {cat.items.length} facilități
                  </span>
                </div>

                {/* Facility cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cat.items.map((item, itemIdx) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-stone-100 hover:border-stone-200 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                      style={{
                        opacity: gridVis ? 1 : 0,
                        transform: gridVis ? 'translateY(0)' : 'translateY(10px)',
                        transition: `opacity 0.4s ease ${catIdx * 100 + itemIdx * 50}ms, transform 0.4s ease ${catIdx * 100 + itemIdx * 50}ms`,
                      }}
                    >
                      {/* Colored left accent strip */}
                      <div className={`w-1 self-stretch rounded-full shrink-0 ${cat.stripColor} opacity-60`} />

                      {/* Icon */}
                      <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${cat.bgColor} shrink-0`}>
                        <i className={`${item.icon} text-xl ${cat.textColor}`} />
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <p className="text-[14px] sm:text-[15px] font-black text-stone-800 leading-tight mb-1">
                          {item.title}
                        </p>
                        <p className="text-[12px] sm:text-[13px] text-stone-500 font-medium leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Bottom callout */}
            <div
              className="bg-orange-50 border border-orange-200 rounded-2xl px-6 sm:px-8 py-7 text-center"
              style={{
                opacity: gridVis ? 1 : 0,
                transform: gridVis ? 'translateY(0)' : 'translateY(10px)',
                transition: 'opacity 0.5s ease 500ms, transform 0.5s ease 500ms',
              }}
            >
              <i className="ri-home-smile-2-line text-3xl text-orange-400 mb-3 block" />
              <p className="text-[0.95rem] sm:text-[1rem] text-stone-700 font-medium leading-relaxed font-lora italic">
                „La Iepurașul Bocănilă, infrastructura nu este doar decor — ci o parte reală a experienței educaționale și a încrederii pe care părintele o caută."
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
