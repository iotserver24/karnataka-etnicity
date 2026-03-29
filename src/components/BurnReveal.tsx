import { motion } from 'framer-motion'
import { useMemo } from 'react'

function EmberParticles({ seed }: { seed: number }) {
  const particles = useMemo(() => {
    return Array.from({ length: 28 }, (_, i) => ({
      id: i,
      x: ((seed * 9301 + i * 49297) % 233280) / 2332.8,
      delay: (i % 7) * 0.04,
      size: 2 + (i % 4),
      drift: ((i * 17) % 40) - 20,
    }))
  }, [seed])

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-gradient-to-t from-amber-600/90 to-orange-200/80 shadow-[0_0_8px_rgba(251,191,36,0.9)]"
          style={{
            left: `${p.x}%`,
            bottom: '18%',
            width: p.size,
            height: p.size,
          }}
          initial={{ opacity: 0, y: 0, scale: 0.4 }}
          animate={{
            opacity: [0, 1, 0.6, 0],
            y: [-6, -42 - (p.id % 5) * 8],
            x: [0, p.drift * 0.4],
            scale: [0.4, 1.1, 0.3],
          }}
          transition={{
            duration: 1.35,
            delay: p.delay,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  )
}

export function BurnReveal({
  text,
  revealKey,
}: {
  text: string
  revealKey: string
}) {
  return (
    <div className="relative py-3">
      <div className="mb-2 border-b border-amber-900/40 pb-2">
        <span className="font-sans text-xs font-semibold uppercase tracking-[0.35em] text-amber-600/90">
          Clue
        </span>
      </div>
      <div className="relative overflow-visible">
        <motion.div
          key={revealKey}
          className="relative"
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: 'inset(0 0% 0 0)' }}
          transition={{
            duration: 1.15,
            ease: [0.2, 0.85, 0.25, 1],
          }}
        >
          <motion.div
            className="pointer-events-none absolute -left-1 top-0 h-full w-3 bg-gradient-to-r from-orange-500/90 via-amber-400/80 to-transparent blur-[2px]"
            initial={{ opacity: 0.95, x: -8 }}
            animate={{ x: 'calc(100vw)' }}
            transition={{ duration: 1.05, ease: 'linear' }}
          />
          <p className="font-display text-2xl leading-snug text-stone-100 sm:text-3xl md:text-[2rem] md:leading-tight">
            {text}
          </p>
        </motion.div>
        <EmberParticles seed={revealKey.length * 7 + text.length} />
        <motion.div
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-orange-950/25 via-transparent to-stone-950/40"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.4 }}
        />
      </div>
    </div>
  )
}
