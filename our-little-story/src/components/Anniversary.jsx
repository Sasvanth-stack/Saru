import { motion } from 'framer-motion'
import MemoryPhoto from './MemoryPhoto.jsx'

const beats = ['1 story', '2 hearts', '∞ memories']

export default function Anniversary() {
  return (
    <section className="anniversary story-section" id="anniversary">
      <div className="section-wash section-wash--anniversary" aria-hidden="true" />
      <div className="section-inner anniversary__layout">
        <div className="anniversary__copy">
          <p className="eyebrow"><span /> THE DAY WE BECAME US</p>
          <p className="date-stamp">24 <i>•</i> 03 <i>•</i> 2025</p>
          <h2>Our Love<br /><em>Anniversary</em></h2>
          <MemoryPhoto src="/images/anniversary.jpg" label="24 March · ours" kind="anniversary" />
        </div>
        <div className="anniversary-count" aria-label="One story, two hearts, infinite memories">
          {beats.map((beat, index) => (
            <motion.div
              className="count-beat"
              key={beat}
              initial={{ opacity: 0, x: 22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, delay: index * 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="count-number">{beat.split(' ')[0]}</span>
              <span className="count-label">{beat.split(' ').slice(1).join(' ')}</span>
            </motion.div>
          ))}
          <motion.p
            className="anniversary-endnote"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, delay: 1.7 }}
          >
            And this was only the beginning.
          </motion.p>
        </div>
      </div>
      <div className="chapter-number" aria-hidden="true">02</div>
    </section>
  )
}
