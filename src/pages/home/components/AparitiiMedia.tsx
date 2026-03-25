import { useEffect, useRef, useState } from 'react';

const publications = [
  { name: 'AGERPRES', desc: 'Agenția Națională de Presă' },
  { name: 'Wall-Street', desc: 'Publicație de business' },
  { name: 'Centrul de Presă', desc: 'Portal de comunicare' },
  { name: 'Comunicate de Presă', desc: 'Distribuție media' },
  { name: 'PRwave', desc: 'Platformă PR & comunicare' },
];

export default function AparitiiMedia() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="aparitii-media" className="bg-white py-14 px-6 border-y border-stone-100">
      <div className="max-w-[1280px] mx-auto">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="shrink-0">
            <p className="text-[11px] text-stone-400 font-black uppercase tracking-[0.2em] mb-1">Apariții media</p>
            <h2 className="text-xl font-black text-stone-700">Prezență în presă</h2>
          </div>

          <div
            ref={ref}
            className={`flex flex-wrap items-center justify-center gap-3 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {publications.map((pub, i) => (
              <div
                key={pub.name}
                className="flex items-center gap-2.5 px-5 py-3 bg-stone-50 border border-stone-200 rounded-xl hover:border-orange-300 hover:bg-orange-50/50 transition-colors duration-200 cursor-default"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <i className="ri-newspaper-line text-stone-400 text-sm"></i>
                <div>
                  <p className="text-sm font-black text-stone-700 leading-none">{pub.name}</p>
                  <p className="text-[10px] text-stone-400 font-medium mt-0.5">{pub.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
