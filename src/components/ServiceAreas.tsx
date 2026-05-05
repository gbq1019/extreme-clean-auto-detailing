import { useRef, useEffect } from 'react';

// ─── PROPOSED COPY — awaiting Gabriel's approval before merge ────────────────
// Heading:          "We Come to You Across Macomb & Oakland Counties"
// Subheading:       "We provide mobile detailing and ceramic coating across
//                   Macomb County and Oakland County —
//                   professional results at your driveway, no travel fee."
// Card sub-label:   "Serving these communities:"
// Note text:        "Don't see your city? Give us a call — we may still serve
//                   your area."
// ─────────────────────────────────────────────────────────────────────────────

type CountyCard = { name: string; cities: string[] };

const COUNTY_CARDS: CountyCard[] = [
  {
    name: 'Macomb County',
    cities: [
      'Shelby Township',
      'Sterling Heights',
      'Macomb Township',
      'Utica',
      'Washington Township',
      'Chesterfield',
      'New Baltimore',
      'Clinton Township',
    ],
  },
  {
    name: 'Oakland County',
    cities: [
      'Rochester',
      'Rochester Hills',
      'Troy',
      'Bloomfield Hills',
      'Birmingham',
      'Auburn Hills',
      'Lake Orion',
      'Oakland Township',
    ],
  },
];

// SVG path tracing the corrected service-area boundary over the 1024×653 map image.
// Key landmarks: top edge between Armada (outside) and Romeo/Lakeville (inside),
// left edge between Pontiac (outside) and Auburn Hills (inside),
// east edge follows Lake St. Clair / Anchor Bay coastline (max x ≈882 near Anchorville),
// bottom edge near Fraser latitude.
const SERVICE_AREA_PATH =
  'M 110,73 L 200,71 L 350,69 L 490,68 L 640,69 L 720,71 L 790,73' +
  ' C 818,71 840,83 856,103 C 863,116 867,131 869,148' +
  ' C 870,165 872,183 873,203 C 875,223 879,243 883,261' +
  ' C 886,277 888,293 882,311 C 876,327 866,343 852,361' +
  ' C 836,381 815,401 794,423 C 771,447 750,471 738,498' +
  ' L 728,595 L 570,601 L 410,603 L 240,603 L 110,603 Z';

const REVEAL_STYLE: React.CSSProperties = {
  opacity: 0,
  transform: 'translateY(24px)',
  transition: 'all 0.7s ease',
};

export default function ServiceAreas() {
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
    <section className="py-24 bg-[#080808]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="reveal font-display font-extrabold text-4xl md:text-5xl text-white uppercase tracking-wide leading-tight"
            style={REVEAL_STYLE}
          >
            <span className="block">We Come to You Across</span>
            <span className="block text-gradient">Macomb and Oakland Counties</span>
          </h2>
          <div className="section-divider" style={{ margin: '16px auto 0' }} />
          <p
            className="reveal text-gray-400 text-lg max-w-2xl mx-auto mt-6 leading-relaxed"
            style={REVEAL_STYLE}
          >
            We provide mobile detailing and ceramic coating across Macomb County and
            Oakland County — professional results at your driveway, no travel fee.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal" style={REVEAL_STYLE}>
            <div className="relative w-full rounded-lg overflow-hidden border border-white/5">
              <img
                src="/projects/service-areas-reference-dark-map-overlays-2026-04-15.png"
                alt="Service area map covering Macomb and Oakland counties in southeast Michigan"
                className="w-full block"
              />
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 1024 653"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d={SERVICE_AREA_PATH}
                  className="stroke-[#1E90FF] fill-[#1E90FF]"
                  strokeWidth="5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fillOpacity="0.15"
                />
              </svg>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">Map data © Google Maps</p>
          </div>

          <div className="flex flex-col gap-5">
            {COUNTY_CARDS.map((county) => (
              <div
                key={county.name}
                className="glass card-hover reveal rounded-xl p-6"
                style={REVEAL_STYLE}
              >
                <h3 className="font-display font-extrabold text-xl text-white uppercase tracking-wide mb-1">
                  {county.name}
                </h3>
                <p className="text-[#1E90FF] text-xs font-semibold tracking-widest uppercase mb-4">
                  Serving these communities:
                </p>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {county.cities.map((city) => (
                    <li key={city} className="text-gray-300 text-sm leading-snug">
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <p className="text-gray-500 text-sm text-center mt-2">
              Don&apos;t see your city? Give us a call — we may still serve your area.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
