import { useEffect, useRef } from 'react';
import { MapPin, Star } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.classList.add('opacity-0');
    setTimeout(() => {
      el.classList.remove('opacity-0');
      el.classList.add('animate-fadeIn');
    }, 100);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/70 via-[#080808]/50 to-[#080808]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/60 via-transparent to-[#080808]/60" />

      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #1E90FF 0%, transparent 70%)',
        }}
      />

      <div ref={heroRef} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 animate-fadeInUp">
          <MapPin className="w-3.5 h-3.5 text-[#1E90FF]" />
          <span className="text-xs font-medium text-gray-300 tracking-wide">
            Macomb & Oakland Counties
          </span>
        </div>

        <h1 className="font-display font-extrabold text-6xl md:text-8xl lg:text-9xl leading-none mb-6 animate-fadeInUp delay-100">
          <span className="block text-white">PREMIUM</span>
          <span className="block text-gradient">MOBILE DETAILING</span>
          <span className="block text-white">SERVICES</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fadeInUp delay-200">
          Showroom-quality results delivered to your doorstep. Professional detailing, paint correction, and ceramic coatings — wherever you are.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fadeInUp delay-300">
          <a
            href="#book"
            className="btn-primary text-base font-semibold text-white px-8 py-4 rounded-xl w-full sm:w-auto"
          >
            Book Your Detail
          </a>
          <a
            href="#services"
            className="text-base font-semibold text-white border border-white/20 hover:border-[#1E90FF]/60 hover:bg-white/5 px-8 py-4 rounded-xl w-full sm:w-auto transition-all duration-300 text-center"
          >
            View Services
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-fadeInUp delay-400">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[#1E90FF]" fill="currentColor" />
              ))}
            </div>
            <span className="text-sm text-gray-400 font-medium">5-Star Rated Service</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-white/20" />
          <div className="text-sm text-gray-400 font-medium">
            <span className="text-white font-semibold">Est. 2022</span> &mdash; Serving Michigan
          </div>
          <div className="hidden sm:block w-px h-5 bg-white/20" />
          <div className="text-sm text-gray-400 font-medium">
            Call: <a href="tel:586-481-2121" className="text-[#1E90FF] font-semibold hover:text-white transition-colors">586-481-2121</a>
          </div>
        </div>
      </div>

    </section>
  );
}
