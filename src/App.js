import Layout from './components/Layout'
import Sidebar from './components/Sidebar';
import './App.scss';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Layout />}></Route>
      <Route path="/" element={<Sidebar/>}> howdy</Route>
    </Routes>
    </div>
  );
}

export default App;
