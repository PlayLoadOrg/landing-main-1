import { useState, useEffect, useRef } from 'react'
import { Menu, Volume2, VolumeX, Globe, Accessibility } from 'lucide-react'

export default function Header({ activeTab, onTabChange, soundEnabled, onSoundToggle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  const handleTabChange = (tab) => {
    onTabChange(tab)
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="header-left" ref={menuRef}>
          <button 
            className={`menu-button ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <Menu size={24} />
          </button>

          {isMenuOpen && (
            <div className="menu-dropdown">
              <div className="menu-item" onClick={() => handleTabChange('mission')}>
                <span></span>
                <span>Mission</span>
              </div>
              <div className="menu-item" onClick={() => handleTabChange('playloads')}>
                <span></span>
                <span>Playloads</span>
              </div>
              <div className="menu-item" onClick={() => handleTabChange('comms')}>
                <span></span>
                <span>Comms</span>
              </div>
              
              <div className="menu-divider"></div>
              
              <div className="menu-item" onClick={onSoundToggle}>
                {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
                <span>Sound: {soundEnabled ? 'On' : 'Off'}</span>
              </div>
              <div className="menu-item">
                <Globe size={20} />
                <span>Language: EN</span>
              </div>
              <div className="menu-item">
                <Accessibility size={20} />
                <span>Accessibility</span>
              </div>
            </div>
          )}
        </div>

        <div className="header-branding">
          <div className="brand-name"><strong>PLAYLOAD.ORG</strong></div>
          <div className="brand-tagline">HIGH CALIBER WAR GAMES</div>
        </div>
      </div>
    </header>
  )
}