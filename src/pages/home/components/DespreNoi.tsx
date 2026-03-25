import { useEffect, useRef, useState } from 'react';

export default function DespreNoi() {
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
    <section id="despre-noi" className="bg-[#FFFBF5] overflow-hidden">
      <div ref={ref} className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[42%_58%] min-h-[660px]">

        {/* Left — image panel, full height */}
        <div
          className={`relative overflow-hidden transition-all duration-800 ease-out ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        >
          <img
            src="/images/66891633c68d.webp"
            alt="Atmosfera la Iepurașul Bocănilă"
            loading="lazy"
            className="w-full h-full object-cover object-top min-h-[480px] lg:min-h-full"
          />
          {/* Overlay gradient right edge for blend */}
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#FFFBF5] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFFBF5]/30 via-transparent to-transparent" />

          {/* Floating stat card — positioned to avoid overflow */}
          <div className="absolute bottom-8 right-4 sm:right-[-20px] bg-orange-500 text-white rounded-2xl px-5 py-4 z-10">
            <div className="text-4xl font-black leading-none mb-1">10+</div>
            <div className="text-xs font-semibold leading-snug max-w-[130px]">ani de educație cu suflet în Sector 4</div>
          </div>

          {/* Floating warmth badge */}
          <div className="absolute top-8 right-4 bg-white/90 backdrop-blur-sm text-orange-800 rounded-xl px-3 sm:px-4 py-3 flex items-center gap-2 sm:gap-2.5 z-10">
            <div className="w-8 h-8 flex items-center justify-center bg-amber-100 rounded-lg">
              <i className="ri-heart-fill text-amber-600 text-lg"></i>
            </div>
            <div>
              <div className="text-xs font-black">Familie</div>
              <div className="text-[10px] text-stone-500 font-semibold">nu instituție</div>
            </div>
          </div>
        </div>

        {/* Right — editorial text */}
        <div
          className={`flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20 transition-all duration-700 ease-out delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-orange-400"></span>
            <span className="text-[11px] text-orange-500 font-black uppercase tracking-[0.2em]">Cine suntem</span>
          </div>

          <h2
            className="font-black text-stone-900 leading-[0.95] mb-10"
            style={{ fontSize: 'clamp(2.6rem, 4vw, 4rem)' }}
          >
            Despre noi
          </h2>

          <div className="space-y-6 mb-10">
            <p className="text-[1.02rem] text-stone-700 leading-[1.8] font-medium">
              <strong className="text-orange-600">Grădinița și Școala Primară Iepurașul Bocănilă</strong> a apărut din dorința de a crea un loc în care copilul să se simtă ca în familie, să fie încurajat să se dezvolte armonios și să fie privit cu atenție, grijă și respect.
            </p>
            <p className="text-[0.98rem] text-stone-500 leading-[1.85]">
              Punem accent pe un mediu educațional bine organizat, pe relația apropiată cu părinții, pe dezvoltarea intelectuală, emoțională și fizică a copilului și pe continuitatea unui parcurs educațional coerent: de la grădiniță la școală primară și after school.
            </p>
            <p className="text-[0.98rem] text-stone-500 leading-[1.85]">
              Iepurașul Bocănilă înseamnă educație, implicare, activitate, siguranță și o atmosferă în care copilul poate învăța, se poate adapta și poate crește cu încredere.
            </p>
          </div>

          {/* Service mini-cards — horizontal row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: 'ri-sun-line', label: 'Grădiniță', sub: '3–6 ani', bg: 'bg-orange-50', border: 'border-orange-200', ic: 'text-orange-500' },
              { icon: 'ri-graduation-cap-line', label: 'Școală Primară', sub: 'Cls. I–IV', bg: 'bg-amber-50', border: 'border-amber-200', ic: 'text-amber-600' },
              { icon: 'ri-time-line', label: 'After School', sub: '11:30–18:30', bg: 'bg-rose-50', border: 'border-rose-200', ic: 'text-rose-500' },
            ].map((item) => (
              <div key={item.label} className={`flex flex-col items-center text-center gap-2 p-4 rounded-xl border ${item.border} ${item.bg}`}>
                <div className={`w-9 h-9 flex items-center justify-center rounded-lg bg-white`}>
                  <i className={`${item.icon} text-xl ${item.ic}`}></i>
                </div>
                <span className="text-sm font-black text-stone-700">{item.label}</span>
                <span className="text-xs text-stone-400 font-semibold">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
