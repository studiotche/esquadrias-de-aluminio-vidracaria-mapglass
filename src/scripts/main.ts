import "./smooth-scroll";

export function initializeSite(): void {
  // Mobile Menu Drawer
  const hamburger = document.getElementById('hamburgerBtn') as HTMLButtonElement | null;
  const menu = document.getElementById('mobileMenu') as HTMLElement | null;

  if (hamburger && menu) {
    const closeMenu = (): void => {
      menu.classList.remove('open');
      menu.setAttribute('aria-hidden', 'true');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
      hamburger.focus();
    };

    const openMenu = (): void => {
      menu.classList.add('open');
      menu.setAttribute('aria-hidden', 'false');
      hamburger.setAttribute('aria-expanded', 'true');
      document.body.classList.add('menu-open');
    };

    hamburger.addEventListener('click', () => {
      if (menu.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    menu.querySelectorAll<HTMLElement>('[data-close-menu]').forEach((el) => {
      el.addEventListener('click', closeMenu);
    });

    menu.querySelectorAll<HTMLAnchorElement>('.mobile-nav a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menu.classList.contains('open')) {
        closeMenu();
      }
    });
  }

  // FAQ Smooth Accordion (Exact parity with Instalacao-ar-condicionado-am-climatizar)
  const faqItems = document.querySelectorAll<HTMLDetailsElement>('.faq-list details');
  if (faqItems.length) {
    const faqTimeouts = new WeakMap<HTMLDetailsElement, number>();
    const FAQ_DURATION = 400;

    const clearFaqTimeout = (details: HTMLDetailsElement): void => {
      const timeout = faqTimeouts.get(details);
      if (timeout !== undefined) window.clearTimeout(timeout);
    };

    const finishOpenFaq = (details: HTMLDetailsElement, answer: HTMLElement): void => {
      clearFaqTimeout(details);
      faqTimeouts.set(
        details,
        window.setTimeout(() => {
          if (details.open && !details.classList.contains('is-closing')) {
            answer.style.height = 'auto';
          }
        }, FAQ_DURATION)
      );
    };

    const animatedCloseFaq = (details: HTMLDetailsElement): void => {
      const answer = details.querySelector<HTMLElement>('.faq-answer');
      if (!details.open || !answer || details.classList.contains('is-closing')) return;
      details.classList.add('is-closing');
      answer.style.height = `${answer.offsetHeight}px`;
      answer.style.opacity = '1';
      void answer.offsetHeight;
      answer.style.height = '0px';
      answer.style.opacity = '0';
      clearFaqTimeout(details);
      faqTimeouts.set(
        details,
        window.setTimeout(() => {
          details.removeAttribute('open');
          details.classList.remove('is-closing');
          answer.style.height = '';
          answer.style.opacity = '';
        }, FAQ_DURATION)
      );
    };

    const animatedOpenFaq = (details: HTMLDetailsElement): void => {
      const answer = details.querySelector<HTMLElement>('.faq-answer');
      if (!answer || details.open) return;
      details.classList.remove('is-closing');
      details.setAttribute('open', '');
      answer.style.height = '0px';
      answer.style.opacity = '0';
      void answer.offsetHeight;
      answer.style.height = `${answer.scrollHeight}px`;
      answer.style.opacity = '1';
      finishOpenFaq(details, answer);
    };

    faqItems.forEach((details) => {
      const summary = details.querySelector('summary');
      if (!summary) return;

      summary.addEventListener('click', (event: MouseEvent) => {
        event.preventDefault();
        if (details.classList.contains('is-closing')) {
          clearFaqTimeout(details);
          details.classList.remove('is-closing');
          const answer = details.querySelector<HTMLElement>('.faq-answer');
          if (answer) {
            answer.style.height = `${answer.scrollHeight}px`;
            answer.style.opacity = '1';
            finishOpenFaq(details, answer);
          }
          return;
        }
        if (details.open) {
          animatedCloseFaq(details);
        } else {
          faqItems.forEach((other) => {
            if (other !== details && other.open) animatedCloseFaq(other);
          });
          animatedOpenFaq(details);
        }
      });
    });
  }

  // Lightbox Modal
  const modal = document.getElementById('image-modal') as HTMLDialogElement | null;
  const modalImg = document.getElementById('modal-img') as HTMLImageElement | null;
  const modalCaption = document.getElementById('modal-caption') as HTMLElement | null;
  const modalClose = document.querySelector<HTMLButtonElement>('.modal-close');
  const projectCards = document.querySelectorAll<HTMLButtonElement>('.project-card');
  let lastFocusedElement: HTMLElement | null = null;

  function openModal(imageSrc: string, captionText: string): void {
    if (!modal || !modalImg || !modalCaption) return;
    lastFocusedElement = document.activeElement as HTMLElement | null;
    modalImg.src = imageSrc;
    modalImg.alt = captionText;
    modalCaption.textContent = captionText;
    modal.showModal();
    document.body.style.overflow = 'hidden';
  }

  function closeModal(): void {
    if (!modal) return;
    modal.close();
    document.body.style.overflow = '';
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  projectCards.forEach((card) => {
    card.addEventListener('click', () => {
      const imgSrc = card.getAttribute('data-image');
      const caption = card.getAttribute('data-caption') ?? '';
      if (imgSrc) {
        openModal(imgSrc, caption);
      }
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  // Close when clicking outside the dialog content (on backdrop)
  if (modal) {
    modal.addEventListener('click', (event: MouseEvent) => {
      const rect = modal.getBoundingClientRect();
      const isInDialog =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (!isInDialog) {
        closeModal();
      }
    });

    modal.addEventListener('close', () => {
      document.body.style.overflow = '';
      if (lastFocusedElement) {
        lastFocusedElement.focus();
      }
    });
  }

  // Scroll animations with IntersectionObserver (desktop/tablet only >= 761px)
  const isDesktop = window.matchMedia('(min-width: 761px)').matches;
  if (isDesktop && 'IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll<HTMLElement>('section:not(.hero)');
    fadeElements.forEach((el) => {
      el.classList.add('fade-in-hidden');
      observer.observe(el);
    });
  }
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSite);
  } else {
    initializeSite();
  }
}
