import "./smooth-scroll";

export function initializeSite(): void {
  // Mobile Menu
  const menuToggle = document.querySelector<HTMLButtonElement>('.mobile-menu-toggle');
  const header = document.querySelector<HTMLElement>('.header');
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link');

  if (menuToggle && header) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isExpanded));
      header.classList.toggle('menu-open');

      const icon = menuToggle.querySelector<HTMLElement>('i');
      if (icon) {
        if (header.classList.contains('menu-open')) {
          icon.classList.remove('ph-list');
          icon.classList.add('ph-x');
        } else {
          icon.classList.remove('ph-x');
          icon.classList.add('ph-list');
        }
      }
    });

    // Close menu when clicking a link
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        header.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        const icon = menuToggle.querySelector<HTMLElement>('i');
        if (icon) {
          icon.classList.remove('ph-x');
          icon.classList.add('ph-list');
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

  // Scroll animations with IntersectionObserver
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
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
