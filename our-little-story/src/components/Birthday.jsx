import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import MemoryPhoto from './MemoryPhoto.jsx'

export default function Birthday() {
  const [visited, setVisited] = useState(false)

  return (
    <section className="birthday story-section" id="birthday">
      <div className="section-wash section-wash--cafe" aria-hidden="true" />
      <div className="section-inner birthday__layout">
        <motion.div
          className="birthday__copy"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75 }}
        >
          <p className="eyebrow eyebrow--warm"><span /> THE SURPRISE CHAPTER</p>
          <p className="date-stamp">16 <i>•</i> 06 <i>•</i> 2025</p>
          <h2>Then came<br /><em>my birthday…</em></h2>
          <p className="body-copy">A cafe, a very good secret, and the kind of surprise that stays with you.</p>
          <MemoryPhoto src="/images/birthday.jpg" label="A birthday afternoon · June 16" kind="birthday" />
        </motion.div>

        <motion.button
          className={`cafe-scene ${visited ? 'cafe-scene--visited' : ''}`}
          type="button"
          onClick={() => setVisited(true)}
          aria-expanded={visited}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85 }}
        >
          <span className="cafe-window" aria-hidden="true"><i /><i /><i /></span>
          <span className="cafe-pendant cafe-pendant--one" aria-hidden="true" />
          <span className="cafe-pendant cafe-pendant--two" aria-hidden="true" />
          <span className="cafe-table" aria-hidden="true" />
          <span className="coffee-cup" aria-hidden="true"><i /></span>
          <span className="cafe-scene__caption">
            <span className="cafe-scene__eyebrow">A LITTLE PLACE, A BIG FEELING</span>
            <strong>That June afternoon.</strong>
            <span className="cafe-scene__prompt">{visited ? 'THE MOMENT, KEPT CLOSE' : 'TAP TO STEP INSIDE'} <i aria-hidden="true">↗</i></span>
          </span>
        </motion.button>

        <AnimatePresence>
          {visited && (
            <motion.div
              className="birthday-reveal"
              initial={{ opacity: 0, height: 0, y: 12 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              aria-live="polite"
            >
              <p>You planned a surprise for me.</p>
              <p>You made my birthday a memory I’ll always keep. <span aria-hidden="true">♥</span></p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="chapter-number" aria-hidden="true">03</div>
    </section>
  )
}
