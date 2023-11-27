import React, { useState, useRef } from 'react';
import CameraFeed from './CameraFeed';
import SettingsScreen from './Settings';

const HomePage = () => {
  const [isObjectDetectionRunning, setObjectDetectionRunning] = useState(false);
  const [isCameraActive, setCameraActive] = useState(false);
  const [isSettingsScreenOpen, setSettingsScreenOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState('medium');
  const videoRef = useRef(null);

  const startObjectDetection = () => {
    // Logic to start/stop object detection
  };

  const handleSettingsClick = () => {
    console.log('Settings button clicked');
    setSettingsScreenOpen(true);
  };

  const closeSettingsScreen = () => {
    console.log('Closing settings screen');
    setSettingsScreenOpen(false);
  };

  const handleThemeChange = (selectedTheme) => {
    console.log('Theme changed:', selectedTheme);
    setTheme(selectedTheme);
  };

  const handleFontSizeChange = (selectedFontSize) => {
    console.log('Font size changed:', selectedFontSize);
    setFontSize(selectedFontSize);
  };

  return (
    <div>
      <div className="header">
        <div className="title">VISION</div>
        <button className="settings-button" onClick={handleSettingsClick}>Settings</button>
      </div>
      <div className="camera-feed">
        <CameraFeed videoRef={videoRef} />
      </div>
      <div className="button-container">
        <button onClick={startObjectDetection}>
          {isCameraActive ? (isObjectDetectionRunning ? 'Stop Object Detection' : 'Start Object Detection') : <img src="" alt= "Start Camera" />}
        </button>
      </div>

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
};

export default HomePage;
