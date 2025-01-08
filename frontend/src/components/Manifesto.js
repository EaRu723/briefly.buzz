import React from 'react';

function Manifesto() {
  return (
    <div className="manifesto-container">
      <h1>Manifesto</h1>
      
      <div className="manifesto-content">
        <p className="manifesto-intro">
          In an age of endless scrolling and algorithmic manipulation, we declare our right to read news on our own terms. 
          This is not about creating another social network or news aggregator – it's about reclaiming our attention and mental space.
        </p>

        <section>
          <h2>Our Principles</h2>
          
          <div className="principle">
            <h3>1. Simplicity is Sovereignty</h3>
            <p>The news that matters to you should be accessible at a glance. No images, no advertisements, no "recommended for you" sections. 
            Just headlines, carefully curated by you, for you. When you want depth, you can click through. When you want brevity, you have it.</p>
          </div>

          <div className="principle">
            <h3>2. Your Attention, Your Rules</h3>
            <p>Every headline that appears on your feed should be there because you chose it to be there. Not because an algorithm predicted you might like it, 
            not because someone paid for it to be there, but because you deliberately decided it belongs in your information diet.</p>
          </div>

          <div className="principle">
            <h3>3. Open to All</h3>
            <p>The ability to create a personal news feed shouldn't be limited to those who can code. Everyone deserves the tools to curate their own information space. 
            Our code is open, our method is simple, and our purpose is clear: empowerment through accessibility.</p>
          </div>

          <div className="principle">
            <h3>4. Beyond the Echo Chamber</h3>
            <p>While we believe in personal curation, we encourage conscious choice in source selection. Your feed can include voices you disagree with, 
            perspectives that challenge you, and topics that stretch your understanding. The power lies in choosing these consciously rather than having them thrust upon you.</p>
          </div>

          <div className="principle">
            <h3>5. Information Without Invasion</h3>
            <p>Your personal news feed is yours alone. No tracking, no data collection, no behavior analysis. 
            Your reading habits are your business, not someone else's business model.</p>
          </div>
        </section>

        <section>
          <h2>The Vision</h2>
          <p>Imagine a world where everyone has their own personal news dashboard, as unique as their fingerprint. 
          Some might focus on technological breakthroughs, others on local community news, still others on global policy developments. 
          The commonality isn't in what they read, but in how they read it – consciously, intentionally, and without digital clutter.</p>
        </section>

        <section>
          <h2>The Call to Action</h2>
          <ul>
            <li>Create your own personal news feed</li>
            <li>Share the code with others</li>
            <li>Help others set up their feeds</li>
            <li>Contribute to improving the core functionality</li>
            <li>Spread the idea that news consumption should be a conscious choice</li>
          </ul>
        </section>

        <section>
          <h2>The Promise</h2>
          <ul>
            <li>Free to use</li>
            <li>Open source</li>
            <li>Simple by design</li>
            <li>Focused on headlines</li>
            <li>User-controlled</li>
            <li>Free from tracking</li>
          </ul>
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