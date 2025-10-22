export default function Mission() {
  return (
    <div style={{ maxWidth: '900px', width: '100%' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="hero-title">PLAYLOAD.ORG</h1>
        <h2 className="hero-subtitle">HIGH CALIBER WAR GAMES</h2>
        <button className="btn-pill">Enter Training</button>
      </div>

      <div className="glass-container">
        <h3 className="section-heading">Mission Brief</h3>
        <p className="paragraph">
          PLAYLOAD delivers next-generation tactical training through immersive gaming experiences. 
          Our platform combines cognitive warfare, cybersecurity defense, and drone operations into 
          engaging simulations that sharpen critical skills for modern conflict.
        </p>
        <p className="paragraph">
          Whether you're training for military operations, corporate security, or competitive gaming, 
          PLAYLOAD provides the realistic scenarios and immediate feedback needed to achieve 
          operational excellence.
        </p>
      </div>

      <div className="glass-container">
        <h3 className="section-heading">Intelligence Overview</h3>
        <p className="paragraph">
          Built by veterans and security professionals, our training modules are designed to simulate 
          real-world scenarios with accurate threat modeling and tactical decision-making frameworks.
        </p>
        <p className="paragraph">
          All training data is anonymized and encrypted. We comply with international security standards 
          and maintain strict operational security protocols.
        </p>
      </div>
    </div>
  )
}