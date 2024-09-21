import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './index';
import Curso1 from './Curso1';
import Curso2 from './Curso2';
import Curso3 from './Curso3';
import Curso4 from './Curso4';
import Curso5 from './Curso5';
function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/curso1" element={<Curso1 />} />
              <Route path="/curso2" element={<Curso2 />} />
              <Route path="/curso3" element={<Curso3 />} />
              <Route path="/curso4" element={<Curso4 />} />
              <Route path="/curso5" element={<Curso5 />} />
          </Routes>
      </Router>
  );
}

export default App;