import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SprayCan, Car, Navigation, ArrowRight } from 'lucide-react';

type ServiceItem = {
  icon: typeof SprayCan;
  title: string;
  description: string;
  image: string;
  imageFit?: 'cover' | 'contain';
  imagePosition?: string;
  features: string[];
};

const services: ServiceItem[] = [
  {
    icon: SprayCan,
    title: 'Interior Detailing',
    description:
      'From thorough vacuuming to deep stain removal, we will get your vehicle looking showroom new. Every surface meticulously cleaned and conditioned.',
    image: '/projects/interior-detailing-dashboard-2026-04-22.png',
    imagePosition: 'center 32%',
    features: ['Deep vacuuming', 'Stain removal', 'Surface conditioning', 'Odor elimination'],
  },
  {
    icon: Car,
    title: 'Exterior Detailing',
    description:
      'Transform your vehicle\'s appearance with our premium exterior detailing services, restoring its shine and protecting its finish.',
    image: '/projects/exterior-detailing-cars-2026-04-22.png',
    features: ['Hand wash & dry', 'Clay bar treatment', 'Paint correction', 'Polish & wax'],
  },
  {
    icon: Navigation,
    title: 'We Come To You',
    description:
      'Bringing professional-grade detailing to your driveway. Your convenience is our priority — we work around your schedule.',
    image: '/projects/extreme-clean-van-full-2026-04-22.png',
    imageFit: 'cover',
    imagePosition: 'center 78%',
    features: ['On-location service', 'Flexible scheduling', 'No travel hassle', 'Fully equipped'],
  },
];

export default function Services() {
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
    <section id="services" className="py-28 px-6 relative" ref={sectionRef}>
      <div className="section-divider mb-28" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="reveal text-[#1E90FF] text-sm font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease' }}
          >
            What We Offer
          </p>
          <h2
            className="reveal font-display text-5xl md:text-6xl font-extrabold text-white mb-5"
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease' }}
          >
            Mobile <span className="text-gradient">Detailing</span>
          </h2>
          <p
            className="reveal text-gray-400 text-lg max-w-2xl mx-auto"
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease' }}
          >
            Professional auto detailing services brought directly to you. Every package is tailored to give your vehicle the care it deserves.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Link
              key={service.title}
              to="/services"
              className="reveal glass rounded-2xl overflow-hidden border border-white/5 card-hover group block"
              style={{ opacity: 0, transform: 'translateY(28px)', transition: `all 0.7s ease ${i * 0.1}s` }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${
                    service.imageFit === 'contain' ? 'object-contain bg-[#080808]' : 'object-cover'
                  }`}
                  style={service.imagePosition ? { objectPosition: service.imagePosition } : undefined}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E90FF] to-[#0055cc] flex items-center justify-center shadow-lg">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-white font-semibold text-xl mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{service.description}</p>

                <ul className="space-y-2 mb-5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1E90FF] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-1.5 text-[#1E90FF] text-sm font-semibold group-hover:gap-2.5 transition-all duration-300">
                  Learn More <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div
          className="reveal mt-12 text-center"
          style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease 0.4s' }}
        >
          <Link
            to="/contact"
            className="btn-primary inline-block text-sm font-semibold text-white px-8 py-4 rounded-xl"
          >
            Book a Service Today
          </Link>
        </div>
      </div>
    </section>
  );
}
