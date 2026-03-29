import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const halfTransition = {
  duration: 0.95,
  ease: [0.22, 1, 0.36, 1] as const,
}

export function PaperTearSlide({ children }: { children: ReactNode }) {
  return (
    <div className="absolute inset-0 h-full w-full">
      <div className="pointer-events-none flex h-full w-full select-none">
        <motion.div
          className="relative h-full w-1/2 overflow-hidden shadow-[12px_0_40px_rgba(0,0,0,0.45)]"
          initial={{ rotate: 0, y: 0, x: 0 }}
          exit={{
            rotate: -14,
            y: '125vh',
            x: -36,
            transition: halfTransition,
          }}
          style={{ transformOrigin: '100% 0%' }}
        >
          {/* Align to full viewport: left column shows [0, 50vw] of one shared 100vw layer */}
          <div className="absolute left-0 top-1/2 flex w-screen -translate-y-1/2 justify-center px-6">
            {children}
          </div>
        </motion.div>
        <motion.div
          className="relative h-full w-1/2 overflow-hidden shadow-[-12px_0_40px_rgba(0,0,0,0.45)]"
          initial={{ rotate: 0, y: 0, x: 0 }}
          exit={{
            rotate: 14,
            y: '125vh',
            x: 36,
            transition: halfTransition,
          }}
          style={{ transformOrigin: '0% 0%' }}
        >
          {/* Same layer shifted so [50vw, 100vw] matches the left half’s slice */}
          <div className="absolute -left-[50vw] top-1/2 flex w-screen -translate-y-1/2 justify-center px-6">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

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
