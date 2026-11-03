import type { Variants } from 'framer-motion'

export const transitionNormal = {
  duration: 0.5,
  ease: [0.16, 1, 0.3, 1] as const
}

export const transitionFast = {
  duration: 0.25,
  ease: [0.16, 1, 0.3, 1] as const
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionNormal
  }
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitionNormal
  }
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitionNormal
  }
}

export const cardHover = {
  rest: { y: 0, transition: transitionFast },
  hover: { y: -4, transition: transitionFast }
}
