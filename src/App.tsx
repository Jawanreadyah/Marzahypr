import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import CareersPage from './pages/CareersPage';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<CareersPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;