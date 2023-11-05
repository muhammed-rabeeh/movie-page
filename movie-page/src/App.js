import 'daisyui/dist/full.css'
import Navbar from './components/Navbar';
import Card from './components/Card';
import EmbeddedYouTubeVideo from './components/EmbeddedYouTubeVideo';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <EmbeddedYouTubeVideo/>
        <Card />
      </header>
    </div>
  );
}

export default App;
