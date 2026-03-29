import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { AnswerReveal } from './components/AnswerReveal'
import { BurnReveal } from './components/BurnReveal'
import { PaperTearSlide, slideEnterBehind } from './components/PaperTearSlide'
import { QUESTIONS } from './data/questions'

type DeckKey = 'title' | `q-${number}` | 'end'

const TOTAL = QUESTIONS.length

function parseQ(k: DeckKey): number | null {
  if (k === 'title' || k === 'end') return null
  const m = /^q-(\d+)$/.exec(k)
  return m ? Number(m[1]) : null
}

export default function App() {
  const [deckKey, setDeckKey] = useState<DeckKey>('title')
  const [step, setStep] = useState(0)
  const [inputLocked, setInputLocked] = useState(false)

  const qIndex = parseQ(deckKey)
  const question = qIndex !== null ? QUESTIONS[qIndex] : null

  const progressLabel = useMemo(() => {
    if (qIndex === null || deckKey === 'end') return null
    return `Question ${qIndex + 1} / ${TOTAL}`
  }, [deckKey, qIndex])

  const advance = useCallback(() => {
    if (inputLocked) return
    setInputLocked(true)

    if (deckKey === 'title') {
      setDeckKey('q-0')
      setStep(0)
      return
    }

    if (deckKey === 'end') {
      setDeckKey('title')
      setStep(0)
      return
    }

    if (qIndex === null) {
      setInputLocked(false)
      return
    }

    if (step < 2) {
      setStep((s) => s + 1)
      window.setTimeout(() => setInputLocked(false), 400)
      return
    }

    if (step === 2) {
      setStep(3)
      window.setTimeout(() => setInputLocked(false), 500)
      return
    }

    if (step === 3) {
      if (qIndex < TOTAL - 1) {
        setDeckKey(`q-${qIndex + 1}` as DeckKey)
        setStep(0)
      } else {
        setDeckKey('end')
        setStep(0)
      }
    }
  }, [deckKey, inputLocked, qIndex, step])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Enter') return
      e.preventDefault()
      advance()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [advance])

  return (
    <div className="relative min-h-dvh w-full overflow-hidden bg-[#020203] font-sans text-stone-100">
      <div
        className="pointer-events-none fixed inset-0 bg-cover bg-center bg-no-repeat opacity-[0.45] transition-opacity duration-1000"
        style={{ backgroundImage: `url('/back.jpg')` }}
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(120,53,15,0.1)_0%,transparent_65%),radial-gradient(ellipse_at_50%_100%,rgba(15,23,42,0.6)_0%,#020203_85%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      {progressLabel && (
        <p className="fixed bottom-10 left-1/2 z-[100] -translate-x-1/2 font-sans text-xs font-medium uppercase tracking-[0.45em] text-stone-500/90">
          {progressLabel}
        </p>
      )}

      <div className="relative z-10 flex min-h-dvh w-full items-center justify-center">
        <AnimatePresence mode="wait" onExitComplete={() => setInputLocked(false)}>
          {deckKey === 'title' && (
            <PaperTearSlide key="title">
              <motion.div
                className="flex w-full max-w-4xl flex-col items-center px-6 text-center"
                initial="initial"
                animate="animate"
                variants={slideEnterBehind}
              >
                <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.55em] text-amber-600/90">
                  Karnataka Ethnicity
                </p>
                <h1 className="font-display text-5xl tracking-tight text-amber-50 sm:text-6xl md:text-7xl">
                  The Thali Trail
                </h1>
                <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-stone-400 md:text-xl">
                  A Journey Through Karnataka&apos;s Ethnic Cuisine
                </p>
                <motion.p
                  className="mt-20 font-sans text-sm uppercase tracking-[0.35em] text-stone-500"
                  animate={{ opacity: [0.45, 1, 0.45] }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  Press Enter to Begin
                </motion.p>
              </motion.div>
            </PaperTearSlide>
          )}

          {deckKey !== 'title' &&
            deckKey !== 'end' &&
            question &&
            qIndex !== null && (
              <PaperTearSlide key={deckKey}>
                <motion.div
                  className="relative w-full max-w-4xl px-6"
                  initial="initial"
                  animate="animate"
                  variants={slideEnterBehind}
                >
                  {step < 3 && (
                    <>
                      <p className="mb-10 text-center font-sans text-xs font-semibold uppercase tracking-[0.4em] text-amber-600/85">
                        {question.teamName}
                      </p>
                      <div className="space-y-10">
                        <BurnReveal
                          text={question.clues[0]}
                          revealKey={`${deckKey}-c0`}
                        />
                        {step >= 1 && (
                          <BurnReveal
                            text={question.clues[1]}
                            revealKey={`${deckKey}-c1`}
                          />
                        )}
                        {step >= 2 && (
                          <BurnReveal
                            text={question.clues[2]}
                            revealKey={`${deckKey}-c2`}
                          />
                        )}
                      </div>
                    </>
                  )}
                  {step === 3 && (
                    <AnswerReveal
                      dish={question.dish}
                      ethnicity={question.ethnicity}
                      description={question.description}
                      imageUrl={question.image}
                    />
                  )}
                </motion.div>
              </PaperTearSlide>
            )}

          {deckKey === 'end' && (
            <PaperTearSlide key="end">
              <motion.div
                className="flex max-w-2xl flex-col items-center px-6 text-center"
                initial="initial"
                animate="animate"
                variants={slideEnterBehind}
              >
                <h2 className="font-display text-4xl text-amber-50 sm:text-5xl">
                  The trail ends here
                </h2>
                <p className="mt-6 font-sans text-lg text-stone-400">
                  Thank you for walking Karnataka&apos;s thali—one ember at a
                  time.
                </p>
                <motion.p
                  className="mt-16 font-sans text-sm uppercase tracking-[0.35em] text-stone-500"
                  animate={{ opacity: [0.45, 1, 0.45] }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  Press Enter to Replay
                </motion.p>
              </motion.div>
            </PaperTearSlide>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
