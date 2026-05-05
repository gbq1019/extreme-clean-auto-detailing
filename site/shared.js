/* ---- NAV scroll effect + mobile toggle ---- */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
  });
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

/* ---- Intersection Observer — reveal animations ---- */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const parent = el.closest('[data-stagger]');
        if (parent) {
          const siblings = Array.from(parent.querySelectorAll('.reveal'));
          const idx = siblings.indexOf(el);
          setTimeout(() => el.classList.add('revealed'), idx * 100);
        } else {
          el.classList.add('revealed');
        }
        revealObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => {
  revealObserver.observe(el);
});

/* ---- FAQ accordion ---- */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

/* ---- Contact form — client-side validation + success ---- */
const form = document.getElementById('quoteForm');
const formSuccess = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const fields = [
      { id: 'firstName', label: 'First name' },
      { id: 'lastName',  label: 'Last name' },
      { id: 'email',     label: 'Email', type: 'email' },
      { id: 'phone',     label: 'Phone' },
      { id: 'service',   label: 'Service' },
      { id: 'location',  label: 'Location' },
    ];

    fields.forEach(({ id, label, type }) => {
      const el = document.getElementById(id);
      const errEl = document.getElementById(id + 'Error');
      if (!el) return;
      const val = el.value.trim();

      if (!val) {
        errEl.textContent = `${label} is required.`;
        el.classList.add('error');
        valid = false;
      } else if (type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        errEl.textContent = 'Enter a valid email address.';
        el.classList.add('error');
        valid = false;
      } else {
        errEl.textContent = '';
        el.classList.remove('error');
      }
    });

    const consent = document.getElementById('consent');
    const consentErr = document.getElementById('consentError');
    if (consent && !consent.checked) {
      consentErr.textContent = 'You must agree to be contacted.';
      valid = false;
    } else if (consentErr) {
      consentErr.textContent = '';
    }

    if (!valid) return;

    /* Show success — no backend in this build */
    form.style.display = 'none';
    formSuccess.style.display = 'block';
    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  /* Clear errors on input */
  form.querySelectorAll('input, select, textarea').forEach(el => {
    el.addEventListener('input', () => {
      el.classList.remove('error');
      const errEl = document.getElementById(el.id + 'Error');
      if (errEl) errEl.textContent = '';
    });
  });
}
