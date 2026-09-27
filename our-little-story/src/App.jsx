import Hero from './components/Hero.jsx'
import FirstDate from './components/FirstDate.jsx'
import Anniversary from './components/Anniversary.jsx'
import Birthday from './components/Birthday.jsx'
import Timeline from './components/Timeline.jsx'
import FinalMessage from './components/FinalMessage.jsx'

export default function App() {
  const startStory = () => {
    document.getElementById('first-date')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      <Hero onStart={startStory} />
      <FirstDate />
      <Birthday />
      <Anniversary />
      <Timeline />
      <FinalMessage />
    </main>
  )
}
