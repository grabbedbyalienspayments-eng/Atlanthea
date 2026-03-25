import { useState, useEffect } from 'react';

const LOGO_URL = '/images/a9d12ddd459b.webp';

const navItems = [
  { label: 'Acasă', href: '#acasa' },
  { label: 'Despre noi', href: '#despre-noi' },
  { label: 'Parcurs educațional', href: '#parcurs-educational' },
  { label: 'Facilități', href: '#facilitati' },
  { label: 'Programe și tarife', href: '#programe-tarife' },
  { label: 'Activități', href: '#activitati' },
  { label: 'Înscriere', href: '#inscriere' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? 'bg-white py-3 border-b border-orange-100' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between gap-4 relative">

        {/* Invisible spacer — mobile only — keeps hamburger right-aligned */}
        <div className="xl:hidden w-10 h-10 shrink-0" aria-hidden="true" />

        {/* Logo — always centered on mobile, left on desktop */}
        <a
          href="#acasa"
          onClick={(e) => { e.preventDefault(); handleNavClick('#acasa'); }}
          className="absolute left-1/2 -translate-x-1/2 xl:relative xl:left-auto xl:translate-x-0 flex items-center gap-2 cursor-pointer shrink-0 z-10"
        >
          <img
            src={LOGO_URL}
            alt="Iepurașul Bocănilă"
            className={`w-auto object-contain transition-all duration-500 ease-in-out ${
              scrolled ? 'h-14' : 'h-20 xl:h-28'
            }`}
          />
        </a>

        <nav className="hidden xl:flex items-center gap-0.5">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
              className={`px-3 py-2 text-[13.5px] font-700 rounded-md transition-colors duration-200 cursor-pointer whitespace-nowrap font-bold ${
                scrolled
                  ? 'text-stone-700 hover:text-orange-500 hover:bg-orange-50'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
          className="hidden xl:flex items-center px-5 py-2.5 bg-orange-500 text-white text-sm font-bold rounded-full hover:bg-orange-600 transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0"
        >
          Programează o vizită
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`xl:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors cursor-pointer shrink-0 ${
            scrolled ? 'text-stone-700 hover:bg-orange-50' : 'text-white hover:bg-white/10'
          }`}
          aria-label="Meniu"
        >
          <i className={`text-2xl ${mobileOpen ? 'ri-close-line' : 'ri-menu-3-line'}`}></i>
        </button>
      </div>

      {mobileOpen && (
        <div className="xl:hidden bg-white border-t border-orange-100 py-4 animate-fade-in">
          <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-0.5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className="px-4 py-3 text-stone-700 hover:text-orange-500 hover:bg-orange-50 font-semibold text-sm cursor-pointer rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="mt-3 px-5 py-3 bg-orange-500 text-white text-sm font-bold rounded-full text-center cursor-pointer whitespace-nowrap hover:bg-orange-600 transition-colors"
            >
              Programează o vizită
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
