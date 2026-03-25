import { useEffect, useRef, useState } from 'react';

interface GalleryItem {
  src: string;
  label: string;
  icon: string;
  theme: string;
  accent: string;
  dotBg: string;
}

const items: GalleryItem[] = [
  {
    src: '/images/201.webp',
    label: 'Săli de clasă',
    icon: 'ri-layout-grid-line',
    theme: 'Spațiu educațional',
    accent: 'bg-orange-500',
    dotBg: 'bg-orange-500',
  },
  {
    src: '/images/202.webp',
    label: 'Spații educaționale',
    icon: 'ri-book-open-line',
    theme: 'Bibliotecă și lectură',
    accent: 'bg-amber-500',
    dotBg: 'bg-amber-500',
  },
  {
    src: '/images/203.webp',
    label: 'Activități cu copiii',
    icon: 'ri-paint-brush-line',
    theme: 'Creativitate',
    accent: 'bg-rose-500',
    dotBg: 'bg-rose-500',
  },
  {
    src: '/images/204.webp',
    label: 'Bazin · Mișcare',
    icon: 'ri-water-flash-line',
    theme: 'Aquatică',
    accent: 'bg-teal-500',
    dotBg: 'bg-teal-500',
  },
  {
    src: '/images/205.webp',
    label: 'Curte · Joacă',
    icon: 'ri-football-line',
    theme: 'Exterior',
    accent: 'bg-lime-600',
    dotBg: 'bg-lime-500',
  },
  {
    src: '/images/206.webp',
    label: 'Momente de grup',
    icon: 'ri-team-line',
    theme: 'Comunitate',
    accent: 'bg-orange-600',
    dotBg: 'bg-orange-500',
  },
];

