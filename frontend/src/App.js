import './App.css';

function App() {
  const stories = [
    {
      id: 1,
      title: "Magic/tragic email links: don't make them the only option",
      url: "https://recyclebin.zip",
      points: 261,
      author: "gepto24",
      time: "4 hours ago",
      comments: 120
    },
    {
      id: 2,
      title: "Mistakes engineers make in large established codebases",
      url: "https://seangoedecke.com",
      points: 205,
      author: "BerisLavaPC",
      time: "4 hours ago",
      comments: 100
    },
    {
      id: 3,
      title: "Show HN: Tramway SDK – The Unholy Union Between Half-Life and Morrowind Engines",
      url: "https://racenis.github.io",
      points: 425,
      author: "racenis",
      time: "9 hours ago",
      comments: 154
    },
    {
      id: 4,
      title: "Show HN: HipScript – Run CUDA in the Browser with WebAssembly and WebGPU",
      url: "https://lights0123.com",
      points: 155,
      author: "lights0123",
      time: "6 hours ago",
      comments: 23
    },
    {
      id: 5,
      title: "A Day in the Life of a Prolific Voice Phishing Crew",
      url: "https://krebsonsecurity.com",
      points: 126,
      author: "tosdacrot1",
      time: "10 hours ago",
      comments: 20
    }
  ];

  return (
    <div className="App">
      <header>
        <div className="logo-container">
          <img src="/assets/beehive_9466816.png" alt="Briefly Buzz Logo" className="logo" />
          <a href="#" className="site-title">Briefly Buzz</a>
        </div>
        <a href="#">politics</a> | <a href="#">business</a> | <a href="#">tech</a> | <a href="#">sports</a>
      </header>
      
      <main>
        {stories.map((story) => (
          <div key={story.id} className="item">
            <span className="rank">{story.id}. </span>
            <a href={story.url} className="item-title">{story.title}</a>
            <div className="item-details">
              {story.points} points by <a href="#">{story.author}</a> {story.time} | <a href="#">hide</a> | <a href="#">{story.comments} comments</a>
            </div>
          </div>
        ))}
      </main>

      <footer>
        <p>Briefly Buzz © 2025</p>
      </footer>
    </div>
  );
}

export default App; 