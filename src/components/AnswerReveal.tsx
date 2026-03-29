import { motion } from 'framer-motion'

export function AnswerReveal({
  dish,
  ethnicity,
  description,
  imageUrl,
}: {
  dish: string
  ethnicity: string
  description: string
  imageUrl: string
}) {
  return (
    <>
      {/* Immersive Background Image */}
      <motion.div
        className="fixed inset-0 z-40 overflow-hidden bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.img
          src={imageUrl}
          alt={dish}
          className="h-full w-full object-cover"
          initial={{ scale: 1.15, filter: 'brightness(0) blur(10px)' }}
          animate={{ scale: 1, filter: 'brightness(0.45) blur(0px)' }}
          transition={{ duration: 1.2, ease: [0.2, 0.9, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.35)_60%,rgba(0,0,0,0.85)_100%)]" />
      </motion.div>

      {/* Centered Content Overlay */}
      <motion.div
        className="relative z-50 mx-auto flex min-h-dvh w-full max-w-5xl flex-col items-center justify-center gap-8 px-6 text-center"
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            delay: 0.35,
            duration: 0.9,
            ease: [0.17, 0.9, 0.25, 1],
          },
        }}
      >
        <motion.h2
          className="font-display max-w-4xl text-5xl font-normal tracking-tight text-amber-50 sm:text-7xl md:text-8xl"
          style={{
            textShadow:
              '0 0 60px rgba(251, 191, 36, 0.45), 0 0 120px rgba(234, 88, 12, 0.25)',
          }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          {dish}
        </motion.h2>

        <motion.p
          className="font-sans text-base font-semibold uppercase tracking-[0.5em] text-amber-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
        >
          {ethnicity}
        </motion.p>

        <motion.p
          className="font-sans max-w-2xl text-xl leading-relaxed text-stone-100/90 md:text-2xl"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          {description}
        </motion.p>
      </motion.div>
    </>
  )
}
