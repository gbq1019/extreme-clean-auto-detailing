import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, Check } from 'lucide-react';
import './pages.css';

function useReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      '.sp-page section, .sp-page .page-hero, .sp-page .intro-bar'
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

export default function ServicesPage() {
  useReveal();

  return (
    <div className="sp-page">
      <Helmet>
        <title>Mobile Detailing Services | Macomb & Oakland County | Extreme Clean</title>
        <meta name="description" content="Professional mobile detailing in Macomb and Oakland County, MI. Exterior wash, interior cleaning, and full detail packages — delivered to your driveway. Call 586-481-2121." />
        <link rel="canonical" href="https://extremecleanauto.com/services" />
        <meta property="og:title" content="Mobile Detailing Services | Extreme Clean Auto Detailing" />
        <meta property="og:description" content="Professional mobile detailing in Macomb and Oakland County. Exterior, interior, and full detail packages." />
        <meta property="og:url" content="https://extremecleanauto.com/services" />
      </Helmet>

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-content">
          <div className="breadcrumb reveal">
            <Link to="/">Home</Link> / Services
          </div>
          <h1 className="page-title reveal">
            Mobile Detailing<br />
            <span className="text-gradient">Services</span>
          </h1>
          <p className="page-subtitle reveal">
            Professional, showroom-quality auto detailing delivered directly to your driveway —
            serving Macomb and Oakland counties.
          </p>
        </div>
      </section>

      {/* INTRO BAR */}
      <div className="intro-bar">
        <div className="intro-bar-inner">
          <div className="intro-chip reveal">
            <Check size={16} color="var(--sp-blue)" />
            100% Mobile
          </div>
          <div className="intro-chip reveal">
            <Check size={16} color="var(--sp-blue)" />
            Premium Products
          </div>
          <div className="intro-chip reveal">
            <Check size={16} color="var(--sp-blue)" />
            No Drop-Off Required
          </div>
        </div>
      </div>

      {/* SERVICE 1 — EXTERIOR */}
      <section className="service-section" id="exterior">
        <div className="sp-container">
          <div className="service-full-grid">
            <div className="service-full-content reveal">
              <div className="service-num">01</div>
              <div className="section-eyebrow">Exterior Only Detail</div>
              <h2>
                A Deep Clean<br />
                <span className="text-gradient">Outside &amp; Out</span>
              </h2>
              <p className="service-desc">
                Professional mobile exterior detailing in Macomb and Oakland County — delivered
                directly to your home or workplace. Our decontamination wash and 2-month ceramic
                sealant leave your paint protected and showroom-clean.
              </p>
              <div className="service-includes">
                <h4>What's Included</h4>
                <ul className="include-list">
                  {[
                    'Exterior Windows Cleaned',
                    'Exterior Mirrors Cleaned',
                    'Exterior Trim Wiped & Dressed',
                    'Exterior Decontamination Wash',
                    'Ceramic Sealant (Lasts 2 Months)',
                    'Tires Dressed',
                  ].map((item) => (
                    <li key={item}>
                      <Check size={16} color="var(--sp-blue)" style={{ marginTop: 2, flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="service-mobile-note">We come to your home or work.</p>
              </div>
              <a href="tel:5864812121" className="btn-primary">Call for Pricing</a>
            </div>
            <div className="service-full-visual reveal">
              <div className="service-visual-stack">
                <div className="service-visual-card service-visual-card--fixed">
                  <span className="visual-icon">✦</span>
                  <div className="visual-label">Exterior Detail</div>
                  <div className="visual-tagline">"From dull to dazzling — outside and out."</div>
                  <div className="visual-stat-row">
                    <div className="visual-stat">
                      <div className="vs-num">1–2</div>
                      <div className="vs-label">Hours</div>
                    </div>
                    <div className="visual-stat">
                      <div className="vs-num">Any</div>
                      <div className="vs-label">Vehicle Size</div>
                    </div>
                    <div className="visual-stat">
                      <div className="vs-num">100%</div>
                      <div className="vs-label">Mobile</div>
                    </div>
                  </div>
                </div>

                <div className="service-visual-media" aria-label="Exterior detailing example photo">
                  <img
                    src="/projects/services-exterior-suv-2026-04-22.png"
                    alt="Exterior detailing example vehicle"
                    className="service-visual-media-img"
                    style={{ objectPosition: 'center 82%' }}
                    draggable={false}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-full" />

      {/* SERVICE 2 — INTERIOR */}
      <section className="service-section" id="interior">
        <div className="sp-container">
          <div className="service-full-grid service-full-grid-reverse">
            <div className="service-full-visual reveal">
              <div className="service-visual-stack">
                <div className="service-visual-card service-visual-card--fixed">
                  <span className="visual-icon yellow-text">◈</span>
                  <div className="visual-label">Interior Detail</div>
                  <div className="visual-tagline">"Clean where it matters most — where you sit."</div>
                  <div className="visual-stat-row">
                    <div className="visual-stat">
                      <div className="vs-num">2–4</div>
                      <div className="vs-label">Hours</div>
                    </div>
                    <div className="visual-stat">
                      <div className="vs-num">Mobile</div>
                      <div className="vs-label">Service</div>
                    </div>
                    <div className="visual-stat">
                      <div className="vs-num">No Power</div>
                      <div className="vs-label">Needed</div>
                    </div>
                  </div>
                </div>

                <div className="service-visual-media" aria-label="Interior detailing example photo">
                  <img
                    src="/projects/services-interior-seats-2026-04-22.png"
                    alt="Interior detailing seats"
                    className="service-visual-media-img"
                    draggable={false}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="service-full-content reveal">
              <div className="service-num">02</div>
              <div className="section-eyebrow">Interior Only Detail</div>
              <h2>
                Spotless Inside.<br />
                <span className="text-gradient">Down to the Seams.</span>
              </h2>
              <p className="service-desc">
                A thorough interior clean from top to bottom, brought to your door anywhere in
                Southeast Michigan. No power or water hookup required — just a great result.
              </p>
              <div className="service-includes">
                <h4>What's Included</h4>
                <ul className="include-list">
                  {[
                    'Comprehensive Interior Vacuum',
                    'Interior Windows Cleaned',
                    'Interior Mirrors Cleaned',
                    'Interior Trim Detailed & Dressed',
                    'Crack & Crevice Detail',
                    'Door & Boot Jamb Clean',
                    'Free Air Freshener',
                  ].map((item) => (
                    <li key={item}>
                      <Check size={16} color="var(--sp-blue)" style={{ marginTop: 2, flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="service-mobile-note">We come to your home or work. No need to supply power or water.</p>
              </div>
              <a href="tel:5864812121" className="btn-primary">Call for Pricing</a>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-full" />

      {/* SERVICE 3 — FULL DETAIL */}
      <section className="service-section section-dark" id="full-detail">
        <div className="sp-container">
          <div className="service-full-grid">
            <div className="service-full-content reveal">
              <div className="service-num yellow-text">03</div>
              <div className="section-eyebrow">Interior &amp; Exterior Detail</div>
              <h2>
                The Complete<br />
                <span className="text-gradient">Transformation.</span>
              </h2>
              <p className="service-desc">
                The complete mobile detail — every surface inside and out. Macomb and Oakland
                County's most comprehensive single-service package, with ceramic sealant paint
                protection included.
              </p>
              <div className="service-includes">
                <h4>What's Included</h4>
                <ul className="include-list">
                  {[
                    'Comprehensive Interior Vacuum',
                    'Interior Windows Cleaned',
                    'Interior Mirrors Cleaned',
                    'Interior Trim Wiped & Dressed',
                    'Steering Column & Dash Detail',
                    'Crack & Crevice Detail',
                    'Door & Boot Jamb Clean',
                    'Exterior Windows Cleaned',
                    'Exterior Mirrors Cleaned',
                    'Exterior Trim & Tires Dressed',
                    'Exterior Decontamination Wash',
                    'Ceramic Sealant (2 Months of Paint Protection)',
                  ].map((item) => (
                    <li key={item}>
                      <Check size={16} color="var(--sp-blue)" style={{ marginTop: 2, flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="service-ctas">
                <a href="tel:5864812121" className="btn-primary">
                  <Phone size={18} />
                  Call for Pricing
                </a>
                <Link to="/contact" className="btn-secondary">Get a Quote</Link>
              </div>
            </div>
            <div className="service-full-visual reveal">
              <div className="service-visual-stack">
                <div className="service-visual-media" aria-label="Full detail example photo — interior">
                  <img
                    src="/projects/services-full-detail-interior-rear-2026-04-22.png"
                    alt="Full detail interior example"
                    className="service-visual-media-img"
                    draggable={false}
                    loading="lazy"
                  />
                </div>

                <div className="service-visual-card featured-visual service-visual-card--fixed service-visual-card--compact">
                  <div className="featured-badge">Most Popular</div>
                  <span className="visual-icon yellow-text">★</span>
                  <div className="visual-label">Full Detail</div>
                  <div className="visual-tagline">"Every surface. Every corner. Every single detail."</div>
                  <div className="visual-stat-row">
                    <div className="visual-stat">
                      <div className="vs-num">3–5</div>
                      <div className="vs-label">Hours</div>
                    </div>
                    <div className="visual-stat">
                      <div className="vs-num">In+Out</div>
                      <div className="vs-label">Complete</div>
                    </div>
                    <div className="visual-stat">
                      <div className="vs-num">Best</div>
                      <div className="vs-label">Value</div>
                    </div>
                  </div>
                </div>

                <div className="service-visual-media" aria-label="Full detail example photo — exterior">
                  <img
                    src="/projects/services-full-detail-jeep-2026-04-22.png"
                    alt="Full detail exterior example"
                    className="service-visual-media-img"
                    draggable={false}
                    loading="lazy"
                    style={{ objectFit: 'cover', objectPosition: 'center 70%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="section" id="addons">
        <div className="sp-container">
          <div className="section-header">
            <div className="section-eyebrow reveal">Add-Ons</div>
            <h2 className="section-title reveal">
              Customize Your<br />
              <span className="text-gradient">Detail Package</span>
            </h2>
            <p className="section-desc reveal">
              Every vehicle is different. Ask about add-on services when you call for your quote.
            </p>
          </div>
          <div className="addons-grid reveal">
            {[
              { icon: '🔆', name: 'Paint Correction', desc: 'Removes swirl marks, light scratches, and oxidation for a flawless finish before coating.' },
              { icon: '🛡️', name: 'Ceramic Coating', desc: <span>Add long-term paint protection after your detail. See our <Link to="/ceramic-coating">coating packages</Link>.</span> },
              { icon: '💡', name: 'Headlight Restoration', desc: 'Removes yellowing and haze from headlights — improves safety and curb appeal.' },
              { icon: '🚙', name: 'Engine Bay Detail', desc: 'Safe, professional engine bay cleaning — removes grease build-up and restores appearance.' },
              { icon: '🪟', name: 'Glass Coating', desc: 'Hydrophobic nano-coating applied to all glass — water beads off even at highway speeds.' },
              { icon: '🏎️', name: 'Convertible Top Treatment', desc: 'Soft top cleaning and protective treatment — prevents fading, cracking, and water damage.' },
            ].map((addon) => (
              <div key={addon.name} className="addon-card">
                <div className="addon-icon">{addon.icon}</div>
                <div className="addon-name">{addon.name}</div>
                <div className="addon-desc">{addon.desc}</div>
              </div>
            ))}
          </div>
          <p className="addons-note reveal">
            Call <a href="tel:5864812121">586-481-2121</a> to ask about specific add-ons and
            current availability.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section contact-cta-section section-dark">
        <div className="sp-container">
          <div className="cta-box reveal">
            <div className="cta-badge">Ready to Book?</div>
            <h2 className="cta-title">
              Get Your <span className="text-gradient">Free Quote</span>
            </h2>
            <p className="cta-desc">
              Call us directly for the fastest response, or fill out our inquiry form and we'll
              get back to you promptly.
            </p>
            <div className="cta-actions">
              <a href="tel:5864812121" className="btn-primary btn-lg">
                <Phone size={20} />
                Call 586-481-2121
              </a>
              <Link to="/contact" className="btn-secondary btn-lg">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
