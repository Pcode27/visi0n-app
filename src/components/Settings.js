import React from 'react';

const SettingsScreen = ({ theme, fontSize, objectTypes, onThemeChange, onFontSizeChange, onObjectTypesChange, onClose }) => {
  const handleThemeChange = (e) => {
    const selectedTheme = e.target.value;
    onThemeChange(selectedTheme);
  };

  const handleFontSizeChange = (e) => {
    const selectedFontSize = e.target.value;
    onFontSizeChange(selectedFontSize);
  };
  const handleObjectTypesChange = (e) => {
    const selectedObjectTypes = Array.from(e.target.selectedOptions, option => option.value);
    onObjectTypesChange(selectedObjectTypes);
  };
  return (
    <div className="settings-screen">
      <h2>Settings</h2>
      <div>
        <label>
          Theme:
          <select value={theme} onChange={handleThemeChange}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Font Size:
          <select value={fontSize} onChange={handleFontSizeChange}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Find:
          <select multiple={true} value={objectTypes} onChange={handleObjectTypesChange}>
            <option value="book">Book</option>
            <option value="phone">Phone</option>
            <option value="furniture">Furniture</option>
            <option value="doors">Doors</option>
            <option value="orange">Orange</option>
              
          </select>
        </label>
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default SettingsScreen;
