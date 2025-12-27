import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import VisionMission from './pages/VisionMission';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Enquiry from './pages/Enquiry';
import Credits from './pages/Credits';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vision-mission" element={<VisionMission />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="enquiry" element={<Enquiry />} />
          <Route path="credits" element={<Credits />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
