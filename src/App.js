import logo from './logo.svg';
import './App.css';
import {MainApp} from './components/MainAppComponent'
import { Routes, Route, Link } from "react-router-dom";
import {Home} from './components/Home'
import {About} from './components/About'
import {Spotlight} from './components/Spotlight'
import {Events} from './components/Events/Events'

function App() {
  return (
    <div className="App">
      <MainApp/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Spotlight" element={<Spotlight />} />
      </Routes>
    </div>
  );
}

export default App;
