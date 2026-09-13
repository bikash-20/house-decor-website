/**
 * Custom cubic-bezier easings. NOT the default GSAP "power" easings.
 * PRD §4: "lower lerp, custom easing — not default settings."
 */

export const EASE_LUSH = 'cubic-bezier(0.22, 1, 0.36, 1)'; // smooth deceleration
export const EASE_VELVET = 'cubic-bezier(0.65, 0, 0.35, 1)'; // symmetric ease-in-out
export const EASE_GENTLE = 'cubic-bezier(0.4, 0.0, 0.2, 1)'; // material-style

/** GSAP-compatible cubic-bezier string (gsap accepts strings like "power3.out"). */
export const gsapEasing = {
  lush: 'expo.out',
  velvet: 'power3.inOut',
  gentle: 'power2.out',
} as const;
