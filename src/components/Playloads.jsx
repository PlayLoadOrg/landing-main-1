export default function Playloads() {
  const playloads = [
    {
      title: 'COGWAR',
      description: 'Cognitive warfare training focused on information operations, psychological tactics, and decision-making under pressure.',
      status: 'Active'
    },
    {
      title: 'CYBERSECURITY',
      description: 'Digital defense simulations covering threat detection, incident response, and network security operations.',
      status: 'Active'
    },
    {
      title: 'ETHICS',
      description: 'Study hard not because there are right answers to be found, but because you must live with the decisions you make.',
      status: 'Coming Soon'
    }
  ]

  return (
    <>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="section-heading">Training Modules</h2>
        <p className="paragraph">
          Select your operational specialty and begin mission-critical training.
        </p>
      </div>

      {playloads.map((playload, index) => (
        <div key={index} className="glass-container" style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <h3 className="section-heading" style={{ margin: 0 }}>{playload.title}</h3>
            <span style={{ 
              color: playload.status === 'Active' ? '#4ade80' : '#94a3b8',
              fontSize: '0.875rem',
              fontWeight: '600',
              textTransform: 'uppercase'
            }}>
              {playload.status}
            </span>
          </div>
          <p className="paragraph" style={{ marginBottom: '1rem' }}>
            {playload.description}
          </p>
          {playload.status === 'Active' && (
            <button className="btn-pill">Launch Training</button>
          )}
        </div>
      ))}
    </>
  )
}