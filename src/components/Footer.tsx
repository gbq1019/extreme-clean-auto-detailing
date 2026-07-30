import { Phone, Instagram, Facebook, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoUrl from '../assets/extreme-clean-logo.avif';

const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 text-gray-400 hover:text-white transition-colors"
    aria-hidden
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Footer() {
  const links = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Ceramic Coatings', to: '/ceramic-coating' },
    { label: 'Book Now', to: '/contact' },
  ];

  return (
    <footer className="border-t border-white/5 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-5 group w-fit -ml-2 md:ml-0">
              <div className="h-10 w-[180px] overflow-hidden flex items-center transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(30,144,255,0.25)]">
                <img
                  src={logoUrl}
                  alt="Extreme Clean Auto Detailing"
                  className="w-full h-full object-contain"
                  draggable={false}
                />
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
              Premium mobile detailing services delivered to your doorstep. Serving Macomb &amp; Oakland Counties since 2022.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/extremeclean.autodetailing/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 glass border border-white/10 rounded-lg flex items-center justify-center hover:border-[#1E90FF]/50 hover:bg-[#1E90FF]/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100084377522579"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 glass border border-white/10 rounded-lg flex items-center justify-center hover:border-[#1E90FF]/50 hover:bg-[#1E90FF]/10 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.tiktok.com/@extreme_clean_detailing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 glass border border-white/10 rounded-lg flex items-center justify-center hover:border-[#1E90FF]/50 hover:bg-[#1E90FF]/10 transition-all duration-300"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.to + link.label}>
                  <Link
                    to={link.to}
                    className="text-gray-500 text-sm hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Contact</h4>
            <div className="space-y-4">
              <a
                href="tel:586-481-2121"
                className="flex items-center gap-3 text-gray-500 text-sm hover:text-white transition-colors duration-300 group"
              >
                <Phone className="w-4 h-4 text-[#1E90FF] shrink-0" />
                586-481-2121
              </a>
              <div className="flex items-start gap-3 text-gray-500 text-sm">
                <MapPin className="w-4 h-4 text-[#1E90FF] shrink-0 mt-0.5" />
                <span>Macomb &amp; Oakland Counties, Michigan</span>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-gray-600 text-xs uppercase tracking-widest mb-3">Hours</p>
              <div className="space-y-1.5 text-sm text-gray-500">
                <div className="flex justify-between">
                  <span>Mon – Fri</span>
                  <span className="text-gray-400">8am – 6pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-gray-400">Closed</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-gray-400">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Extreme Clean Auto Detailing. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="text-gray-600 text-xs hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <span className="text-gray-700 text-xs">&middot;</span>
            <Link to="/terms-and-conditions" className="text-gray-600 text-xs hover:text-white transition-colors duration-300">
              Terms and Conditions
            </Link>
          </div>
          <p className="text-gray-600 text-xs">
            Serving Macomb Township & Surrounding Areas
          </p>
        </div>
      </div>
    </footer>
  );
}
