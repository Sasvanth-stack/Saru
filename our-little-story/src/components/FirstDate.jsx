import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import MemoryPhoto from './MemoryPhoto.jsx'

export default function FirstDate() {
  const [opened, setOpened] = useState(false)
  const [kissRevealed, setKissRevealed] = useState(false)

  const openMemory = () => {
    if (opened) return
    setOpened(true)
    window.setTimeout(() => setKissRevealed(true), 1150)
  }

  return (
    <section className="first-date story-section" id="first-date">
      <div className="section-wash section-wash--theatre" aria-hidden="true" />
      <div className="section-inner first-date__layout">
        <motion.div
          className="first-date__copy"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75 }}
        >
          <p className="eyebrow"><span /> THE OPENING SCENE</p>
          <p className="date-stamp">02 <i>•</i> 03 <i>•</i> 2025</p>
          <h2>The day it<br /><em>all started…</em></h2>
          <p className="body-copy">One movie, two seats, and a night that quietly changed everything.</p>
          <MemoryPhoto src="/images/first-date.jpg" label="Theatre · 02 March" kind="theatre" />
        </motion.div>

        <motion.div
          className="ticket-stage"
          initial={{ opacity: 0, x: 28, rotateY: 5 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
        >
          <div className={`movie-ticket ${opened ? 'movie-ticket--open' : ''}`}>
            <div className="ticket-topline">
              <span>ADMIT TWO</span><span className="ticket-stamp">NO. 001</span>
            </div>
            <div className="ticket-main">
              <p className="ticket-kicker">OUR FIRST DATE</p>
              <p className="ticket-date">02 March 2025</p>
              <div className="ticket-rule"><span /><i>✦</i><span /></div>
              <h3>Nilavuku En Mel<br />Ennadi Kobam</h3>
              <div className="ticket-meta"><span>ONE SCREEN</span><span>ONE BEGINNING</span></div>
            </div>
            <div className="ticket-stub">
              <span className="stub-vertical">A NIGHT TO KEEP</span>
              <div className="ticket-barcode" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
              <span className="stub-number">02·03·25</span>
            </div>
            <div className="ticket-perforation" aria-hidden="true" />
            <div className="ticket-fold" aria-hidden="true" />
          </div>

          <AnimatePresence mode="wait">
            {opened ? (
              <motion.div
                className="memory-reveal"
                key="reveal"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                aria-live="polite"
              >
                <p>That wasn’t just our first date.</p>
                {kissRevealed && (
                  <motion.p
                    className="kiss-line"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    It was also our first kiss. <span aria-hidden="true">♥</span>
                  </motion.p>
                )}
                {kissRevealed && <span className="heart-spark" aria-hidden="true">♥</span>}
              </motion.div>
            ) : (
              <button className="button button--outline" type="button" onClick={openMemory}>
                Open This Memory <span aria-hidden="true">↗</span>
              </button>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      <div className="chapter-number" aria-hidden="true">01</div>
    </section>
  )
}
