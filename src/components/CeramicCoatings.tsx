import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Shield, Droplets } from 'lucide-react';

const features = [
  {
    icon: Sun,
    title: 'UV Protection',
    description:
      'Protects harmful UV rays from fading out your vehicle\'s paint, keeping colors rich and vibrant for years to come.',
  },
  {
    icon: Shield,
    title: 'Scratch Resistant',
    description:
      'Forms a glossy, durable layer that protects your vehicle\'s paint from the harsh outdoor elements, minor scratches, and swirl marks.',
  },
  {
    icon: Droplets,
    title: 'Hydrophobic Properties',
    description:
      'Repels dirt, dust, & water off of your vehicle\'s paint making maintenance a breeze and keeping your car cleaner, longer.',
  },
];

export default function CeramicCoatings() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="ceramic" className="py-28 px-6 relative" ref={sectionRef}>
      <div className="section-divider mb-28" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div
              className="reveal relative rounded-2xl overflow-hidden"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.8s ease' }}
            >
              <img
                src="/ceramic-coatings-detail.png"
                alt="Professional machine polishing on a vehicle — prep for ceramic coating protection"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/50 to-transparent rounded-2xl" />
            </div>

            <div
              className="reveal absolute -bottom-6 -right-6 glass rounded-2xl p-5"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 1s ease' }}
            >
              <div className="text-center">
                <p className="font-display font-extrabold text-3xl text-white mb-1">9H</p>
                <p className="text-[#1E90FF] text-xs font-semibold tracking-wide">Hardness Rating</p>
              </div>
            </div>

            <div
              className="reveal absolute -bottom-6 -left-6 glass rounded-2xl p-5 max-w-[200px]"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 1s ease' }}
            >
              <div className="text-center">
                <p className="font-display font-extrabold text-3xl text-white mb-1">5yr+</p>
                <p className="text-[#1E90FF] text-xs font-semibold tracking-wide">Protection Life</p>
              </div>
            </div>

            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at 60% 40%, rgba(30,144,255,0.08) 0%, transparent 60%)',
              }}
            />
          </div>

          <div className="order-1 lg:order-2">
            <p
              className="reveal text-[#1E90FF] text-sm font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease' }}
            >
              Premium Protection
            </p>
            <h2
              className="reveal font-display text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease' }}
            >
              Ceramic <span className="text-gradient">Coatings</span>
            </h2>
            <p
              className="reveal text-gray-400 text-base leading-relaxed mb-10"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease' }}
            >
              Our professional-grade ceramic coatings provide unmatched, long-lasting protection for your vehicle's paint. A single application delivers years of showroom-quality shine and durability.
            </p>

            <div className="space-y-6">
              {features.map((feature, i) => (
                <div
                  key={feature.title}
                  className="reveal flex gap-5 group"
                  style={{ opacity: 0, transform: 'translateY(24px)', transition: `all 0.7s ease ${i * 0.15}s` }}
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-[#1E90FF]/10 border border-[#1E90FF]/20 flex items-center justify-center transition-all duration-300 group-hover:bg-[#1E90FF]/20 group-hover:border-[#1E90FF]/40">
                    <feature.icon className="w-6 h-6 text-[#1E90FF]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1.5">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="reveal mt-10"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease 0.5s' }}
            >
              <Link
                to="/ceramic-coating"
                className="btn-primary inline-block text-sm font-semibold text-white px-7 py-3.5 rounded-xl"
              >
                Get a Ceramic Coating
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
