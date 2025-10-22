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
        <h3 className="section-heading">Mission Brief</h3>
        <p className="paragraph">
          <strong>The modern battlespace is the human mind.</strong> Civilian or soldier, we're all under 
          relentless psychological attack. Traditional training built on memorization and PowerPoint slides 
          can't build the intuition and judgment required to win cognitive battles. PLAYLOAD delivers 
          next-generation tactical training through immersive gaming experiences where practice is the only 
          path to mastery—fields like cognitive warfare, ethics under pressure, and split-second decision-making 
          in fog-of-war conditions.
        </p>
        <p className="paragraph">
          Our standard is brutal: unless at least 25% of participants who are required to complete training 
          return voluntarily because they're hooked, we haven't earned the right to call it a "playload." 
          Compliance that becomes compulsion. Training so engaging that mandated practice transforms into 
          obsession. That's the mission.
        </p>
      </div>

      <div className="glass-container">
        <h3 className="section-heading">Operational Framework</h3>
        <p className="paragraph">
          Our scenarios simulate real-world cognitive threats using NATO doctrine, OSCE frameworks, and 
          adversary tactics observed in active operations. Narrative Front—our flagship cognitive warfare 
          trainer—is built with input from active cogwar practitioners. Each playload is built on verifiable 
          strategic principles, then stress-tested until the training experience matches operational reality.
        </p>
        <p className="paragraph">
          All playloads are released open source under member support. Subscribe to get monthly scenario drops, 
          roadmap voting rights, and direct dev team access. Share freely with your unit, colleagues, or family. 
          Run our code on your servers. Modify scenarios with your own classified content without permission—the 
          platform is ours, but your scenarios are yours. Need custom development? Contact us. We deploy tactical 
          training solutions for organizations who can't afford to lose the cognitive fight.
        </p>
      </div>
    </>
  );
}