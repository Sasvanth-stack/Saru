import { useState } from 'react'

export default function MemoryPhoto({ src, label, kind }) {
  const [missing, setMissing] = useState(false)

  return (
    <div className={`memory-photo memory-photo--${kind} ${missing ? 'is-missing' : ''}`}>
      {!missing && <img src={src} alt="" onError={() => setMissing(true)} />}
      <div className="photo-grain" aria-hidden="true" />
      <div className="photo-caption">
        <span className="photo-caption__mark" aria-hidden="true">✳</span>
        <span>{label}</span>
      </div>
    </div>
  )
}
