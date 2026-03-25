import { useEffect, useRef, useState } from 'react';

interface ActivityGroup {
  icon: string;
  title: string;
  subtitle: string;
  items: { label: string; icon: string }[];
  headerBg: string;
  tagBg: string;
  tagText: string;
  borderColor: string;
}

const groups: ActivityGroup[] = [
  {
    icon: 'ri-book-read-line',
    title: 'Educație și exprimare',
    subtitle: 'Limbaje, arte și comunicare',
    items: [
      { label: 'Curriculum Național', icon: 'ri-graduation-cap-line' },
      { label: 'Limba engleză', icon: 'ri-translate-2-line' },
      { label: 'Limba franceză', icon: 'ri-translate-2-line' },
      { label: 'Limba germană', icon: 'ri-translate-2-line' },
      { label: 'Club de pictură', icon: 'ri-paint-brush-line' },
      { label: 'Club de pian', icon: 'ri-music-2-line' },
      { label: 'Logopedie', icon: 'ri-speak-line' },
    ],
    headerBg: 'bg-orange-500',
    tagBg: 'bg-orange-50',
    tagText: 'text-orange-700',
    borderColor: 'border-orange-200',
  },
  {
    icon: 'ri-run-line',
    title: 'Mișcare și coordonare',
    subtitle: 'Sport, dans și tehnologie',
    items: [
      { label: 'Aikido', icon: 'ri-sword-line' },
      { label: 'Balet', icon: 'ri-music-line' },
      { label: 'Club de dans', icon: 'ri-rhythm-line' },
      { label: 'Street dance', icon: 'ri-headphone-line' },
      { label: 'Multisport', icon: 'ri-football-line' },
      { label: 'Robotică', icon: 'ri-robot-line' },
      { label: 'Bazin de înot', icon: 'ri-water-flash-line' },
    ],
    headerBg: 'bg-amber-500',
    tagBg: 'bg-amber-50',
    tagText: 'text-amber-800',
    borderColor: 'border-amber-200',
  },
  {
    icon: 'ri-lightbulb-line',
    title: 'Dezvoltare personală și creativitate',
    subtitle: 'Caracter, leadership și expresie',
    items: [
      { label: 'Mind Lab', icon: 'ri-brain-line' },
      { label: 'Micul actor', icon: 'ri-film-line' },
      { label: 'Curs de creație', icon: 'ri-scissors-cut-line' },
      { label: 'Atelier de life-coaching și leadership', icon: 'ri-compass-3-line' },
      { label: 'Pașaport pentru succes', icon: 'ri-trophy-line' },
      { label: 'Club de șah', icon: 'ri-apps-2-line' },
    ],
    headerBg: 'bg-rose-500',
    tagBg: 'bg-rose-50',
    tagText: 'text-rose-700',
    borderColor: 'border-rose-200',
  },
];

export default function Activitati() {
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

  return (
    <section id="activitati" className="bg-white py-24 px-6">
      <div className="max-w-[1280px] mx-auto">

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-orange-500 font-bold text-[11px] uppercase tracking-[0.2em] mb-4">
            <span className="w-8 h-px bg-orange-400"></span>
            Explorare și creștere
            <span className="w-8 h-px bg-orange-400"></span>
          </div>
          <h2 className="font-black text-stone-900 leading-tight mb-5" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)' }}>
            Activități, cluburi și dezvoltare completă
          </h2>
          <p className="text-[1rem] text-stone-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Oferta educațională este completată de activități și cluburi care susțin dezvoltarea cognitivă, emoțională, creativă, fizică și socială a copilului.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {groups.map((group, gi) => (
            <div
              key={group.title}
              className={`rounded-2xl border ${group.borderColor} overflow-hidden flex flex-col bg-white`}
              style={{ transitionDelay: `${gi * 100}ms` }}
            >
              <div className={`${group.headerBg} px-6 py-5 flex items-center gap-3`}>
                <div className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-xl">
                  <i className={`${group.icon} text-xl text-white`}></i>
                </div>
                <div>
                  <h3 className="text-white font-black text-[1.02rem] leading-tight">{group.title}</h3>
                  <p className="text-white/72 text-[11px] font-semibold mt-0.5">{group.subtitle}</p>
                </div>
              </div>

              <div className="p-6 flex-1">
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item.label}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[0.82rem] font-semibold ${group.tagBg} ${group.tagText} border ${group.borderColor}`}
                    >
                      <i className={`${item.icon} text-xs`}></i>
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-orange-50 border border-orange-200 rounded-2xl px-10 py-8 text-center">
          <i className="ri-compass-3-line text-2xl text-orange-400 mb-4 block"></i>
          <p className="text-[1rem] text-stone-700 font-medium leading-relaxed font-lora italic">
            „Activitățile sunt integrate astfel încât copilul să poată explora, să își dezvolte încrederea în sine, să își descopere interesele și să învețe într-un mod viu, variat și adaptat vârstei sale."
          </p>
        </div>

      </div>
    </section>
  );
}
