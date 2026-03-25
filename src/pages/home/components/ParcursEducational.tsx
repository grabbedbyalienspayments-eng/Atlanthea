import { useEffect, useRef, useState } from 'react';

interface Stage {
  number: string;
  tag: string;
  tagIcon: string;
  title: string;
  description: string;
  points: string[];
  cta: string;
  bgImage: string;
  accent: string;
  accentHover: string;
  tagBg: string;
  tagText: string;
  dotBg: string;
}

const stages: Stage[] = [
  {
    number: '01',
    tag: '3–6 ani',
    tagIcon: 'ri-sun-line',
    title: 'Grădiniță',
    description: 'Grădinița Iepurașul Bocănilă oferă copiilor un mediu sigur, cald și adecvat, în care activitățile educaționale, joaca, mesele, rutina și dezvoltarea personală sunt integrate într-un program bine organizat.',
    points: [
      'Grupele sunt organizate pe vârste',
      'Programe diferite în funcție de intervalul orar ales',
      'Activități, cluburi și dezvoltare armonioasă',
      'Atenție pentru acomodare, socializare și ritm',
    ],
    cta: 'Descoperă grădinița',
    bgImage: '/images/301.webp',
    accent: 'bg-orange-500',
    accentHover: 'hover:bg-orange-600',
    tagBg: 'bg-orange-500/20',
    tagText: 'text-orange-300',
    dotBg: 'bg-orange-500',
  },
  {
    number: '02',
    tag: 'Clasele I–IV',
    tagIcon: 'ri-graduation-cap-line',
    title: 'Școala Primară',
    description: 'Școala Primară Iepurașul Bocănilă funcționează pe baza Curriculumului Național Românesc și urmărește dezvoltarea competențelor, a creativității, a comunicării și a capacității copilului de a învăța într-un mod organizat, activ și adaptat.',
    points: [
      'Curriculum Național',
      'Program 08:00–18:30',
      'Engleză intensivă și activități extracurriculare',
      'Continuitate și sprijin educațional',
    ],
    cta: 'Descoperă școala primară',
    bgImage: '/images/302.webp',
    accent: 'bg-amber-500',
    accentHover: 'hover:bg-amber-600',
    tagBg: 'bg-amber-500/20',
    tagText: 'text-amber-300',
    dotBg: 'bg-amber-500',
  },
  {
    number: '03',
    tag: '11:30–18:30',
    tagIcon: 'ri-time-line',
    title: 'After School',
    description: 'Programul de After School completează firesc parcursul copilului după orele de curs, prin masă de prânz, efectuarea temelor, gustare, cluburi și activități recreative într-un mediu atent supravegheat și bine organizat.',
    points: [
      'Program 11:30–18:30',
      'Masă de prânz și gustare',
      'Efectuarea temelor',
      'Cluburi și activități recreative',
    ],
    cta: 'Descoperă after school',
    bgImage: '/images/d12532925050.webp',
    accent: 'bg-rose-500',
    accentHover: 'hover:bg-rose-600',
    tagBg: 'bg-rose-500/20',
    tagText: 'text-rose-300',
    dotBg: 'bg-rose-500',
  },
];

const introLine = 'Iepurașul Bocănilă oferă un parcurs educațional clar și coerent, construit pentru a răspunde etapelor diferite de dezvoltare ale copilului.';
const continuityText = 'Întregul sistem este gândit astfel încât copilul să poată crește într-un mediu familiar, coerent și bine structurat, cu sprijin real pe termen lung.';

