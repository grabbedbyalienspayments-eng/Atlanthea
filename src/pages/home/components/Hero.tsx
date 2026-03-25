import { useEffect, useState } from 'react';

const trustBadges = [
  { icon: 'ri-graduation-cap-line', text: 'Grădiniță + Școală + After School' },
  { icon: 'ri-water-flash-line', text: 'Bazin de înot propriu' },
  { icon: 'ri-map-pin-2-line', text: 'Sector 4, București' },
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  return (
    <section id="acasa" className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Background — Ken Burns subtle zoom */}
      <div
        className="absolute inset-0 bg-cover bg-center ken-burns"
        style={{ backgroundImage: "url('/images/b2b2000f26c0.webp')" }}
      />

      {/* Cinematic layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/60 to-stone-950/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-orange-950/65 via-transparent to-transparent" />

      {/* Decorative circles — desktop only */}
      <div className="hidden lg:block absolute right-[-260px] top-1/2 -translate-y-1/2 w-[920px] h-[920px] rounded-full border border-white/[0.025] pointer-events-none" />
      <div className="hidden lg:block absolute right-[-120px] top-1/2 -translate-y-1/2 w-[660px] h-[660px] rounded-full border border-orange-400/[0.055] pointer-events-none" />
      <div className="hidden lg:block absolute right-[20px] top-1/2 -translate-y-1/2 w-[430px] h-[430px] rounded-full border border-orange-300/[0.09] pointer-events-none" />

      {/* Ambient dots — desktop only */}
      <div className="hidden md:block absolute top-32 right-[22%] w-3 h-3 rounded-full bg-orange-400/30 pointer-events-none" style={{ animation: 'pulseSlow 4s ease-in-out infinite' }} />
      <div className="hidden md:block absolute top-52 right-[30%] w-2 h-2 rounded-full bg-amber-300/25 pointer-events-none" style={{ animation: 'pulseSlow 5s ease-in-out infinite 1s' }} />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-5 sm:px-8 lg:px-10 pt-32 sm:pt-36 xl:pt-52 pb-12">
        <div className="max-w-[1280px] mx-auto w-full">
          <div className="max-w-[720px]">

            {/* Eyebrow */}
            <div
              className="transition-all duration-700 ease-out"
              style={{ transitionDelay: '0.1s', opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(28px)' }}
            >
              <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-400/25 text-orange-200 text-[10px] sm:text-[11px] font-bold px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm uppercase tracking-[0.14em] sm:tracking-[0.18em] mb-6 sm:mb-8">
                <i className="ri-map-pin-line text-orange-400 text-xs"></i>
                <span className="hidden sm:inline">Sector 4, București · </span>Grădiniță · Școală · After School
              </div>
            </div>

            {/* H1 */}
            <h1 className="mb-6 sm:mb-7 leading-[0.92]">
              <span
                className="block font-black text-white transition-all duration-700 ease-out"
                style={{ fontSize: 'clamp(2.6rem, 8vw, 5.6rem)', transitionDelay: '0.2s', opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(36px)' }}
              >
                Iepurașul
              </span>
              <span
                className="block font-black transition-all duration-700 ease-out"
                style={{ fontSize: 'clamp(2.6rem, 8vw, 5.6rem)', color: '#fb923c', transitionDelay: '0.33s', opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(36px)' }}
              >
                Bocănilă
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-[0.95rem] sm:text-[1.1rem] text-white/85 font-semibold leading-[1.75] mb-3 sm:mb-4 max-w-[570px] transition-all duration-700 ease-out"
              style={{ transitionDelay: '0.46s', opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(24px)' }}
            >
              Grădiniță, Școală Primară și After School într-un mediu educațional cald, bine organizat și orientat spre dezvoltarea armonioasă a copilului.
            </p>

            {/* Support line */}
            <p
              className="text-[0.88rem] sm:text-[0.95rem] text-white/75 font-medium leading-relaxed mb-8 sm:mb-10 max-w-[510px] transition-all duration-700 ease-out"
              style={{ transitionDelay: '0.56s', opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(20px)' }}
            >
              Program educațional personalizat, facilități reale, bazin de înot și continuitate educațională clară, în Sector 4, București.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12 transition-all duration-700 ease-out"
              style={{ transitionDelay: '0.66s', opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(18px)' }}
            >
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold text-[0.92rem] rounded-full transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-calendar-check-line text-lg"></i>
                Programează o vizită
              </button>
              <button
                onClick={() => scrollTo('parcurs-educational')}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/18 active:bg-white/25 border border-white/28 text-white font-bold text-[0.92rem] rounded-full transition-colors duration-200 cursor-pointer whitespace-nowrap backdrop-blur-sm"
              >
                Descoperă oferta
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>

            {/* Trust badges */}
            <div
              className="flex flex-wrap gap-2 sm:gap-3 transition-all duration-700 ease-out"
              style={{ transitionDelay: '0.76s', opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(16px)' }}
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 bg-white/8 backdrop-blur-sm border border-white/12 text-white/80 text-[0.75rem] sm:text-[0.8rem] font-semibold px-3 sm:px-4 py-2 sm:py-2.5 rounded-full"
                >
                  <i className={`${badge.icon} text-orange-300 text-sm`}></i>
                  {badge.text}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator — hidden on small mobile */}
      <div
        className="relative z-10 hidden sm:flex pb-8 flex-col items-center gap-2 cursor-pointer opacity-60 hover:opacity-90 transition-opacity"
        onClick={() => scrollTo('despre-noi')}
      >
        <div className="w-6 h-9 border border-white/30 rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1 h-2.5 bg-white/60 rounded-full animate-bounce" />
        </div>
        <span className="text-[10px] text-white/40 font-bold uppercase tracking-[0.2em]">Scroll</span>
      </div>

      {/* Intro strip */}
      <div className="relative z-10 w-full bg-orange-500 py-5 sm:py-7 px-5">
        <p className="max-w-3xl mx-auto text-center text-white text-[0.9rem] sm:text-[1.05rem] font-semibold leading-relaxed font-lora italic">
          „Un loc în care copilul este încurajat să crească frumos, să descopere, să învețe și să se dezvolte într-un mediu sigur, prietenos și activ."
        </p>
      </div>

    </section>
  );
}
