import { useState, useEffect, useRef } from 'react'
import { Menu, Volume2, VolumeX, Globe, Accessibility, MessageCircle, Linkedin, Youtube, Mail } from 'lucide-react'

// Reddit icon (not in lucide, using custom SVG)
const RedditIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
  </svg>
)

// Bluesky icon (not in lucide, using custom SVG)
const BlueskyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z"/>
  </svg>
)

export default function Header({ activeTab, onTabChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)
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
              <span>🎯</span>
              <span>Mission</span>
            </div>
            <div className="menu-item" onClick={() => handleTabChange('playloads')}>
              <span>🎮</span>
              <span>Playloads</span>
            </div>
            <div className="menu-item" onClick={() => handleTabChange('comms')}>
              <span>📡</span>
              <span>Comms</span>
            </div>
            
            <div className="menu-divider"></div>
            
            <div className="menu-item" onClick={() => setSoundEnabled(!soundEnabled)}>
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

      <div className="header-right">
        <a href="#" className="social-icon" aria-label="Bluesky" target="_blank" rel="noopener noreferrer">
          <BlueskyIcon />
        </a>
        <a href="#" className="social-icon" aria-label="Reddit" target="_blank" rel="noopener noreferrer">
          <RedditIcon />
        </a>
        <a href="#" className="social-icon" aria-label="Discord" target="_blank" rel="noopener noreferrer">
          <MessageCircle size={20} />
        </a>
        <a href="#" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <Linkedin size={20} />
        </a>
        <a href="#" className="social-icon" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
          <Youtube size={20} />
        </a>
        <a href="#" className="social-icon" aria-label="Newsletter" target="_blank" rel="noopener noreferrer">
          <Mail size={20} />
        </a>
      </div>
    </header>
  )
}