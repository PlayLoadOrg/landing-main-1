export default function Comms() {
  return (
    <div style={{ maxWidth: '900px', width: '100%' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="section-heading">Communications</h2>
        <p className="paragraph">
          Establish contact with command and join the operator community.
        </p>
      </div>

      <div className="glass-container">
        <h3 className="section-heading">Discord Community</h3>
        <p className="paragraph">
          Join our active community of operators, share tactics, coordinate training sessions, 
          and participate in competitive tournaments.
        </p>
        <button className="btn-pill">Join Discord</button>
      </div>

      <div className="glass-container">
        <h3 className="section-heading">Direct Contact</h3>
        <p className="paragraph">
          For partnership inquiries, enterprise training solutions, or technical support, 
          reach out to our operations team.
        </p>
        <p className="paragraph" style={{ marginBottom: '0.5rem' }}>
          <strong style={{ color: '#4ade80' }}>Email:</strong> ops@playload.org
        </p>
        <p className="paragraph">
          <strong style={{ color: '#4ade80' }}>Response Time:</strong> 24-48 hours
        </p>
      </div>

      <div className="glass-container">
        <h3 className="section-heading">Social Channels</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button className="btn-pill">Twitter</button>
          <button className="btn-pill">YouTube</button>
          <button className="btn-pill">GitHub</button>
        </div>
      </div>
    </div>
  )
}