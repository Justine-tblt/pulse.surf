
document.addEventListener('DOMContentLoaded', () => {

  // ── Scroll reveal ─────────────────────────────────────────
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

  // ── Burger menu ───────────────────────────────────────────
  const burgerBtn  = document.getElementById('burgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    burgerBtn.classList.remove('open');
    burgerBtn.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  burgerBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    burgerBtn.classList.toggle('open', isOpen);
    burgerBtn.setAttribute('aria-expanded', String(isOpen));
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  mobileMenu.querySelectorAll('a').forEach(l => l.addEventListener('click', closeMobileMenu));

  // ── Reviews ─────────
  
  const track     = document.getElementById('reviewsTrack');
  const origCards = Array.from(track.querySelectorAll('.review-card'));
  const N         = origCards.length;   
  let   currentIndex = 0;               
  let   isAnimating  = false;

  function cardStep() {
    const card = track.querySelector('.review-card');
    const gap  = parseFloat(getComputedStyle(track).gap) || 24;
    return card.getBoundingClientRect().width + gap;
  }

  function visibleCount() {
    const vw  = track.parentElement.clientWidth;
    const step = cardStep();
    return Math.max(1, Math.round(vw / step));
  }

  function jumpTo(index) {
    track.style.transition = 'none';
    track.style.transform  = `translateX(${-index * cardStep()}px)`;
    currentIndex = index;
  }

  function slideTo(index) {
    track.style.transition = 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)';
    track.style.transform  = `translateX(${-index * cardStep()}px)`;
    currentIndex = index;
  }

  origCards.slice().reverse().forEach(card => {
    const clone = card.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    clone.classList.add('clone');
    track.prepend(clone);
  });
  origCards.forEach(card => {
    const clone = card.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    clone.classList.add('clone');
    track.appendChild(clone);
  });

  const OFFSET = N;  
  currentIndex = OFFSET;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => { jumpTo(OFFSET); });
  });

  track.addEventListener('transitionend', () => {
    const total = track.querySelectorAll('.review-card').length;
    if (currentIndex >= OFFSET + N) {
      jumpTo(currentIndex - N);
    } else if (currentIndex < OFFSET) {
      jumpTo(currentIndex + N);
    }
    isAnimating = false;
  });

  window.addEventListener('resize', () => { jumpTo(currentIndex); }, { passive: true });

  function move(dir) {
    if (isAnimating) return;
    isAnimating = true;
    slideTo(currentIndex + dir);
  }

  document.getElementById('reviewsPrev').addEventListener('click', () => move(-1));
  document.getElementById('reviewsNext').addEventListener('click', () => move(1));

  // ── Nav active on scroll ──────────────────────────────────
  const sections    = document.querySelectorAll('section[id]');
  const allNavLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    allNavLinks.forEach(a => {
      const href = a.getAttribute('href');
      a.classList.toggle('active', href === '#' + current || (current === '' && href === '#'));
    });
  }, { passive: true });

  // ── Legal notice ──────────────────────────────────────
  const mentionsBtn   = document.getElementById('mentionsBtn');
  const mentionsModal = document.getElementById('mentionsModal');
  const mentionsClose = document.getElementById('mentionsClose');

  function closeModal() {
    mentionsModal.classList.remove('open');
    mentionsModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (mentionsBtn) {
    mentionsBtn.addEventListener('click', e => {
      e.preventDefault();
      mentionsModal.classList.add('open');
      mentionsModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      mentionsClose.focus();
    });
    mentionsClose.addEventListener('click', closeModal);
    mentionsModal.addEventListener('click', e => { if (e.target === mentionsModal) closeModal(); });
  }
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mentionsModal?.classList.contains('open')) closeModal();
  });

  // ── Contact form ──────────────────────────────────────────
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  const fields = {
    fname:   { el: document.getElementById('fname'),   err: document.getElementById('fnameErr'),   validate: v => v.trim().length >= 2 },
    lname:   { el: document.getElementById('lname'),   err: document.getElementById('lnameErr'),   validate: v => v.trim().length >= 2 },
    email:   { el: document.getElementById('email'),   err: document.getElementById('emailErr'),   validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) },
    session: { el: document.getElementById('session'), err: document.getElementById('sessionErr'), validate: v => v !== '' },
    message: { el: document.getElementById('message'), err: document.getElementById('messageErr'), validate: v => v.trim().length >= 10 },
  };

  let submitted = false;

  function validateField(key) {
    const f = fields[key];
    const valid = f.validate(f.el.value);
    f.el.classList.toggle('error', !valid);
    f.err.classList.toggle('visible', !valid);
    return valid;
  }

  Object.keys(fields).forEach(key => {
    fields[key].el.addEventListener('input',  () => { if (submitted) validateField(key); });
    fields[key].el.addEventListener('change', () => { if (submitted) validateField(key); });
  });

  const submitBtn   = document.getElementById('submitBtn');
  const formSuccess = document.getElementById('formSuccess');

  function showSuccess() {
    contactForm.querySelectorAll('.form-row, .form-group').forEach(el => el.style.display = 'none');
    submitBtn.style.display = 'none';
    formSuccess.classList.add('visible');
  }

  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    submitted = true;
    const allValid = Object.keys(fields).map(k => validateField(k)).every(Boolean);
    if (!allValid) return;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    fetch('https://formspree.io/f/mjgakjwr', {
      method: 'POST',
      body: new FormData(contactForm),
      headers: { 'Accept': 'application/json' }
    })
    .then(res => {
      if (res.ok) {
        showSuccess();
      } else {
        alert("Une erreur est survenue. Réessaie ou contacte-moi par WhatsApp.");
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send message';
      }
    })
    .catch(() => {
      
      showSuccess();
    });
  });

});

  // ── Top link ──────────────────────────────────────────


const goTopLink = document.getElementById('goToTop');

window.addEventListener('scroll', () => {
  
    if (window.scrollY > 400) {
        goTopLink.classList.add('show');
    } else {
        goTopLink.classList.remove('show');
    }
});

goTopLink.addEventListener('click', (e) => {
    e.preventDefault(); 
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});