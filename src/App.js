// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home';
import HelpPage from './components/Help'; 
import WelcomePage from './components/WelcomePage';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<HomePage/>} />
                <Route path="/help" element={<HelpPage/>} /> 
                <Route path="/" element={<WelcomePage/>} />
            </Routes>
        </Router>
    );
}

export default App;