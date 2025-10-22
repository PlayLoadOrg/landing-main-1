// Mission.jsx

import React, { useEffect } from 'react';

export default function Mission() {
  useEffect(() => {
    const contentWrapper = document.querySelector('.content-wrapper');
    if (contentWrapper) {
      contentWrapper.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, []);

  return (
    <>
      <div className="glass-container">
        <h3 className="section-heading">What We're Building</h3>
        <p className="paragraph">
          <strong>The open-source standard for cognitive warfare training.</strong> Military and IC training 
          is either classified (inaccessible), contractor-built (incentivized for billable hours, not competence), 
          or academic (divorced from operational reality). We're practitioners building the training methodology 
          that should exist but doesn't—verifiable by operators, adoptable without procurement, forkable for 
          classified contexts, and improvable by the community that uses it.
        </p>
        <p className="paragraph">
          Our mission: at least 25% of participants who are required to complete training 
          return voluntarily because they're hooked. If we can't get a product there, we haven't yet earned the 
          right to call it a "playload." Training so engaging that compliance becomes compulsion. Practice that 
          transforms into mastery. That's what the standard demands.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
          <button 
            className="btn-pill"
            onClick={() => window.open('https://playloadorg.github.io/', '_blank')}
          >
            Try Narrative Front
          </button>
          <button 
            className="btn-pill"
            onClick={() => window.open('https://github.com/playloadorg', '_blank')}
          >
            Fork on GitHub
          </button>
        </div>
      </div>

      <div className="glass-container">
        <h3 className="section-heading">Why Open Source</h3>
        <p className="paragraph">
          <strong>Open source means verifiable, adoptable, and improvable.</strong> The core engine and scenario 
          editor are Apache 2.0. All scenarios are MIT licensed. Fork it, commercialize it, integrate it into 
          your proprietary platform—we don't care. What matters is that practitioners can validate the methodology, 
          organizations can adopt without procurement friction, and the community can contribute improvements.
        </p>
        <p className="paragraph">
          Closed training platforms optimize for vendor lock-in. We optimize for adoption. When your personnel are 
          already using this for professional development, formalizing it becomes easier than building from scratch. 
          That's how standards emerge—from practitioner consensus, not vendor pitch decks.
        </p>
      </div>

      <div className="glass-container">
        <h3 className="section-heading">Operational Framework</h3>
        <p className="paragraph">
          Our scenarios simulate real-world cognitive threats using NATO doctrine, OSCE frameworks, and adversary 
          tactics observed in active operations. <strong>Narrative Front</strong>—our flagship cognitive warfare 
          trainer—is built with input from NATO practitioners. Each scenario is stress-tested until the training 
          experience matches operational reality: the modern battlespace is the human mind, and traditional training 
          built on memorization and PowerPoint slides can't build the intuition required to win cognitive battles.
        </p>
        <p className="paragraph">
          Run our code on your servers. Modify scenarios with your own classified content without permission—the 
          platform is ours, but your scenarios are yours. Integration guides and SCORM packages available for 
          organizational deployment. Need custom development? We deploy tactical training solutions for organizations 
          who can't afford to lose the cognitive fight.
        </p>
      </div>

      <div className="glass-container">
        <h3 className="section-heading">Support Development</h3>
        <p className="paragraph">
          This is a solo effort with feedback from practitioners. It's not a company—it's a standard-building effort. 
          If this becomes what it should be, it won't be mine anymore—it'll be the community's. Everything is free 
          and always will be. Supporting members fund development time, infrastructure costs, and research access 
          that keeps this sustainable while I build toward institutional adoption.
        </p>
        <p className="paragraph">
          <strong>Quarterly newsletter subscribers</strong> get early access to new scenarios before public release, 
          participate in State of the Standard AMAs with guest practitioners, and help shape curriculum priorities 
          through annual voting. When organizations start formally adopting this and enterprise support revenue makes 
          member support optional, you'll have been part of building the standard from the ground up.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
          <button 
            className="btn-pill"
            onClick={() => window.open('https://playloadorg.substack.com', '_blank')}
          >
            Join the Movement
          </button>
        </div>
      </div>
    </>
  );
}