/* ─────────────────────────────
   MOBILE: Tab cards layout
───────────────────────────── */
function MobileView() {
  const [active, setActive] = useState(0);
  const s = stages[active];

  return (
    <div id="parcurs-educational" className="bg-[#080300] py-14 px-5">
      <div className="flex items-center gap-3 justify-center mb-8">
        <span className="w-6 h-px bg-orange-500/60" />
        <span className="text-[10px] text-orange-400/80 font-black uppercase tracking-[0.2em]">Parcurs educațional</span>
        <span className="w-6 h-px bg-orange-500/60" />
      </div>

      {/* Tab switcher */}
      <div className="flex rounded-xl overflow-hidden border border-white/10 mb-8">
        {stages.map((st, i) => (
          <button
            key={st.number}
            onClick={() => setActive(i)}
            className={`flex-1 py-3 text-xs font-black transition-colors cursor-pointer whitespace-nowrap ${
              i === active
                ? `${st.accent} text-white`
                : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/70'
            }`}
          >
            {st.title}
          </button>
        ))}
      </div>

      {/* Active stage card */}
      <div className="relative rounded-2xl overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${s.bgImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080300] via-[#080300]/85 to-[#080300]/40" />

        <div className="relative p-6 pt-40 sm:pt-52">
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-4 ${s.tagBg} ${s.tagText} border border-white/10`}>
            <i className={`${s.tagIcon} text-xs`} />
            {s.tag}
          </div>
          <h2 className="text-3xl font-black text-white mb-4">{s.title}</h2>
          <p className="text-sm text-white/65 leading-relaxed mb-5">{s.description}</p>
          <ul className="space-y-2.5 mb-6">
            {s.points.map((pt) => (
              <li key={pt} className="flex items-start gap-2.5">
                <i className="ri-checkbox-circle-fill text-orange-400 text-base mt-0.5 shrink-0" />
                <span className="text-sm text-white/75 font-semibold leading-snug">{pt}</span>
              </li>
            ))}
          </ul>
          <button className={`inline-flex items-center gap-2 px-5 py-3 ${s.accent} ${s.accentHover} text-white text-sm font-bold rounded-full cursor-pointer whitespace-nowrap transition-colors`}>
            {s.cta}
            <i className="ri-arrow-right-line" />
          </button>
        </div>
      </div>

      <div className="mt-10 text-center">
        <div className="w-10 h-10 flex items-center justify-center mx-auto mb-4 bg-orange-500/15 rounded-full">
          <i className="ri-links-line text-xl text-orange-400" />
        </div>
        <p className="text-sm text-white/55 font-medium leading-relaxed font-lora italic max-w-sm mx-auto">
          „{continuityText}"
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────
   DESKTOP: Pinned scroll storytelling
───────────────────────────── */
function DesktopView() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

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
        const stage = progress < 0.34 ? 0 : progress < 0.68 ? 1 : 2;
        setActiveStage(stage);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div id="parcurs-educational" ref={wrapperRef} style={{ height: '360vh' }} className="relative bg-[#080300]">
      <div className="sticky top-0 h-screen overflow-hidden bg-[#080300]">

        {/* Stage background images — crossfade */}
        {stages.map((s, i) => (
          <div
            key={`bg-${i}`}
            className="absolute inset-y-0 right-0 w-[58%] bg-cover bg-center transition-opacity duration-700"
            style={{ backgroundImage: `url('${s.bgImage}')`, opacity: i === activeStage ? 1 : 0 }}
          />
        ))}

        {/* Blends */}
        <div className="absolute inset-y-0 right-0 w-[58%] bg-gradient-to-r from-[#080300] via-[#080300]/20 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-[58%] bg-gradient-to-t from-[#080300]/70 via-transparent to-[#080300]/40 pointer-events-none z-10" />
        <div className="absolute inset-y-0 left-0 w-[44%] bg-[#080300] z-10" />

        {/* Content grid */}
        <div className="relative z-20 h-full max-w-[1280px] mx-auto px-6 grid grid-cols-[44%_56%]">

          {/* LEFT */}
          <div className="relative flex flex-col justify-center py-24 pr-10 overflow-hidden">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-6 h-px bg-orange-500/60" />
              <span className="text-[10px] text-orange-400/80 font-black uppercase tracking-[0.22em]">Parcurs educațional</span>
            </div>

            {/* Static intro line — always visible, not overlapping */}
            <p className="text-[0.8rem] text-white/38 font-medium leading-relaxed max-w-[360px] mb-8">
              {introLine}
            </p>

            {stages.map((s, i) => (
              <div
                key={s.title}
                className="absolute inset-0 flex flex-col justify-center py-24 pr-10 pl-6 transition-all duration-500 ease-out"
                style={{
                  opacity: i === activeStage ? 1 : 0,
                  transform: i === activeStage ? 'translateX(0)' : i < activeStage ? 'translateX(-40px)' : 'translateX(40px)',
                  pointerEvents: i === activeStage ? 'auto' : 'none',
                }}
              >
                <span
                  className="absolute right-8 bottom-24 font-black text-white/[0.035] select-none pointer-events-none leading-none"
                  style={{ fontSize: '14rem' }}
                >
                  {s.number}
                </span>

                {/* Spacer for eyebrow */}
                <div className="h-20" />

                <div className={`inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full text-xs font-bold mb-5 ${s.tagBg} ${s.tagText} border border-white/10`}>
                  <i className={`${s.tagIcon} text-xs`} />
                  {s.tag}
                </div>

                <h2 className="font-black text-white leading-none mb-5" style={{ fontSize: 'clamp(2.8rem, 4.5vw, 4.2rem)' }}>
                  {s.title}
                </h2>

                <p className="text-[0.9rem] text-white/62 font-medium leading-[1.75] mb-7 max-w-[400px]">
                  {s.description}
                </p>

                <ul className="space-y-2.5 mb-8">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5">
                      <i className="ri-checkbox-circle-fill text-orange-400 text-base mt-0.5 shrink-0" />
                      <span className="text-[0.88rem] text-white/75 font-semibold leading-snug">{pt}</span>
                    </li>
                  ))}
                </ul>

                <button className={`self-start inline-flex items-center gap-2 px-6 py-3 ${s.accent} ${s.accentHover} text-white text-sm font-bold rounded-full transition-colors duration-200 cursor-pointer whitespace-nowrap`}>
                  {s.cta}
                  <i className="ri-arrow-right-line" />
                </button>
              </div>
            ))}

            {/* Progress dots */}
            <div className="absolute bottom-10 left-6 flex items-center gap-3">
              {stages.map((s, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (!wrapperRef.current) return;
                    const scrollable = wrapperRef.current.offsetHeight - window.innerHeight;
                    const target = wrapperRef.current.offsetTop + (scrollable / 2.94) * i;
                    window.scrollTo({ top: target, behavior: 'smooth' });
                  }}
                  aria-label={`Etapa ${i + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${i === activeStage ? `w-8 h-2.5 ${s.dotBg}` : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'}`}
                />
              ))}
              <span className="ml-2 text-[11px] text-white/35 font-bold uppercase tracking-widest">
                {stages[activeStage].number} / 03
              </span>
            </div>
          </div>

          {/* RIGHT — no overlapping label, just clean image space */}
          <div className="relative flex items-end justify-end pb-10 pr-8 z-0">
            {/* Stage label anchored to bottom-right of image — no overlap */}
            {stages.map((s, i) => (
              <div
                key={`label-${i}`}
                className={`absolute bottom-10 right-8 transition-all duration-500 ${i === activeStage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-black text-white ${s.accent} backdrop-blur-sm`}>
                  <i className={s.tagIcon} />
                  {s.title}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Continuity */}
      <div className="relative bg-[#080300] px-6 py-16">
        <div className="max-w-[1280px] mx-auto flex justify-center">
          <div className="max-w-2xl text-center">
            <div className="w-10 h-10 flex items-center justify-center mx-auto mb-6 bg-orange-500/15 rounded-full">
              <i className="ri-links-line text-xl text-orange-400" />
            </div>
            <p className="text-[1.05rem] text-white/65 font-medium leading-relaxed font-lora italic">
              „{continuityText}"
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
export default function ParcursEducational() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  return isMobile ? <MobileView /> : <DesktopView />;
}
