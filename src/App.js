import Layout from './components/Layout'
import './App.scss';
import {Routes} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
}

export default App;
