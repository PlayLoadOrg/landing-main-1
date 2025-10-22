// Mission.jsx

import React, { useEffect } from 'react';

export default function Mission() {
  // This hook runs once after the component mounts to the screen.
  // It finds the main scrolling container and scrolls it to the top.
  useEffect(() => {
    const contentWrapper = document.querySelector('.content-wrapper');
    if (contentWrapper) {
      contentWrapper.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, []); // The empty dependency array [] means this effect runs only once.

  return (
    <>
      <div className="glass-container">
        <h3 className="section-heading">Mission Brief</h3>
        <p className="paragraph">
          PLAYLOAD delivers next-generation tactical training through immersive gaming experiences. 
          Our philosophy centers around decisions and intuition building rather than rote memorization.
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
          Designed from NATO doctrine, our training modules are designed to simulate 
          real-world scenarios with accurate threat modeling and tactical decision-making frameworks.
        </p>
        <p className="paragraph">
          All of our Playloads are released open source and are user funded based on a donation model 
          rather than traditional procurement. After your IT team audits, you can run the code on your 
          own servers, mod with your own confidential or proprietary scenarios without any need to
          get our permission. In other words, the same way that a Word document is your property even
          though the program belongs to Microsoft, the specific scenarios you create to run on our platform
          belong to you. If you want us to create custom scenarios, contact us. We can do that. 
        </p>
      </div>
    </>
  );
}