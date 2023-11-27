// App.js
import React, { useState } from 'react';
import HomePage from './components/Home';
import SettingsScreen from './components/Settings';
import CameraFeed from './components/CameraFeed';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState('medium');
  const [isSettingsScreenOpen, setIsSettingsScreenOpen] = useState(false);

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  const handleFontSizeChange = (selectedFontSize) => {
    setFontSize(selectedFontSize);
  };

  const openSettingsScreen = () => {
    setIsSettingsScreenOpen(true);
  };

  const closeSettingsScreen = () => {
    setIsSettingsScreenOpen(false);
  };

  return (
    <div className={`App ${theme}`}>
      <HomePage onOpenSettings={openSettingsScreen} />
      {isSettingsScreenOpen && (
        <SettingsScreen
          theme={theme}
          fontSize={fontSize}
          onThemeChange={handleThemeChange}
          onFontSizeChange={handleFontSizeChange}
          onClose={closeSettingsScreen}
        />
      )}
    </div>
  );
}

export default App;
