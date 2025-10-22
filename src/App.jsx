import { useState } from 'react'
import ShaderPlayer from './components/glslPlayer.jsx'
import Header from './components/Header.jsx'
import Mission from './components/Mission.jsx'
import Playloads from './components/Playloads.jsx'
import Comms from './components/Comms.jsx'
import greenCircles from './assets/greenCircles.frag?raw'
import './App.css'

export default function App() {
  const [activeTab, setActiveTab] = useState('mission')

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
      
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="content-wrapper">
        {renderContent()}
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