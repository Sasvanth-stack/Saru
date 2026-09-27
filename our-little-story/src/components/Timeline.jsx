import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const memories = [
  {
    date: '02 March 2025',
    title: 'First Date',
    detail: 'Two seats at the theatre, Nilavuku En Mel Ennadi Kobam on the screen, and the first page of our story.',
    number: '01',
  },
  {
    date: '02 March 2025',
    title: 'First Kiss',
    detail: 'The same night became even more ours. Our first kiss, on the day it all began.',
    number: '02',
  },
  {
    date: '16 June 2025',
    title: 'Birthday Surprise',
    detail: 'You surprised me at a cafe and made my birthday one I’ll always keep close.',
    number: '03',
  },
  {
    date: '24 March 2025',
    title: 'Love Anniversary',
    detail: 'The date we chose to celebrate us: one story, two hearts, and so much still to come.',
    number: '04',
  },
]

export default function Timeline() {
  const [active, setActive] = useState(null)

  return (
    <section className="timeline story-section" id="timeline">
      <div className="section-inner timeline__inner">
        <div className="timeline-heading">
          <p className="eyebrow"><span /> THE DATES WE KEEP</p>
          <h2>A few moments<br /><em>that became ours.</em></h2>
        </div>
        <div className="timeline-list">
          {memories.map((memory, index) => {
            const isActive = active === index
            return (
              <div className={`timeline-item ${isActive ? 'timeline-item--active' : ''}`} key={memory.number}>
                <span className="timeline-rail" aria-hidden="true"><i /></span>
                <button
                  className="timeline-trigger"
                  type="button"
                  onClick={() => setActive(isActive ? null : index)}
                  aria-expanded={isActive}
                >
                  <span className="timeline-trigger__date">{memory.date}</span>
                  <span className="timeline-trigger__title">{memory.title}</span>
                  <span className="timeline-trigger__number">{memory.number}</span>
                  <span className="timeline-trigger__plus" aria-hidden="true">{isActive ? '−' : '+'}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      className="timeline-detail"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.38, ease: 'easeInOut' }}
                    >
                      <p>{memory.detail}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
