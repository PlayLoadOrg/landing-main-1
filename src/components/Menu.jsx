import { useState, useEffect, useRef } from 'react'

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const menuRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div ref={menuRef}>
      <button 
        className={`menu-button ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {isOpen && (
        <div className="menu-dropdown">
          <div className="menu-item" onClick={() => setSoundEnabled(!soundEnabled)}>
            <span>{soundEnabled ? '🔊' : '🔇'}</span>
            <span>Sound: {soundEnabled ? 'On' : 'Off'}</span>
          </div>
          <div className="menu-item">
            <span>🌐</span>
            <span>Language: EN</span>
          </div>
          <div className="menu-item">
            <span>♿</span>
            <span>Accessibility</span>
          </div>
        </div>
      )}
    </div>
  )
}