import { useRef, useEffect } from 'react';

const REVIEWS = [
  {
    src: '/images/reviews/review-1.png',
    alt: 'Five-star Google review for Extreme Clean Auto Detailing from Michael Kincaid',
  },
  {
    src: '/images/reviews/review-2.png',
    alt: 'Five-star Google review for Extreme Clean Auto Detailing from Shannon Byrd',
  },
  {
    src: '/images/reviews/review-3.png',
    alt: 'Five-star Google review for Extreme Clean Auto Detailing from Kevin Collins',
  },
  {
    src: '/images/reviews/review-4.png',
    alt: 'Five-star Google review for Extreme Clean Auto Detailing from Nicole Miller',
  },
  {
    src: '/images/reviews/review-5.png',
    alt: 'Five-star Google review for Extreme Clean Auto Detailing from Vance Nall',
  },
  {
    src: '/images/reviews/review-6.png',
    alt: 'Five-star Google review for Extreme Clean Auto Detailing from Mary Drouillard',
  },
];

const REVEAL_STYLE: React.CSSProperties = {
  opacity: 0,
  transform: 'translateY(24px)',
  transition: 'all 0.7s ease',
};

export default function Reviews() {
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
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="reviews" className="py-28 px-6 relative" ref={sectionRef}>
      <div className="section-divider mb-28" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="reveal text-[#1E90FF] text-sm font-semibold tracking-[0.2em] uppercase mb-4"
            style={REVEAL_STYLE}
          >
            What Our Clients Say
          </p>
          <h2
            className="reveal font-display text-5xl md:text-6xl font-extrabold text-white"
            style={REVEAL_STYLE}
          >
            Real Reviews from{' '}
            <span className="text-gradient">Real Clients</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.src}
              className="reveal glass card-hover rounded-2xl overflow-hidden border-t-2 border-[#1E90FF]"
              style={REVEAL_STYLE}
            >
              <img
                src={review.src}
                alt={review.alt}
                className="w-full h-[180px] md:h-[210px] lg:h-[195px] object-contain bg-[#080808] block"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
