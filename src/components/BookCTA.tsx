import { useEffect, useRef } from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export default function BookCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll('.reveal');
            children.forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="book" className="py-28 px-6 relative" ref={sectionRef}>
      <div className="section-divider mb-28" />

      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src="https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Car detail background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#080808]/90 via-[#0a1628]/85 to-[#080808]/90" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 100%, rgba(30,144,255,0.15) 0%, transparent 60%)',
            }}
          />

          <div className="relative z-10 py-20 px-8 md:px-16 text-center">
            <p
              className="reveal text-[#1E90FF] text-sm font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease' }}
            >
              Ready to Get Started?
            </p>
            <h2
              className="reveal font-display text-5xl md:text-7xl font-extrabold text-white mb-5 leading-tight"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease' }}
            >
              Book With Us <span className="text-gradient">Today.</span>
            </h2>
            <p
              className="reveal text-gray-300 text-lg max-w-xl mx-auto mb-12"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease' }}
            >
              Contact us to schedule your premium detail or ceramic coating. We'll bring the showroom to you.
            </p>

            <div
              className="reveal grid sm:grid-cols-2 gap-4 max-w-sm mx-auto mb-12"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease' }}
            >
              <a
                href="tel:586-481-2121"
                className="glass border border-white/10 rounded-2xl p-5 hover:border-[#1E90FF]/40 transition-all duration-300 group hover:bg-[#1E90FF]/5"
              >
                <Phone className="w-6 h-6 text-[#1E90FF] mx-auto mb-2 transition-transform duration-300 group-hover:scale-110" />
                <p className="text-white text-sm font-semibold">Call Us</p>
                <p className="text-gray-400 text-xs mt-1">586-481-2121</p>
              </a>
              <a
                href="sms:586-481-2121"
                className="glass border border-white/10 rounded-2xl p-5 hover:border-[#1E90FF]/40 transition-all duration-300 group hover:bg-[#1E90FF]/5"
              >
                <MessageSquare className="w-6 h-6 text-[#1E90FF] mx-auto mb-2 transition-transform duration-300 group-hover:scale-110" />
                <p className="text-white text-sm font-semibold">Text Us</p>
                <p className="text-gray-400 text-xs mt-1">Quick response</p>
              </a>
            </div>

            <div
              className="reveal"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease 0.3s' }}
            >
              <a
                href="tel:586-481-2121"
                className="btn-primary inline-flex items-center gap-3 text-base font-bold text-white px-10 py-4 rounded-xl"
              >
                <Phone className="w-5 h-5" />
                586-481-2121
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