/* ─────────────────────────────
   MOBILE: Simple stacked gallery
───────────────────────────── */
function MobileView() {
  return (
    <div id="viata-scoala" className="bg-[#0A0400] py-14 px-5">
      <div className="flex items-center gap-3 justify-center mb-6">
        <span className="w-6 h-px bg-orange-500/60" />
        <span className="text-[10px] text-orange-400/80 font-black uppercase tracking-[0.2em]">Imagini din instituție</span>
        <span className="w-6 h-px bg-orange-500/60" />
      </div>
      <h2 className="text-2xl sm:text-3xl font-black text-white text-center mb-8 leading-tight">
        Viața la<br />Iepurașul Bocănilă
      </h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.label} className="relative rounded-2xl overflow-hidden" style={{ height: '52vw', minHeight: '200px' }}>
            <img
              src={item.src}
              alt={item.label}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2.5">
              <div className={`w-8 h-8 ${item.accent} rounded-xl flex items-center justify-center`}>
                <i className={`${item.icon} text-white text-sm`} />
              </div>
              <div>
                <p className="text-[10px] text-white/50 font-bold uppercase tracking-wider">{item.theme}</p>
                <p className="text-white text-sm font-black">{item.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────
   DESKTOP: Pinned scroll storytelling (700vh)
───────────────────────────── */
function DesktopView() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState(0);
  const [prevItem, setPrevItem] = useState(0);

  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!wrapperRef.current) return;
        const rect = wrapperRef.current.getBoundingClientRect();
        const scrollable = wrapperRef.current.offsetHeight - window.innerHeight;
        const scrolled = Math.max(0, -rect.top);
        const progress = Math.min(1, scrolled / scrollable);
        const idx = Math.min(items.length - 1, Math.floor(progress * items.length));
        setActiveItem((prev) => {
          if (prev !== idx) setPrevItem(prev);
          return idx;
        });
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const item = items[activeItem];

  return (
    <div
      id="viata-scoala"
      ref={wrapperRef}
      style={{ height: '700vh' }}
      className="relative bg-[#0A0400]"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-[#0A0400]">

        {/* ── BACKGROUND IMAGES — crossfade ── */}
        {items.map((it, i) => (
          <div
            key={`bg-${i}`}
            className="absolute inset-y-0 right-0 w-[62%] bg-cover bg-center transition-opacity duration-700 ease-in-out"
            style={{
              backgroundImage: `url('${it.src}')`,
              opacity: i === activeItem ? 1 : 0,
            }}
          />
        ))}

        {/* Blend gradients over image */}
        <div className="absolute inset-y-0 right-0 w-[62%] bg-gradient-to-r from-[#0A0400] via-[#0A0400]/15 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-[62%] bg-gradient-to-t from-[#0A0400]/65 via-transparent to-[#0A0400]/35 pointer-events-none z-10" />

        {/* Left dark panel */}
        <div className="absolute inset-y-0 left-0 w-[38%] bg-[#0A0400] z-10" />

        {/* Decorative circles */}
        <div className="absolute right-[-180px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/[0.02] pointer-events-none z-10" />
        <div className="absolute right-[5px] top-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-orange-400/[0.04] pointer-events-none z-10" />

        {/* ── CONTENT GRID ── */}
        <div className="relative z-20 h-full max-w-[1280px] mx-auto px-6 grid grid-cols-[38%_62%]">

          {/* LEFT: info panel */}
          <div className="relative flex flex-col justify-center py-20 pr-10 overflow-hidden">

            {/* Section label */}
            <div className="flex items-center gap-2 mb-8">
              <span className="w-6 h-px bg-orange-500/60" />
              <span className="text-[10px] text-orange-400/80 font-black uppercase tracking-[0.22em]">
                Imagini din instituție
              </span>
            </div>

            {/* Static title */}
            <h2 className="font-black text-white leading-[0.95] mb-10" style={{ fontSize: 'clamp(2.4rem, 3.5vw, 3.4rem)' }}>
              Viața la<br />
              <span className="text-orange-400">Iepurașul<br />Bocănilă</span>
            </h2>

            {/* Animated active content */}
            {items.map((it, i) => (
              <div
                key={it.label}
                className="absolute left-6 pr-10 transition-all duration-500 ease-out"
                style={{
                  top: '55%',
                  opacity: i === activeItem ? 1 : 0,
                  transform: i === activeItem
                    ? 'translateX(0) translateY(-50%)'
                    : i < activeItem
                      ? 'translateX(-32px) translateY(-50%)'
                      : 'translateX(32px) translateY(-50%)',
                  pointerEvents: i === activeItem ? 'auto' : 'none',
                }}
              >
                {/* Ghost number */}
                <div
                  className="font-black text-white/[0.04] leading-none mb-2 select-none"
                  style={{ fontSize: '9rem' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Theme tag */}
                <p className="text-[10px] text-white/30 font-black uppercase tracking-[0.22em] mb-2">
                  {it.theme}
                </p>

                {/* Label */}
                <p className="font-black text-white/95 leading-snug" style={{ fontSize: 'clamp(1.6rem, 2.2vw, 2.2rem)' }}>
                  {it.label}
                </p>
              </div>
            ))}

            {/* Progress dots — bottom */}
            <div className="absolute bottom-10 left-6 flex items-center gap-3">
              {items.map((it, i) => (
                <button
                  key={i}
                  aria-label={it.label}
                  onClick={() => {
                    if (!wrapperRef.current) return;
                    const scrollable = wrapperRef.current.offsetHeight - window.innerHeight;
                    const target = wrapperRef.current.offsetTop + (scrollable / (items.length - 0.5)) * i;
                    window.scrollTo({ top: target, behavior: 'smooth' });
                  }}
                  className="transition-all duration-300 rounded-full cursor-pointer"
                  style={{
                    width: i === activeItem ? '28px' : '8px',
                    height: '8px',
                    background: i === activeItem ? '#f97316' : 'rgba(255,255,255,0.18)',
                  }}
                />
              ))}
              <span className="ml-2 text-[11px] text-white/30 font-black uppercase tracking-widest">
                {String(activeItem + 1).padStart(2, '0')} / 0{items.length}
              </span>
            </div>

            {/* Scroll hint — top right of left panel */}
            <div className="absolute top-10 right-8 flex flex-col items-center gap-1.5 opacity-25">
              <div className="w-5 h-8 border border-white/40 rounded-full flex items-start justify-center pt-1">
                <div className="w-0.5 h-2 bg-white rounded-full animate-bounce" />
              </div>
              <span className="text-[9px] text-white/60 font-bold uppercase tracking-[0.15em]">scroll</span>
            </div>
          </div>

          {/* RIGHT: image label floating */}
          <div className="relative flex items-start justify-start pt-10 pl-6 z-0">
            {items.map((it, i) => (
              <div
                key={`label-${i}`}
                className="absolute top-10 left-6 transition-all duration-500"
                style={{
                  opacity: i === activeItem ? 1 : 0,
                  transform: i === activeItem ? 'translateY(0)' : 'translateY(12px)',
                }}
              >
                <div className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-black text-white ${it.accent} backdrop-blur-sm`}>
                  <i className={it.icon} />
                  {it.label}
                </div>
              </div>
            ))}

            {/* Counter on image — bottom right */}
            {items.map((it, i) => (
              <div
                key={`counter-${i}`}
                className="absolute bottom-10 right-10 transition-all duration-400"
                style={{ opacity: i === activeItem ? 1 : 0 }}
              >
                <span className="text-[11px] text-white/25 font-black tracking-[0.22em]">
                  0{i + 1} — 0{items.length}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Top intro line */}
        <div className="absolute top-0 left-0 right-0 z-30 flex justify-center pt-5 pointer-events-none">
          <p className="text-[0.75rem] text-white/25 font-semibold text-center max-w-md leading-relaxed px-4">
            Spațiile, activitățile și atmosfera contează.
          </p>
        </div>

      </div>

      {/* Outro after scroll ends */}
      <div className="relative bg-[#0A0400] px-6 py-14">
        <div className="max-w-[1280px] mx-auto flex justify-center">
          <div className="max-w-xl text-center">
            <div className="w-10 h-10 flex items-center justify-center mx-auto mb-5 bg-orange-500/15 rounded-full">
              <i className="ri-image-line text-xl text-orange-400" />
            </div>
            <p className="text-[1rem] text-white/50 font-medium leading-relaxed font-lora italic">
              „Fiecare spațiu, fiecare activitate și fiecare moment de zi cu zi contribuie la o experiență educațională cu adevărat completă."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────
   EXPORT: responsive wrapper
───────────────────────────── */
export default function ViataScoala() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  return isMobile ? <MobileView /> : <DesktopView />;
}
