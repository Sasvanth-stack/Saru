import { motion } from 'framer-motion'

const stars = Array.from({ length: 54 }, (_, index) => ({
  left: `${(index * 47 + 9) % 100}%`,
  top: `${(index * 71 + 5) % 100}%`,
  delay: `${(index % 9) * -0.7}s`,
  size: index % 8 === 0 ? '3px' : '2px',
}))

export default function Hero({ onStart }) {
  const shiftScene = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    event.currentTarget.style.setProperty('--shift-x', `${x * 12}px`)
    event.currentTarget.style.setProperty('--shift-y', `${y * 12}px`)
  }

  return (
    <section className="hero section-dark" id="home" onPointerMove={shiftScene}>
      <div className="hero-sky" aria-hidden="true">
        {stars.map((star, index) => (
          <i
            className="star"
            key={index}
            style={{ left: star.left, top: star.top, animationDelay: star.delay, width: star.size, height: star.size }}
          />
        ))}
        <div className="moon" />
        <div className="hero-horizon" />
      </div>

      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Our Little Story, home">
          <span className="wordmark__seal">S<span>·</span>S</span>
          <span className="wordmark__text">OUR LITTLE STORY</span>
        </a>
        <a className="header-link" href="#timeline">A few dates <span aria-hidden="true">↗</span></a>
      </header>

      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <p className="eyebrow hero-eyebrow"><span /> A story, in little moments</p>
        <h1>Two people.<br /><em>One story.</em></h1>
        <p className="hero-subtitle">And somehow, every date became a memory.</p>
        <div className="initials-lockup" aria-label="S and S">
          <span>S</span><i aria-hidden="true">♥</i><span>S</span>
        </div>
        <button className="button button--light" type="button" onClick={onStart}>
          Start Our Story <span aria-hidden="true">→</span>
        </button>
      </motion.div>

      <div className="hero-footer">
        <span>EST. 2025</span>
        <a href="#first-date"><span className="scroll-line" /> SCROLL TO BEGIN</a>
        <span>MADE OF US</span>
      </div>
    </section>
  )
}
