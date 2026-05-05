import { useEffect, useRef } from 'react';
import { Award, Clock, ThumbsUp } from 'lucide-react';

const stats = [
  { icon: Clock, value: '2022', label: 'Founded' },
  { icon: Award, value: '100%', label: 'Satisfaction' },
  { icon: ThumbsUp, value: '500+', label: 'Happy Clients' },
];

export default function About() {
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
              }, i * 120);
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
    <section id="about" className="py-28 px-6 relative" ref={sectionRef}>
      <div className="section-divider mb-28" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="reveal text-[#1E90FF] text-sm font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease' }}
            >
              Our Story
            </p>
            <h2
              className="reveal font-display text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease' }}
            >
              Welcome to<br />
              <span className="text-gradient">Extreme Clean</span><br />
              Auto Detailing
            </h2>
            <p
              className="reveal text-gray-400 text-base leading-relaxed mb-6"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease' }}
            >
              At Extreme Clean Auto Detailing, we began with a simple goal: to bring professional, high-quality detailing directly to our customers. Starting out in 2022 with just a Chevy Equinox, a vacuum, and an interior cleaner, our passion for perfecting every vehicle has driven us to grow into experts in paint correction and ceramic coating.
            </p>
            <p
              className="reveal text-gray-400 text-base leading-relaxed mb-10"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease' }}
            >
              Today, we proudly offer premium, on-the-go detailing services, delivering showroom-quality results right at your doorstep. Serving Macomb Township and the surrounding areas, our mission is to provide convenience, excellence, and a personal touch, ensuring your vehicle looks its best wherever you are.
            </p>
            <a
              href="#book"
              className="reveal btn-primary inline-block text-sm font-semibold text-white px-7 py-3.5 rounded-xl"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease' }}
            >
              Schedule a Detail
            </a>
          </div>

          <div className="relative">
            <div
              className="reveal rounded-2xl overflow-hidden"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.8s ease' }}
            >
              <img
                src="https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Professional car detailing"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 to-transparent rounded-2xl" />
            </div>

            <div
              className="reveal absolute -bottom-6 -left-6 glass rounded-2xl p-5 max-w-[220px]"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.9s ease' }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1E90FF] to-[#0055cc] flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Certified Pro</p>
                  <p className="text-gray-500 text-xs">Paint Correction</p>
                </div>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Expert-level paint correction and ceramic coating specialists.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10 mt-24 max-w-6xl mx-auto w-full">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="reveal glass rounded-2xl p-6 text-center card-hover border border-white/5"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: `all 0.7s ease ${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#1E90FF]/10 border border-[#1E90FF]/20 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-[#1E90FF]" />
              </div>
              <p className="font-display font-extrabold text-3xl text-white mb-1">{stat.value}</p>
              <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
