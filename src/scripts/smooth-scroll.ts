/**
 * Scroll suave com Lenis (@studio-freight/lenis@0.2.28).
 * Paridade com o projeto Pedro Zvir:
 * - Ativação apenas no desktop (viewport >= 1025px)
 * - Compensação do header fixo (HEADER_OFFSET = -100)
 * - Interceptação suave de âncoras (#...)
 * - Foco acessível no skip-link e seções
 */
import type Lenis from "@studio-freight/lenis";

const MIN_WIDTH = 1025;
const HEADER_OFFSET = -100;
const LENIS_DURATION = 1.2;

function getViewportWidth(): number {
  return window.innerWidth || document.documentElement.clientWidth || 0;
}

function resolveTarget(hash: string): HTMLElement | null {
  let target: HTMLElement | null = null;
  try {
    target = document.querySelector<HTMLElement>(hash);
  } catch {
    // seletor inválido
  }
  if (!target && hash.length > 1) {
    target = document.getElementById(hash.slice(1));
  }
  return target;
}

function fallbackSmoothTo(target: HTMLElement): void {
  const top =
    target.getBoundingClientRect().top + window.pageYOffset + HEADER_OFFSET;
  try {
    window.scrollTo({ top, behavior: "smooth" });
  } catch {
    window.scrollTo(0, top);
  }
}

function wireAnchors(lenis: Lenis): void {
  document.addEventListener(
    "click",
    (event) => {
      const el = event.target as HTMLElement | null;
      const anchor = el?.closest?.('a[href*="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      if (!href || href === "#" || href === "#0") return;

      const hash =
        anchor.hash ||
        (href.includes("#") ? href.slice(href.indexOf("#")) : "");
      if (!hash || hash === "#") return;

      const target = resolveTarget(hash);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target, { offset: HEADER_OFFSET });

      if (history.pushState) {
        history.pushState(null, "", hash);
      } else {
        location.hash = hash;
      }

      if ((hash === "#inicio" || hash === "#conteudo") && !target.hasAttribute("tabindex")) {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
    },
    { passive: false }
  );
}

function scrollToHashOnLoad(lenis: Lenis): void {
  if (!location.hash) return;
  window.setTimeout(() => {
    const target = resolveTarget(location.hash);
    if (!target) return;
    try {
      lenis.scrollTo(target, { offset: HEADER_OFFSET });
    } catch {
      fallbackSmoothTo(target);
    }
  }, 30);
}

async function initSmoothScroll(): Promise<void> {
  if (getViewportWidth() < MIN_WIDTH) return;

  let lenis: Lenis;
  try {
    const { default: LenisCtor } = await import("@studio-freight/lenis");
    lenis = new LenisCtor({
      duration: LENIS_DURATION,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });
  } catch {
    return;
  }

  function raf(time: number): void {
    try {
      lenis.raf(time);
    } catch {
      // ignora erro isolado
    }
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  wireAnchors(lenis);
  window.addEventListener("load", () => scrollToHashOnLoad(lenis));
}

void initSmoothScroll();
