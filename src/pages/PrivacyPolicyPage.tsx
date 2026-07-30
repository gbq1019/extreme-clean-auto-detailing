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

export default function PrivacyPolicyPage() {
  useReveal();

  return (
    <div className="sp-page">
      <Helmet>
        <title>Privacy Policy | Extreme Clean Auto Detailing</title>
        <meta
          name="description"
          content="Privacy Policy for Extreme Clean Auto Detailing — how we collect, use, and protect your information."
        />
        <link rel="canonical" href="https://www.extremecleanauto.com/privacy-policy" />
        <meta property="og:title" content="Privacy Policy | Extreme Clean Auto Detailing" />
        <meta
          property="og:description"
          content="Privacy Policy for Extreme Clean Auto Detailing — how we collect, use, and protect your information."
        />
        <meta property="og:url" content="https://www.extremecleanauto.com/privacy-policy" />
      </Helmet>

      {/* PAGE HERO */}
      <section className="page-hero page-hero-short">
        <div className="page-hero-bg" />
        <div className="page-hero-content">
          <div className="breadcrumb reveal">
            <Link to="/">Home</Link> / Privacy Policy
          </div>
          <h1 className="page-title reveal">
            Privacy <span className="text-gradient">Policy</span>
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
                Extreme Clean Auto Detailing ("we," "our," or "us") respects your privacy and is
                committed to protecting your personal information. This Privacy Policy explains
                what information we collect, how we use it, and your rights regarding your
                information.
              </p>
            </section>

            <section>
              <h2>Information We Collect</h2>
              <p>We may collect information you voluntarily provide, including:</p>
              <ul>
                <li>Name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Vehicle information</li>
                <li>Appointment details</li>
                <li>
                  Any information submitted through our contact forms, quote requests, phone
                  calls, text messages, or email.
                </li>
              </ul>
            </section>

            <section>
              <h2>How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul>
                <li>Respond to inquiries</li>
                <li>Provide estimates</li>
                <li>Schedule appointments</li>
                <li>Send appointment reminders</li>
                <li>Communicate regarding your requested services</li>
                <li>Send promotional offers if you have opted in</li>
                <li>Improve our customer service</li>
              </ul>
            </section>

            <section>
              <h2>SMS Communications</h2>
              <p>If you choose to opt in, you may receive SMS messages regarding:</p>
              <ul>
                <li>Appointment confirmations</li>
                <li>Appointment reminders</li>
                <li>Service updates</li>
                <li>Estimates</li>
                <li>Customer support</li>
                <li>Promotional offers</li>
              </ul>
              <p>Message frequency varies.</p>
              <p>Message and data rates may apply.</p>
              <p>Reply STOP to unsubscribe at any time.</p>
              <p>Reply HELP for assistance.</p>
            </section>

            <section>
              <h2>Sharing of Information</h2>
              <p>
                We do not sell, rent, or share your personal information or SMS consent with
                third parties or affiliates for marketing purposes.
              </p>
              <p>We may share information only with trusted service providers that help us operate our business.</p>
            </section>

            <section>
              <h2>Data Security</h2>
              <p>We use commercially reasonable measures to help protect your information.</p>
            </section>

            <section>
              <h2>Contact Information</h2>
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
