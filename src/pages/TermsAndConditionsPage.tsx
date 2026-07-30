import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
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

export default function TermsAndConditionsPage() {
  useReveal();

  return (
    <div className="sp-page">
      <Helmet>
        <title>Terms and Conditions | Extreme Clean Auto Detailing</title>
        <meta
          name="description"
          content="Terms and Conditions for Extreme Clean Auto Detailing — website use, services, estimates, appointments, and SMS terms."
        />
        <link rel="canonical" href="https://www.extremecleanauto.com/terms-and-conditions" />
        <meta property="og:title" content="Terms and Conditions | Extreme Clean Auto Detailing" />
        <meta
          property="og:description"
          content="Terms and Conditions for Extreme Clean Auto Detailing — website use, services, estimates, appointments, and SMS terms."
        />
        <meta property="og:url" content="https://www.extremecleanauto.com/terms-and-conditions" />
      </Helmet>

      {/* PAGE HERO */}
      <section className="page-hero page-hero-short">
        <div className="page-hero-bg" />
        <div className="page-hero-content">
          <div className="breadcrumb reveal">
            <Link to="/">Home</Link> / Terms and Conditions
          </div>
          <h1 className="page-title reveal">
            Terms &amp; <span className="text-gradient">Conditions</span>
          </h1>
        </div>
      </section>

      {/* LEGAL CONTENT */}
      <section className="section">
        <div className="sp-container">
          <div className="legal-content reveal">
            <p className="effective-date">Effective Date: July 29, 2026</p>

            <section>
              <p>
                By using this website or contacting Extreme Clean Auto Detailing, you agree to
                these Terms &amp; Conditions.
              </p>
            </section>

            <section>
              <h2>Services</h2>
              <p>
                Extreme Clean Auto Detailing provides automotive detailing services including but
                not limited to:
              </p>
              <ul>
                <li>Ceramic Coatings</li>
                <li>Paint Correction</li>
                <li>Paint Enhancement</li>
                <li>Exterior Detailing</li>
                <li>Interior Detailing</li>
                <li>Mobile Detailing</li>
              </ul>
            </section>

            <section>
              <h2>Estimates</h2>
              <p>All pricing provided online or by phone is an estimate.</p>
              <p>Final pricing may vary depending on the vehicle's:</p>
              <ul>
                <li>Size</li>
                <li>Condition</li>
                <li>Service requested</li>
                <li>Time required</li>
              </ul>
            </section>

            <section>
              <h2>Appointments</h2>
              <p>Appointments may be rescheduled or canceled by either party.</p>
              <p>Please notify us as early as possible if you need to cancel or reschedule.</p>
            </section>

            <section>
              <h2>SMS Terms of Service</h2>
              <p>
                By providing your phone number and opting in through our website, you agree to
                receive SMS messages from Extreme Clean Auto Detailing.
              </p>
              <p>These messages may include:</p>
              <ul>
                <li>Appointment confirmations</li>
                <li>Appointment reminders</li>
                <li>Scheduling updates</li>
                <li>Estimates</li>
                <li>Customer support</li>
                <li>Promotional offers</li>
                <li>Seasonal specials</li>
              </ul>
              <p>Message frequency varies.</p>
              <p>Message and data rates may apply.</p>
              <p>Reply STOP to unsubscribe.</p>
              <p>Reply HELP for assistance.</p>
              <p>Consent to receive text messages is not a condition of purchasing any goods or services.</p>
            </section>

            <section>
              <h2>Limitation of Liability</h2>
              <p>
                Extreme Clean Auto Detailing is not responsible for indirect, incidental, or
                consequential damages arising from the use of this website or our services,
                except where required by law.
              </p>
            </section>

            <section>
              <h2>Changes</h2>
              <p>
                We reserve the right to modify these Terms &amp; Conditions at any time. Updated
                versions will be posted on this page.
              </p>
            </section>

            <section>
              <h2>Contact</h2>
              <p>Extreme Clean Auto Detailing</p>
              <p>
                Phone: <a href="tel:5864812121">(586) 481-2121</a>
              </p>
              <p>
                Email: <a href="mailto:blake@extremecleanauto.com">blake@extremecleanauto.com</a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
