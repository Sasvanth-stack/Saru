import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const closingLines = [
  'From a movie theatre…',
  'to a birthday surprise…',
  'to everything that came after…',
]

export default function FinalMessage() {
  const [opened, setOpened] = useState(false)

  return (
    <footer className="final-section story-section" id="final">
      <div className="final-sky" aria-hidden="true">
        {Array.from({ length: 28 }, (_, index) => (
          <i className="final-star" key={index} style={{ left: `${(index * 61 + 12) % 100}%`, top: `${(index * 43 + 8) % 88}%`, animationDelay: `${(index % 7) * -0.8}s` }} />
        ))}
        <div className="final-halo" />
      </div>
      <div className="final-content">
        <div className="closing-lines" aria-label="From a movie theatre, to a birthday surprise, to everything that came after">
          {closingLines.map((line, index) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: index * 0.75 }}
            >{line}</motion.p>
          ))}
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 2.7 }}
        >This is <em>our story.</em></motion.h2>
        <motion.button
          className="button button--glow"
          type="button"
          onClick={() => setOpened(true)}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 3.4 }}
          disabled={opened}
        >
          {opened ? 'A little more, just for you' : 'One More Thing'} <span aria-hidden="true">♥</span>
        </motion.button>

        <AnimatePresence>
          {opened && (
            <motion.div
              className="love-letter"
              initial={{ opacity: 0, y: 24, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              aria-live="polite"
            >
              <p>I don’t know what the future has planned for us.</p>
              <p>But if I get to choose,</p>
              <p className="letter-list">I want many more dates,<br />birthdays,<br />silly fights,<br />random conversations,<br />and memories with you.</p>
              <p className="letter-signoff">I love You Ammu Mahh. <span aria-hidden="true">♥</span></p>
            </motion.div>
          )}
        </AnimatePresence>
        <a className="back-to-top" href="#home">BACK TO THE BEGINNING <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  )
}
