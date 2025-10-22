// src/App.jsx

import { useState, useRef, useEffect } from 'react'
import ShaderPlayer from './components/glslPlayer.jsx'
import Header from './components/Header.jsx'
import Mission from './components/Mission.jsx'
import Playloads from './components/Playloads.jsx'
import Comms from './components/Comms.jsx'
import HumanVerification from './components/HumanVerification.jsx'
import greenCircles from './assets/greenCircles.frag?raw'
import audioFile from './assets/the-last-run.mp3'
import './App.css'

export default function App() {
  const [activeTab, setActiveTab] = useState('mission')
  const [isVerified, setIsVerified] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const audioRef = useRef(null)
  
  // === KEY FIX FOR SCROLLING ===
  // 1. Create a ref to hold a reference to our scrolling div
  const contentWrapperRef = useRef(null);

  // 2. This effect runs every single time the 'activeTab' state changes
  useEffect(() => {
    // If our scrolling div exists, scroll it to the top
    if (contentWrapperRef.current) {
      contentWrapperRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeTab]); // The dependency array ensures this runs only when activeTab changes

  const handleSoundToggle = () => {
    const newSoundState = !soundEnabled
    setSoundEnabled(newSoundState)
    
    if (audioRef.current) {
      if (newSoundState) {
        audioRef.current.play().catch(err => {
          console.log('Audio play failed:', err)
        })
      } else {
        audioRef.current.pause()
      }
    }
  }

  const handleVerify = () => {
    setIsVerified(true)
    
    if (soundEnabled) {
      if (!audioRef.current) {
        const audio = new Audio(audioFile)
        audio.loop = true
        audio.volume = 0.5
        audioRef.current = audio
      }
      
      audioRef.current.play().catch(err => {
        console.log('Audio autoplay blocked:', err)
      })
    }
  }

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const renderContent = () => {
    switch(activeTab) {
      case 'mission':
        return <Mission />
      case 'playloads':
        return <Playloads />
      case 'comms':
        return <Comms />
      default:
        return <Mission />
    }
  }

  return (
    <div>
      <ShaderPlayer shaderSource={greenCircles} />
      
      {!isVerified && (
        <HumanVerification onVerify={handleVerify} />
      )}
      
      {/* The Header component doesn't need to change */}
      <Header 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        soundEnabled={soundEnabled}
        onSoundToggle={handleSoundToggle}
      />
      
      {/* 3. Attach the ref to the content-wrapper div */}
      <div className="content-wrapper" ref={contentWrapperRef}>
        <div className="main-content">
          {renderContent()}
        </div>
      </div>

      <nav className="tab-nav">
        <button 
          className={`tab-button ${activeTab === 'mission' ? 'active' : ''}`}
          onClick={() => setActiveTab('mission')}
        >
          Mission
        </button>
        <button 
          className={`tab-button ${activeTab === 'playloads' ? 'active' : ''}`}
          onClick={() => setActiveTab('playloads')}
        >
          Playloads
        </button>
        <button 
          className={`tab-button ${activeTab === 'comms' ? 'active' : ''}`}
          onClick={() => setActiveTab('comms')}
        >
          Comms
        </button>
      </nav>
    </div>
  )
}