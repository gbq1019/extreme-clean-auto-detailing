import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logoUrl from '../assets/extreme-clean-logo.avif';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { pathname } = useLocation();

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  const isServicesActive = pathname === '/services' || pathname === '/ceramic-coating';

  const navLinkClass = (active: boolean) =>
    `nav-link text-base font-medium tracking-wide transition-colors duration-300 ${
      active ? 'text-white nav-link-active' : 'text-gray-300 hover:text-white'
    }`;

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent py-5">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 relative flex items-center justify-center md:grid md:grid-cols-3 md:items-center">

        {/* LEFT: Home + Services dropdown */}
        <nav className="hidden md:flex items-center gap-8 justify-self-start">
          <Link to="/" className={navLinkClass(pathname === '/')}>
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={scheduleClose}
          >
            <Link
              to="/services"
              className={`${navLinkClass(isServicesActive)} flex items-center gap-1`}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              onFocus={openDropdown}
              onBlur={scheduleClose}
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
              />
            </Link>

            <div
              className={`absolute top-full left-0 mt-3 w-52 z-50 transition-all duration-200 ${
                dropdownOpen
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-1 pointer-events-none'
              }`}
              onMouseEnter={openDropdown}
              onMouseLeave={scheduleClose}
              role="menu"
            >
              <div className="bg-[#0d0d0d] border border-white/10 rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.7)] overflow-hidden">
                <Link
                  to="/services"
                  className="dropdown-item"
                  role="menuitem"
                  onClick={() => setDropdownOpen(false)}
                >
                  Mobile Detailing
                </Link>
                <Link
                  to="/ceramic-coating"
                  className="dropdown-item"
                  role="menuitem"
                  onClick={() => setDropdownOpen(false)}
                >
                  Ceramic Coatings
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* CENTER: Logo */}
        <Link to="/" className="flex items-center group md:justify-self-center">
          <div className="h-[68px] w-[240px] sm:w-[300px] overflow-hidden flex items-center transition-all duration-300 group-hover:drop-shadow-[0_0_18px_rgba(30,144,255,0.25)]">
            <img
              src={logoUrl}
              alt="Extreme Clean Auto Detailing"
              className="w-full h-full object-contain"
              draggable={false}
            />
          </div>
        </Link>

        {/* RIGHT: Contact Us + Phone */}
        <div className="hidden md:flex items-center gap-8 justify-self-end">
          <Link to="/contact" className={navLinkClass(pathname === '/contact')}>
            Contact Us
          </Link>
          <a
            href="tel:586-481-2121"
            className="text-base font-bold text-[#1E90FF] hover:text-white transition-colors duration-300 tracking-wide whitespace-nowrap"
          >
            586-481-2121
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden absolute right-3 text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu - overlay from top with glass style */}
      {menuOpen && (
        <div className="md:hidden fixed inset-x-0 top-0 z-50 bg-[#0d0d0d]/98 backdrop-blur-xl px-6 pt-6 pb-6 flex flex-col gap-5">
          {/* Close button at top right */}
          <button
            className="absolute top-5 right-3 text-white p-2"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Logo at top */}
          <Link
            to="/"
            className="flex justify-center mb-2"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src={logoUrl}
              alt="Extreme Clean Auto Detailing"
              className="h-[60px] w-auto object-contain"
              draggable={false}
            />
          </Link>

          <Link
            to="/"
            className="text-gray-300 hover:text-white font-medium text-base transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <div>
            <button
              className="w-full flex items-center justify-between text-gray-300 hover:text-white font-medium text-base transition-colors"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="mt-3 ml-4 flex flex-col gap-4 border-l border-white/10 pl-4">
                <Link
                  to="/services"
                  className="text-white text-sm font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Mobile Detailing
                </Link>
                <Link
                  to="/ceramic-coating"
                  className="text-white text-sm font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Ceramic Coatings
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="text-gray-300 hover:text-white font-medium text-base transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>

          <a
            href="tel:586-481-2121"
            className="btn-primary text-sm font-semibold text-white px-5 py-3 rounded-lg text-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            586-481-2121
          </a>
        </div>
      )}
    </header>
  );
}
