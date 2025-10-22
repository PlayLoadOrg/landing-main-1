import { useState } from 'react'

export default function HumanVerification({ onVerify }) {
  const [isHovering, setIsHovering] = useState(false)
  const [isExploding, setIsExploding] = useState(false)

  const handleVerify = () => {
    setIsExploding(true)
    
    // Wait for explosion animation, then verify
    setTimeout(() => {
      onVerify()
    }, 1200)
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(0, 0, 0, 0.95)',
      backdropFilter: 'blur(20px)',
      padding: '1rem'
    }}>
      {/* Explosion effect */}
      {isExploding && (
        <>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: '4px',
                height: '4px',
                background: '#4ade80',
                borderRadius: '50%',
                boxShadow: '0 0 20px #4ade80',
                animation: `explode${i} 1s ease-out forwards`,
                top: '50%',
                left: '50%',
              }}
            />
          ))}
          <style>{`
            ${[...Array(20)].map((_, i) => {
              const angle = (i * 18) * (Math.PI / 180);
              const distance = 300 + Math.random() * 200;
              const x = Math.cos(angle) * distance;
              const y = Math.sin(angle) * distance;
              return `
                @keyframes explode${i} {
                  0% {
                    transform: translate(0, 0) scale(1);
                    opacity: 1;
                  }
                  100% {
                    transform: translate(${x}px, ${y}px) scale(0);
                    opacity: 0;
                  }
                }
              `;
            }).join('')}
          `}</style>
        </>
      )}
      
      <div style={{
        textAlign: 'center',
        maxWidth: '500px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transform: isExploding ? 'scale(0.95)' : 'scale(1)',
        opacity: isExploding ? 0.5 : 1,
        transition: 'all 0.3s ease'
      }}>
        <h2 className="section-heading" style={{ 
          marginBottom: '2rem',
          fontSize: 'clamp(1.5rem, 5vw, 2.5rem)'
        }}>
          IDENTITY VERIFICATION
        </h2>
        <p className="paragraph" style={{ 
          marginBottom: '3rem',
          fontSize: 'clamp(0.9rem, 2.5vw, 1.125rem)'
        }}>
          Confirm human status to access PLAYLOAD training systems.
        </p>
        <button
          className="btn-pill"
          onClick={handleVerify}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          disabled={isExploding}
          style={{
            fontSize: 'clamp(1rem, 3vw, 1.25rem)',
            padding: 'clamp(0.875rem, 2vw, 1.25rem) clamp(2rem, 5vw, 3rem)',
            transform: isHovering && !isExploding ? 'scale(1.05)' : 'scale(1)',
            transition: 'all 0.3s ease',
            boxShadow: isExploding ? '0 0 30px #4ade80' : 'none',
            cursor: isExploding ? 'default' : 'pointer'
          }}
        >
          I'M A HUMAN
        </button>
      </div>
    </div>
  )
}