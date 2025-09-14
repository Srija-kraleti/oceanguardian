import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LanguageToggle from './components/LanguageToggle';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div style={{ fontFamily: 'Roboto, sans-serif' }}>
          <Dashboard />
          <LanguageToggle />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;