export const slideEnterBehind = {
  initial: {
    opacity: 0,
    scale: 0.88,
    filter: 'blur(14px) brightness(0.35)',
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px) brightness(1)',
    transition: {
      duration: 1.05,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
}
