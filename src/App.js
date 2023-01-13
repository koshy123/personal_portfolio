import Layout from './components/Layout'
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import './App.scss';
import {Routes, Route} from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Layout />} > 
      <Route  index element={<Home/>} />
      <Route  path="about" element={<About/>} />
      <Route  path="contact" element={<Contact/>} />
      <Route  path="projects" element={<Projects/>} />

      </Route>
    </Routes>
    </div>
  );
}

export default App;
