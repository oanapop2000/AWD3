import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/homePage/HomePage';
import Contact from './pages/contactPage/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
