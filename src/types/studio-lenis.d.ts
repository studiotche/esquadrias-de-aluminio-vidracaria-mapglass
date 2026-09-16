/**
 * Tipos locais para @studio-freight/lenis@0.2.28.
 */
declare module "@studio-freight/lenis" {
  export default class Lenis {
    constructor(options?: {
      duration?: number;
      easing?: (t: number) => number;
      smooth?: boolean;
      mouseMultiplier?: number;
      smoothTouch?: boolean;
      touchMultiplier?: number;
      direction?: "vertical" | "horizontal";
      gestureDirection?: "both" | "vertical" | "horizontal";
      infinite?: boolean;
      wrapper?: Window | HTMLElement;
      content?: HTMLElement;
    });
    raf(now: number): void;
    scrollTo(
      target: number | string | HTMLElement,
      options?: {
        offset?: number;
        immediate?: boolean;
        duration?: number;
        easing?: (t: number) => number;
      }
    ): void;
    stop(): void;
    start(): void;
    destroy(): void;
  }
}
