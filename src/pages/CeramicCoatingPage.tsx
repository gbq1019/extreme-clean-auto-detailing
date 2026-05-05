import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, Check, ChevronDown } from 'lucide-react';
import './pages.css';

function useReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      '.sp-page section, .sp-page .page-hero'
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll<HTMLElement>('.reveal');
            children.forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const faqs = [
  {
    q: 'How long does ceramic coating last?',
    a: 'We use System X Max G Plus ceramic coating, which is rated for 10 years. Longevity depends on proper care — we provide aftercare instructions with every installation. Avoiding automatic car washes and using pH-neutral soap will help maintain the coating over time.',
  },
  {
    q: 'Can ceramic coating be applied to any vehicle?',
    a: 'Yes. We apply ceramic coating to cars, trucks, SUVs, and specialty vehicles. Paint condition matters — vehicles with heavy oxidation or deep scratches will need paint correction first. We\'ll assess your vehicle and recommend the right package when you call.',
  },
  {
    q: 'What\'s the difference between ceramic coating and wax?',
    a: 'Wax sits on top of your paint and washes away within weeks. Ceramic coating chemically bonds to the paint surface, creating a durable protective layer that\'s far longer-lasting and more resistant to UV rays, oxidation, road salt, and harsh weather. It\'s not comparable — it\'s a category above.',
  },
  {
    q: 'How long does the application take?',
    a: 'Application time depends on the package selected and the current condition of your vehicle\'s paint. We\'ll give you a specific timeline when you call for your quote.',
  },
  {
    q: 'Do you come to my location for ceramic coating too?',
    a: 'Yes — we are fully mobile for all services, including ceramic coating applications. No drop-off required.',
  },
  {
    q: 'How do I care for my ceramic coating after application?',
    a: 'We provide complete aftercare instructions with every install. We\'re also available for any questions after the application.',
  },
];

const packages: {
  tier: string;
  name: string;
  featured: boolean;
  desc: string | null;
  includes: string[];
  notIncluded: string | null;
}[] = [
  {
    tier: 'Level 1',
    name: 'Ceramic Coating Package',
    featured: false,
    desc: null,
    includes: [
      'Full Exterior Detail',
      'Decontamination Wash',
      '1 Step Paint Enhancement',
      'Apply Ceramic Coating to All Painted Surfaces & Windshield',
      'System X Max G Plus (Rated for 10 years)',
    ],
    notIncluded: null,
  },
  {
    tier: 'Level 2',
    name: 'Ceramic Coating Package',
    featured: true,
    desc: null,
    includes: [
      'Full Exterior Detail',
      'Decontamination Wash',
      '1 Step Paint Enhancement',
      'Polish Windows',
      'Apply Ceramic Coating to All Painted Surfaces & Windows',
      'System X Max G Plus (Rated for 10 years)',
    ],
    notIncluded: null,
  },
  {
    tier: 'Level 3',
    name: 'Ceramic Coating Package',
    featured: false,
    desc: null,
    includes: [
      'Full Exterior Detail',
      'Decontamination Wash',
      '1 Step Paint Enhancement',
      'Polish Windows',
      'Apply Ceramic Coating to All Painted Surfaces & Windows',
      'Ceramic Coat Wheel Faces',
      'Ceramic Coat Door Jams',
      'System X Max G Plus (Rated for 10 years)',
    ],
    notIncluded: null,
  },
];

