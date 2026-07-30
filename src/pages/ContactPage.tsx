import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, Clock, Check, Instagram, Facebook } from 'lucide-react';
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

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function ContactPage() {
  useReveal();

  return (
    <div className="sp-page">
      <Helmet>
        <title>Contact Us | Get a Free Quote | Extreme Clean Auto Detailing</title>
        <meta name="description" content="Get a free quote for mobile auto detailing in Macomb & Oakland County, MI. Call 586-481-2121 or fill out our contact form. We come to you!" />
        <link rel="canonical" href="https://extremecleanauto.com/contact" />
        <meta property="og:title" content="Contact Extreme Clean Auto Detailing" />
        <meta property="og:description" content="Get a free quote for mobile auto detailing. Call 586-481-2121 or fill out our form." />
        <meta property="og:url" content="https://extremecleanauto.com/contact" />
      </Helmet>

      {/* PAGE HERO */}
      <section className="page-hero page-hero-short">
        <div className="page-hero-bg" />
        <div className="page-hero-content">
          <div className="breadcrumb reveal">
            <Link to="/">Home</Link> / Contact
          </div>
          <h1 className="page-title reveal">
            Get a <span className="text-gradient">Free Quote</span>
          </h1>
          <p className="page-subtitle reveal">
            The fastest way to book is a phone call. Rather fill out a form? We'll respond promptly.
          </p>
        </div>
      </section>

      {/* CONTACT LAYOUT */}
      <section className="section" id="contact">
        <div className="sp-container">
          <div className="contact-grid">

            {/* LEFT — INFO */}
            <div className="contact-info">
              <div className="contact-primary reveal">
                <div className="section-eyebrow">Fastest Response</div>
                <h2>
                  Call or Text<br />
                  <span className="text-gradient">586-481-2121</span>
                </h2>
                <p>
                  Blake personally handles every inquiry. A phone call is the quickest way to get
                  an accurate quote and get on the schedule.
                </p>
                <div className="contact-btns">
                  <a href="tel:5864812121" className="btn-primary">
                    <Phone size={18} />
                    Call Now
                  </a>
                  <a href="sms:5864812121" className="btn-secondary">
                    <MessageSquare size={18} />
                    Send a Text
                  </a>
                </div>
              </div>

              <div className="contact-details reveal">
                <div className="contact-detail-item">
                  <div className="detail-icon"><MapPin size={18} /></div>
                  <div>
                    <div className="detail-label">Based In</div>
                    <div className="detail-value">Shelby Township, MI</div>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="detail-icon"><Clock size={18} /></div>
                  <div>
                    <div className="detail-label">Hours</div>
                    <div className="detail-value">Mon–Fri: 8am – 6pm</div>
                    <div className="detail-value">Sat–Sun: Closed</div>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="detail-icon"><Check size={18} /></div>
                  <div>
                    <div className="detail-label">Service Area</div>
                    <div className="detail-value">Macomb &amp; Oakland Counties</div>
                  </div>
                </div>
              </div>

              <div className="contact-social reveal">
                <div className="detail-label">Follow Us</div>
                <div className="social-row">
                  <a
                    href="https://www.instagram.com/extremeclean.autodetailing/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                  >
                    <Instagram size={18} />
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100084377522579"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                  >
                    <Facebook size={18} />
                    Facebook
                  </a>
                  <a
                    href="https://www.tiktok.com/@extreme_clean_detailing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                  >
                    <TikTokIcon />
                    TikTok
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT — FIELDD LEAD FORM */}
            <div className="reveal">
              <div className="form-card">
                <div className="form-title">Request a Quote</div>
                <p className="form-subtitle">
                  Fill out the form below and we'll get back to you with a custom quote.
                </p>
                <fieldd-lead-form code="xXHQIh" />
                <p className="form-note">
                  By submitting this form, you agree to our{' '}
                  <Link to="/privacy-policy">Privacy Policy</Link> and{' '}
                  <Link to="/terms-and-conditions">Terms and Conditions</Link>.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="section section-dark" id="area">
        <div className="sp-container">
          <div className="section-header">
            <div className="section-eyebrow reveal">Service Area</div>
            <h2 className="section-title reveal">
              We Serve<br />
              <span className="text-gradient">Southeast Michigan</span>
            </h2>
          </div>
          <div className="area-chips-wrap reveal">
            {[
              {
                county: 'Macomb County',
                cities: ['Shelby Township', 'Sterling Heights', 'Clinton Township', 'Chesterfield', 'Romeo', 'New Baltimore', 'Utica', 'Roseville'],
              },
              {
                county: 'Oakland County',
                cities: ['Troy', 'Auburn Hills', 'Rochester', 'Pontiac', 'Waterford', 'West Bloomfield', 'Clarkston', 'Royal Oak'],
              },
            ].map(({ county, cities }) => (
              <div key={county}>
                <div className="area-county-header">
                  <span className="yellow-dot" />
                  {county}
                </div>
                <div className="area-chips">
                  {cities.map((city) => (
                    <span key={city} className="area-chip">{city}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="area-note reveal" style={{ marginTop: '2rem' }}>
            Don't see your city? Give us a call — we may still be able to come to you.
          </p>
        </div>
      </section>

    </div>
  );
}
