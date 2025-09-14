import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
  const { setLang } = useLanguage(); // <-- removed 'lang'
  return (
    <div style={{
      position: 'fixed',
      bottom: '1rem',
      right: '1rem',
      zIndex: 1000,
      display: 'flex',
      gap: '0.3rem'
    }}>
      <button onClick={() => setLang('en')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>🇺🇸</button>
      <button onClick={() => setLang('hi')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>🇮🇳</button>
      <button onClick={() => setLang('ta')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>🇹🇲</button>
    </div>
  );
};

export default LanguageToggle;