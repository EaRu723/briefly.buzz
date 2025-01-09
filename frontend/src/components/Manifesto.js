import React from 'react';

function Manifesto() {
  return (
    <div className="manifesto-container">
      <h1>Manifesto</h1>
      
      <div className="manifesto-content">
        <p className="manifesto-intro">
          In an age of endless scrolling and algorithmic manipulation, we declare the right to read our news on our terms.
        </p>

        <section>
          <h2>Project Status</h2>
          <p>This project is in its infancy. For now, it's simply a showcase of my personal news dashboard—but we're working so everyone can create their own.</p>
        </section>

        <section>
          <h2>The Vision</h2>
          <p>Imagine personal news dashboards as unique as fingerprints - from tech breakthroughs to local news to global policy. Not united by what we read, but by how we read: consciously and without digital noise.</p>
        </section>

        <section>
          <h2>Our Principles</h2>
          
          <div className="principle">
            <h3>1. Simplicity is Sovereignty</h3>
            <p>No images, no advertisements, no "for you" sections. 
            Just headlines, from sources you choose. When you want depth, you can click through. When you want brevity, you have it.</p>
          </div>

          <div className="principle">
            <h3>2. Your Attention, Your Rules</h3>
            <p>Every element on your feed is there because you chose it. No algorithmic suggestions, no paid promotions. Just the content you deliberately selected for your information diet.</p>
          </div>

          <div className="principle">
            <h3>3. Open to All</h3>
            <p>Personal news feeds shouldn't be limited to those who can code. Everyone deserves their own so our code is open source and we're working to make it accessible to everyone.</p>
          </div>

          <div className="principle">
            <h3>4. Information Without Invasion</h3>
            <p>Your personal news feed is yours alone. No tracking, no data collection, no behavior analysis. 
            Your reading habits are your business, not someone else's business model.</p>
          </div>
        </section>


        <section>
          <h2>Join the Revolution</h2>
          <ul>
            <li>Build your feed</li>
            <li>Share with others</li>
            <li>Contribute code</li>
            <li>help others</li>
            <li>Spread the word</li>
          </ul>
        </section>

        <section>
          <h2>The Promise</h2>
          <p>We're building an add free platform that's free to use, open source, and simple by design - focused on headlines, user control, and freedom from tracking.</p>
        </section>

        <p className="manifesto-closing">
          In choosing what information deserves your attention, you reclaim a fundamental freedom. 
          Your personal news feed isn't just a tool – it's a declaration of independence from the attention economy.
        </p>

        <p className="manifesto-footer">
          Build your feed. Share the code. Take control of your information diet.<br />
          <em>Welcome to your personal news revolution.</em>
        </p>
      </div>
    </div>
  );
}

export default Manifesto; 