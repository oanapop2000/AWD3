import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Contact from './pages/contactPage/contactPage';
import Personal from './pages/personalPage/personalPage';
import HomePage from './pages/homePage/homePage';
import OOP from './pages/subjectsPage/oopPage';
import AI from './pages/subjectsPage/aiPage';

function App() {
  return (
    <Router basename="/AWD3">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutMe" element={<Personal />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/oop" element={<OOP />} />
        <Route path="/ai" element={<AI />} />
      </Routes>
    </Router>
  );
}

export default App;