export default function CeramicCoatingPage() {
  useReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

  return (
    <div className="sp-page">
      <Helmet>
        <title>Ceramic Coating Services | Macomb & Oakland County MI | Extreme Clean</title>
        <meta name="description" content="Professional ceramic coating in Macomb and Oakland County, Michigan. Long-lasting paint protection, hydrophobic finish, and showroom shine. Call 586-481-2121 for a quote." />
        <link rel="canonical" href="https://extremecleanauto.com/ceramic-coating" />
        <meta property="og:title" content="Ceramic Coating Services | Extreme Clean Auto Detailing" />
        <meta property="og:description" content="Professional ceramic coating in Michigan. Long-lasting paint protection and hydrophobic finish." />
        <meta property="og:url" content="https://extremecleanauto.com/ceramic-coating" />
      </Helmet>

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-content">
          <div className="breadcrumb reveal">
            <Link to="/">Home</Link> / Ceramic Coatings
          </div>
          <h1 className="page-title reveal">
            Ceramic Coating<br />
            <span className="text-gradient">Packages</span>
          </h1>
          <p className="page-subtitle reveal">
            The ultimate level of paint protection. Long-lasting, self-cleaning, and stunning —
            delivered right to your door.
          </p>
        </div>
      </section>

      {/* WHAT IS CERAMIC COATING */}
      <section className="section" id="what-is">
        <div className="sp-container">
          <div className="section-header">
            <div className="section-eyebrow reveal">What Is Ceramic Coating?</div>
            <h2 className="section-title reveal">
              Not a Wax. Not a Sealant.<br />
              <span className="text-gradient">Something Better.</span>
            </h2>
            <div className="section-divider reveal" />
          </div>
          <div className="explainer-grid">
            <div className="explainer-text reveal">
              <p className="service-desc">
                Ceramic coating is an advanced protective layer that chemically bonds to your
                vehicle's paint, creating a durable shield against UV rays, oxidation, road salt,
                bird droppings, and harsh weather.
              </p>
              <p className="service-desc">
                At Extreme Clean Auto Detailing, we proudly use System X Ceramic Coating — one of
                the most trusted and proven ceramic technologies in the industry. System X offers
                unmatched gloss, long-term protection, and extreme hydrophobic properties that make
                washing your car easier and keep it looking showroom-new for years.
              </p>
              <p className="service-desc">
                Without ceramic coating, your vehicle's paint is left exposed to daily damage that
                leads to fading, staining, and costly deterioration. Don't wait until your clear
                coat breaks down — protect your investment today with the best in ceramic
                technology.
              </p>
            </div>
            <div className="explainer-benefits">
              {[
                { icon: '💧', title: 'Hydrophobic Properties', desc: 'System X\'s extreme hydrophobic finish makes washing your car easier — water beads off the surface on contact.' },
                { icon: '☀️', title: 'UV & Oxidation Shield', desc: 'Creates a durable shield against UV rays and oxidation, preventing the fading and deterioration that unprotected paint suffers over time.' },
                { icon: '🛡️', title: 'Weather & Contamination Protection', desc: 'Guards against road salt, bird droppings, and harsh weather — daily hazards that lead to fading, staining, and costly paint damage.' },
                { icon: '✨', title: 'Unmatched Gloss', desc: 'System X delivers unmatched gloss and long-term protection, keeping your paint looking showroom-new for years.' },
                { icon: '💎', title: 'Protect Your Investment', desc: 'Without ceramic coating, your clear coat is exposed to daily damage. Don\'t wait — protect your vehicle before deterioration sets in.' },
              ].map((b) => (
                <div key={b.title} className="benefit-item reveal">
                  <div className="benefit-icon">{b.icon}</div>
                  <div>
                    <div className="benefit-title">{b.title}</div>
                    <div className="benefit-desc">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="section section-dark" id="packages">
        <div className="sp-container">
          <div className="section-header">
            <div className="section-eyebrow reveal">Coating Packages</div>
            <h2 className="section-title reveal">
              Choose Your<br />
              <span className="text-gradient">Level of Protection</span>
            </h2>
            <div className="section-divider reveal" />
            <p className="section-desc reveal">
              All packages include a professional detail and paint decontamination before coating
              application. Pricing is vehicle-size dependent — call for a custom quote.
            </p>
          </div>

          <div className="packages-media-grid reveal">
            <div className="packages-media">
              <img
                src="/projects/ceramic-packages-application-2026-04-22.png"
                alt="Ceramic coating application"
                className="packages-media-img"
                draggable={false}
                loading="lazy"
              />
            </div>
            <div className="packages-media">
              <img
                src="/projects/ceramic-packages-polisher-2026-04-22.png"
                alt="Paint polishing before coating"
                className="packages-media-img"
                draggable={false}
                loading="lazy"
              />
            </div>
            <div className="packages-media">
              <img
                src="/projects/ceramic-packages-water-beading-2026-04-22.png"
                alt="Water beading on coated paint"
                className="packages-media-img"
                draggable={false}
                loading="lazy"
              />
            </div>
          </div>

          <div className="packages-grid">
            {packages.map((pkg) => (
              <div
                key={pkg.tier}
                className={`package-card${pkg.featured ? ' package-featured' : ''} reveal`}
              >
                <div className="pkg-header">
                  <div className={`pkg-tier${pkg.featured ? ' yellow-text' : ''}`}>{pkg.tier}</div>
                  <div className="pkg-name">{pkg.name}</div>
                  <div className={`pkg-price${pkg.featured ? ' yellow-text' : ''}`}>
                    Call for Pricing
                  </div>
                </div>
                <div className="pkg-body">
                  {pkg.desc && <p className="pkg-desc">{pkg.desc}</p>}
                  <ul className="pkg-includes">
                    {pkg.includes.map((item) => (
                      <li key={item}>
                        <Check size={14} color="var(--sp-blue)" style={{ marginTop: 2, flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {pkg.notIncluded && (
                    <div className="pkg-not-included">
                      <div className="pkg-ni-label">Not Included:</div>
                      <span>{pkg.notIncluded}</span>
                    </div>
                  )}
                </div>
                <div className="pkg-footer">
                  {pkg.featured ? (
                    <>
                      <Link to="/contact" className="btn-secondary pkg-btn">
                        Get a Quote
                      </Link>
                    </>
                  ) : (
                    <Link to="/contact" className="btn-secondary pkg-btn">Get a Quote</Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="packages-note reveal">
            All packages require paint decontamination and proper surface prep before coating
            application. Pricing varies by vehicle size, current paint condition, and selected
            add-ons. Call us for an accurate quote specific to your vehicle.
          </p>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="section" id="compare">
        <div className="sp-container">
          <div className="section-header">
            <div className="section-eyebrow reveal">Package Comparison</div>
            <h2 className="section-title reveal">
              What's in<br />
              <span className="text-gradient">Each Package</span>
            </h2>
            <div className="section-divider reveal" />
          </div>
          <div className="compare-table-wrap reveal">
            <table className="compare-table">
              <thead>
                <tr>
                  <th className="compare-feature-col">Feature</th>
                  <th>Level 1</th>
                  <th className="col-featured">Level 2<br /><span className="compare-tier yellow-text">+ Window Polish</span></th>
                  <th>Level 3<br /><span className="compare-tier">+ Wheels & Jams</span></th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Full Exterior Detail', '✓', '✓', '✓', true],
                  ['Decontamination Wash', '✓', '✓', '✓', true],
                  ['1 Step Paint Enhancement', '✓', '✓', '✓', true],
                  ['Polish Windows', '—', '✓', '✓', false],
                  ['Coating: All Painted Surfaces', '✓', '✓', '✓', true],
                  ['Glass Coating', 'Windshield', 'All Windows', 'All Windows', false],
                  ['Ceramic Coat Wheel Faces', '—', '—', '✓', false],
                  ['Ceramic Coat Door Jams', '—', '—', '✓', false],
                  ['System X Max G Plus', '10 Years', '10 Years', '10 Years', false],
                ].map(([feature, col1, col2, col3, isCheck]) => (
                  <tr key={feature as string}>
                    <td>{feature}</td>
                    <td>
                      <span className={(col1 === '✓') ? 'sp-check' : (col1 === '—' ? 'sp-cross' : '')}>
                        {col1}
                      </span>
                    </td>
                    <td className="col-featured">
                      <span className={(col2 === '✓') ? 'sp-check' : (col2 === '—' ? 'sp-cross' : (isCheck ? '' : 'yellow-text'))}>
                        {col2}
                      </span>
                    </td>
                    <td>
                      <span className={(col3 === '✓') ? 'sp-check' : (col3 === '—' ? 'sp-cross' : '')}>
                        {col3}
                      </span>
                    </td>
                  </tr>
                ))}
                <tr className="compare-cta-row">
                  <td />
                  <td>
                    <a href="tel:5864812121" className="compare-cta-btn compare-cta-yellow">
                      Call Now
                    </a>
                  </td>
                  <td className="col-featured">
                    <a href="tel:5864812121" className="compare-cta-btn compare-cta-yellow">
                      Call Now
                    </a>
                  </td>
                  <td>
                    <a href="tel:5864812121" className="compare-cta-btn compare-cta-yellow">
                      Call Now
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-dark" id="faq">
        <div className="sp-container">
          <div className="section-header">
            <div className="section-eyebrow reveal">FAQ</div>
            <h2 className="section-title reveal">
              Common<br />
              <span className="text-gradient">Questions</span>
            </h2>
            <div className="section-divider reveal" />
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item reveal">
                <button className="faq-q" onClick={() => toggleFaq(i)}>
                  {faq.q}
                  <ChevronDown
                    size={20}
                    className={`faq-arrow${openFaq === i ? ' open' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section contact-cta-section">
        <div className="sp-container">
          <div className="cta-box reveal">
            <div className="cta-badge">Ready to Protect Your Paint?</div>
            <h2 className="cta-title">
              Call for a <span className="text-gradient">Custom Quote</span>
            </h2>
            <p className="cta-desc">
              Every vehicle is different — pricing depends on size, paint condition, and package.
              Call Blake directly for a fast, accurate quote.
            </p>
            <div className="cta-actions">
              <a href="tel:5864812121" className="btn-primary btn-lg">
                <Phone size={20} />
                Call 586-481-2121
              </a>
              <Link to="/contact" className="btn-secondary btn-lg">
                Request a Quote Online
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
