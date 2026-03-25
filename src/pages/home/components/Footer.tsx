const LOGO_URL = '/images/a9d12ddd459b.webp';

const navLinks = [
  { label: 'Acasă', href: '#acasa' },
  { label: 'Despre noi', href: '#despre-noi' },
  { label: 'Parcurs educațional', href: '#parcurs-educational' },
  { label: 'Facilități', href: '#facilitati' },
  { label: 'Activități', href: '#activitati' },
  { label: 'Programe și tarife', href: '#programe-tarife' },
  { label: 'Bazin de înot', href: '#bazin-inot' },
  { label: 'Înscriere', href: '#inscriere' },
  { label: 'Contact', href: '#contact' },
];

const contactLinks = [
  { icon: 'ri-phone-line', label: '0722.239.508', href: 'tel:+40722239508' },
  { icon: 'ri-mail-line', label: 'office@iepurasulbocanila.ro', href: 'mailto:office@iepurasulbocanila.ro' },
  { icon: 'ri-map-pin-2-line', label: 'Str. Iarba Câmpului nr. 91, sector 4, București', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  const col1 = navLinks.slice(0, 5);
  const col2 = navLinks.slice(5);

  return (
    <footer id="footer" className="bg-stone-950 text-white px-6 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto">

        {/* Top orange accent bar */}
        <div className="w-16 h-1 bg-orange-500 rounded-full mb-14" />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 pb-14 border-b border-white/8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <a
              href="#acasa"
              onClick={(e) => { e.preventDefault(); handleNav('#acasa'); }}
              className="inline-block mb-5 cursor-pointer"
            >
              <img src={LOGO_URL} alt="Iepurașul Bocănilă" className="h-14 w-auto object-contain" />
            </a>
            <h3 className="text-base font-black text-white mb-2">Iepurașul Bocănilă</h3>
            <p className="text-[0.82rem] text-white/50 font-medium leading-relaxed mb-6">
              Un program educațional personalizat pe nevoile și cerințele cele mai noi din domeniu.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Grădiniță', 'Școală Primară', 'After School', 'Bazin de înot'].map((tag) => (
                <span key={tag} className="text-[11px] font-semibold px-2.5 py-1 bg-white/8 rounded-full text-white/55">{tag}</span>
              ))}
            </div>
          </div>

          {/* Nav col 1 */}
          <div>
            <h4 className="text-[11px] font-black text-white/50 uppercase tracking-[0.2em] mb-5">Navigare</h4>
            <ul className="space-y-3">
              {col1.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                    className="text-[0.82rem] text-white/55 hover:text-orange-400 font-medium transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav col 2 */}
          <div>
            <h4 className="text-[11px] font-black text-white/50 uppercase tracking-[0.2em] mb-5">&nbsp;</h4>
            <ul className="space-y-3">
              {col2.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                    className="text-[0.82rem] text-white/55 hover:text-orange-400 font-medium transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-black text-white/50 uppercase tracking-[0.2em] mb-5">Contact</h4>
            <ul className="space-y-4">
              {contactLinks.map((cl) => (
                <li key={cl.label}>
                  <a href={cl.href} className="flex items-start gap-3 group cursor-pointer">
                    <div className="w-8 h-8 flex items-center justify-center bg-white/8 rounded-lg shrink-0 group-hover:bg-orange-500/25 transition-colors">
                      <i className={`${cl.icon} text-sm text-white/50 group-hover:text-orange-400`}></i>
                    </div>
                    <span className="text-[0.8rem] text-white/55 group-hover:text-white/85 font-medium leading-snug transition-colors mt-1">{cl.label}</span>
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-white/8 rounded-lg shrink-0">
                    <i className="ri-user-line text-sm text-white/50"></i>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/35 font-bold uppercase tracking-wider mb-0.5">Persoane de contact</p>
                    <p className="text-[0.8rem] text-white/55 font-medium">Dron Andreea · Dron Ioana</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[0.78rem] text-white/30 font-medium">
            © {year} Iepurașul Bocănilă · Toate drepturile rezervate
          </p>
          <a
            href="https://websiteon.ro/"
            target="_blank"
            rel="nofollow noreferrer"
            className="flex items-center gap-1.5 text-[0.78rem] text-white/30 hover:text-white/60 font-medium transition-colors duration-200 cursor-pointer"
          >
            <i className="ri-code-s-slash-line text-orange-400/50 text-sm"></i>
            Website creat de <strong className="text-orange-400/70 ml-1">WebsiteON</strong>
          </a>
        </div>

      </div>
    </footer>
  );
}
