import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

let initialized = false;

export function initGSAP() {
  if (initialized) return;
  initialized = true;
  gsap.registerPlugin(ScrollTrigger);
  const lenis = new Lenis({
    duration: 1.4,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time: number) => { lenis.raf(time * 1000); });
  gsap.ticker.lagSmoothing(0);
  gsap.defaults({ ease: 'power2.out', duration: 0.9 });
}
