// WelcomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/help');
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <button 
                onClick={handleClick} 
                style={{
                    padding: '20px 40px',
                    fontSize: '35px',
                    borderRadius: '25px',
                    border: 'none',
                    color: 'white',
                    backgroundColor: '#007BFF',
                    cursor: 'pointer',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}
            >
                Welcome to VISION
            </button>
        </div>
    );
}

export default WelcomePage;