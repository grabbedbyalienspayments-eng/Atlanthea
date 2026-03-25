import { useState, FormEvent, useEffect, useRef } from 'react';

const FORM_URL = 'https://readdy.ai/api/form/d71ata8hb0rqicn68e3g';

const contactCards = [
  { icon: 'ri-phone-line', label: 'Telefon', value: '0722.239.508', href: 'tel:+40722239508', iconBg: 'bg-orange-100', iconColor: 'text-orange-600' },
  { icon: 'ri-mail-line', label: 'Email', value: 'office@iepurasulbocanila.ro', href: 'mailto:office@iepurasulbocanila.ro', iconBg: 'bg-amber-100', iconColor: 'text-amber-700' },
  { icon: 'ri-map-pin-2-line', label: 'Adresă', value: 'Strada Iarba Câmpului nr. 91, sector 4, București', href: '#', iconBg: 'bg-rose-100', iconColor: 'text-rose-600' },
  { icon: 'ri-user-line', label: 'Persoane de contact', value: 'Dron Andreea · Dron Ioana', href: '#', iconBg: 'bg-emerald-100', iconColor: 'text-emerald-700' },
];

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  gdpr?: string;
}

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [gdpr, setGdpr] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!name.trim()) errs.name = 'Câmpul Nume este obligatoriu.';
    if (!phone.trim() || !/^[\d\s+\-.]+$/.test(phone.trim())) errs.phone = 'Numărul de telefon nu este valid.';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errs.email = 'Adresa de email nu este validă.';
    if (!message.trim()) errs.message = 'Mesajul este obligatoriu.';
    if (!gdpr) errs.gdpr = 'Vă rugăm să acceptați politica de confidențialitate.';
    return errs;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (honeypot !== '') return;
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    setSubmitError(false);
    try {
      const params = new URLSearchParams();
      params.append('nume', name);
      params.append('telefon', phone);
      params.append('email', email);
      params.append('mesaj', message);
      const res = await fetch(FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });
      if (res.ok) {
        setSuccess(true);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-24 px-6">
      <div className="max-w-[1280px] mx-auto">

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-orange-500 font-bold text-sm uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-orange-400"></span>
            Suntem aproape de dumneavoastră
            <span className="w-8 h-px bg-orange-400"></span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-stone-800 leading-tight mb-5">
            Contact
          </h2>
          <p className="text-lg text-stone-500 font-medium max-w-xl mx-auto leading-relaxed">
            Ne bucurăm să răspundem oricărei întrebări și să programăm o vizită la Iepurașul Bocănilă.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contactCards.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="flex flex-col gap-3 p-4 sm:p-5 bg-[#FFFBF5] border border-stone-100 rounded-xl hover:border-orange-200 transition-colors duration-200 cursor-pointer group"
            >
              <div className={`w-10 h-10 flex items-center justify-center rounded-xl ${c.iconBg}`}>
                <i className={`${c.icon} text-xl ${c.iconColor}`}></i>
              </div>
              <div>
                <p className="text-xs font-bold text-stone-400 uppercase tracking-wide mb-1">{c.label}</p>
                <p className="text-sm font-semibold text-stone-700 leading-snug group-hover:text-orange-600 transition-colors">{c.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col gap-5">
            <div className="rounded-2xl overflow-hidden flex-1 min-h-[300px]">
              <iframe
                title="Locația Iepurașul Bocănilă"
                src="https://maps.google.com/maps?q=Strada+Iarba+Campului+91+Sector+4+Bucuresti+Romania&output=embed"
                width="100%"
                height="360"
                loading="lazy"
                className="w-full h-[360px] border-0 rounded-2xl"
              />
            </div>
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 flex items-center justify-center bg-orange-100 rounded-lg shrink-0">
                  <i className="ri-map-pin-line text-lg text-orange-600"></i>
                </div>
                <div>
                  <p className="text-sm font-bold text-stone-700 mb-1">Strada Iarba Câmpului nr. 91, sector 4, București</p>
                  <p className="text-xs text-stone-500 font-medium">La intersecția dintre Nitu Vasile cu bd. Alexandru Obregia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#FFFBF5] border border-orange-100 rounded-2xl p-8">
            <h3 className="text-xl font-black text-stone-800 mb-6 flex items-center gap-2">
              <i className="ri-calendar-check-line text-orange-500"></i>
              Programează o vizită
            </h3>

            {success ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                <div className="w-16 h-16 flex items-center justify-center bg-emerald-100 rounded-full">
                  <i className="ri-check-line text-3xl text-emerald-600"></i>
                </div>
                <h4 className="text-xl font-black text-stone-800">Mesaj trimis cu succes!</h4>
                <p className="text-stone-500 text-sm font-medium leading-relaxed max-w-xs">
                  Vă mulțumim! Vă vom contacta în cel mai scurt timp pentru a confirma vizita.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                data-readdy-form
                noValidate
                className="flex flex-col gap-4"
              >
                <input type="text" name="website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" />

                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-1.5">Nume *</label>
                  <input
                    type="text"
                    name="nume"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Numele dumneavoastră"
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-medium bg-white text-stone-800 placeholder:text-stone-400 outline-none transition-colors focus:border-orange-400 ${errors.name ? 'border-red-400' : 'border-stone-200'}`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500 font-medium">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-1.5">Telefon *</label>
                    <input
                      type="tel"
                      name="telefon"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="07xx xxx xxx"
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-medium bg-white text-stone-800 placeholder:text-stone-400 outline-none transition-colors focus:border-orange-400 ${errors.phone ? 'border-red-400' : 'border-stone-200'}`}
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-500 font-medium">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-1.5">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@exemplu.ro"
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-medium bg-white text-stone-800 placeholder:text-stone-400 outline-none transition-colors focus:border-orange-400 ${errors.email ? 'border-red-400' : 'border-stone-200'}`}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500 font-medium">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-1.5">Mesaj *</label>
                  <textarea
                    name="mesaj"
                    value={message}
                    onChange={(e) => { if (e.target.value.length <= 500) setMessage(e.target.value); }}
                    placeholder="Scrieți-ne câteva detalii despre copilul dumneavoastră și ce program vă interesează..."
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-medium bg-white text-stone-800 placeholder:text-stone-400 outline-none transition-colors focus:border-orange-400 resize-none ${errors.message ? 'border-red-400' : 'border-stone-200'}`}
                  />
                  <div className="flex justify-between mt-1">
                    {errors.message ? <p className="text-xs text-red-500 font-medium">{errors.message}</p> : <span />}
                    <p className={`text-xs font-medium ${message.length >= 480 ? 'text-red-400' : 'text-stone-400'}`}>{message.length}/500</p>
                  </div>
                </div>

                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="gdpr"
                      checked={gdpr}
                      onChange={(e) => setGdpr(e.target.checked)}
                      className="mt-0.5 w-4 h-4 accent-orange-500 cursor-pointer shrink-0"
                    />
                    <span className="text-xs text-stone-500 font-medium leading-relaxed">
                      Sunt de acord cu prelucrarea datelor cu caracter personal conform{' '}
                      <span className="text-orange-500 font-bold">politicii de confidențialitate</span> și cu transmiterea acestora în scopul soluționării cererii mele.
                    </span>
                  </label>
                  {errors.gdpr && <p className="mt-1 text-xs text-red-500 font-medium">{errors.gdpr}</p>}
                </div>

                {submitError && (
                  <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    <i className="ri-error-warning-line text-red-500"></i>
                    <p className="text-sm text-red-600 font-medium">A apărut o eroare. Vă rugăm să încercați din nou sau să ne contactați direct.</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-bold text-base rounded-full transition-colors duration-200 cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <><i className="ri-loader-4-line animate-spin"></i> Se trimite...</>
                  ) : (
                    <><i className="ri-send-plane-line"></i> Trimite mesajul</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
