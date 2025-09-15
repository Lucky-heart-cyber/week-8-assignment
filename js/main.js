/* main.js
   Contains:
     - responsive nav toggle
     - demo animation trigger
     - contact form validation with custom messages
     - small functions demonstrating scope, parameters, returns
*/

// ---------- helper functions (reusable) ----------
/**
 * setText - set text content of an element (demo of parameters and return)
 * @param {string} selector - CSS selector
 * @param {string} text - text to set
 * @returns {boolean} true if element found and updated
 */
function setText(selector, text) {
  const el = document.querySelector(selector);
  if (!el) return false;
  el.textContent = text;
  return true;
}

/**
 * nowYear - returns the current year
 * demonstrates a function with return value
 */
function nowYear() {
  return new Date().getFullYear();
}

// ---------- DOM Ready ----------
document.addEventListener('DOMContentLoaded', () => {
  // set footer years
  setText('#year', nowYear());
  setText('#year2', nowYear());
  setText('#year3', nowYear());
  setText('#year4', nowYear());

  // NAV: support multiple header toggles (each page uses same main.js)
  const navPairs = [
    {toggle: 'navToggle', nav: 'siteNav'},
    {toggle: 'navToggle2', nav: 'siteNav2'},
    {toggle: 'navToggle3', nav: 'siteNav3'},
    {toggle: 'navToggle4', nav: 'siteNav4'}
  ];

  navPairs.forEach(pair => {
    const t = document.getElementById(pair.toggle);
    const n = document.getElementById(pair.nav);
    if (!t || !n) return;
    t.addEventListener('click', () => {
      n.classList.toggle('open');
    });
  });

  // DEMO: animate box
  const demoBtn = document.getElementById('demoBtn');
  const demoBox = document.getElementById('demoBox');
  if (demoBtn && demoBox) {
    demoBtn.addEventListener('click', () => {
      // toggle transform
      demoBox.classList.toggle('animate');

      // flash once
      demoBox.classList.add('flash');
      setTimeout(() => demoBox.classList.remove('flash'), 1100);
    });
  }

  // CONTACT FORM: validation
  const form = document.getElementById('contactForm');
  if (form) {
    const nameIn = document.getElementById('cfName');
    const emailIn = document.getElementById('cfEmail');
    const msgIn = document.getElementById('cfMessage');
    const feedback = document.getElementById('formFeedback');

    // simple email regex (not perfect but practical)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      feedback.textContent = '';
      feedback.style.color = '#c33';

      const name = nameIn.value.trim();
      const email = emailIn.value.trim();
      const message = msgIn.value.trim();

      if (!name) {
        feedback.textContent = 'Please enter your name.';
        nameIn.focus();
        return;
      }
      if (!email || !emailRegex.test(email)) {
        feedback.textContent = 'Please enter a valid email address.';
        emailIn.focus();
        return;
      }
      if (!message || message.length < 10) {
        feedback.textContent = 'Message must be at least 10 characters.';
        msgIn.focus();
        return;
      }

      // If valid: demo "submit" (no backend here)
      feedback.style.color = 'green';
      feedback.textContent = 'Message sent — (demo). Thanks!';
      form.reset();
    });
  }

  // Accessibility: close nav when clicking outside (mobile)
  document.addEventListener('click', (e) => {
    navPairs.forEach(pair => {
      const navEl = document.getElementById(pair.nav);
      const toggleEl = document.getElementById(pair.toggle);
      if (!navEl || !toggleEl) return;
      if (!navEl.classList.contains('open')) return;
      // if clicked inside nav or toggle, ignore
      if (navEl.contains(e.target) || toggleEl.contains(e.target)) return;
      navEl.classList.remove('open');
    });
  });
});
