/**
 * CHIDI Design System - Motion Transitions
 * Consistent animation timing and spring configurations
 */

import type { Transition } from "motion/react";

/**
 * Fast spring - for immediate feedback (buttons, toggles)
 */
export const fastSpring: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
  mass: 0.8,
};

/**
 * Soft spring - for gentle entrances (modals, cards)
 */
export const softSpring: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 25,
  mass: 1,
};

/**
 * Smooth spring - for smooth transitions (page transitions)
 */
export const smoothSpring: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 20,
  mass: 1.2,
};

/**
 * Bounce spring - for playful interactions (success states)
 */
export const bounceSpring: Transition = {
  type: "spring",
  stiffness: 500,
  damping: 15,
  mass: 1,
};

/**
 * Ease transitions - for linear animations
 */
export const easeOut: Transition = {
  type: "tween",
  ease: [0.0, 0.0, 0.2, 1.0],
  duration: 0.3,
};

export const easeInOut: Transition = {
  type: "tween",
  ease: [0.4, 0.0, 0.2, 1.0],
  duration: 0.4,
};

export const easeIn: Transition = {
  type: "tween",
  ease: [0.4, 0.0, 1.0, 1.0],
  duration: 0.25,
};

/**
 * Duration presets (in seconds)
 */
export const duration = {
  instant: 0.1,
  fast: 0.2,
  normal: 0.3,
  slow: 0.4,
  slower: 0.6,
} as const;

/**
 * Common animation variants
 */
export const fadeInUp = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

export const slideInFromRight = {
  initial: { x: "100%" },
  animate: { x: 0 },
  exit: { x: "100%" },
};

export const slideInFromLeft = {
  initial: { x: "-100%" },
  animate: { x: 0 },
  exit: { x: "-100%" },
};
