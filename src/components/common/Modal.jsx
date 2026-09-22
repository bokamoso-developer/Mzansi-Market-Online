import { X } from 'lucide-react'

export default function Modal({ title, children, onClose, wide = false }) {
  return (
    <div className="sheet-layer" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className={`sheet ${wide ? 'sheet--wide' : ''}`} role="dialog" aria-modal="true" aria-label={title}>
        <header>
          <h2>{title}</h2>
          <button className="icon-button" onClick={onClose} aria-label="Close"><X /></button>
        </header>
        <div className="sheet__body">{children}</div>
      </section>
    </div>
  )
}
