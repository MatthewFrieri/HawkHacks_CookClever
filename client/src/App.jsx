import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Signup from './signup';
import Home from './home';
import Lesson from './Lesson';
import Stirfry from './stirfry';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/stirfry" element={<Stirfry />} />
        <Route path="/Lesson" element={<Lesson />} />
      </Routes>
    </Router>
  );
}

export default App;
