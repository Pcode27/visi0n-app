// HelpPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function HelpPage() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home');
    }

    return (
        <div style={{ padding: '20px' }}>
        <h1 style={{ color: '#007BFF', textAlign: 'center' }}>HOW TO USE APP</h1>
        <ol style={{ fontSize: '22px', lineHeight: '1.6' }}>
            <li>Hold the mobile device vertically to maintain stability and improve accuracy.</li>
            <li>Keep the camera clean and unobstructed for optimal visibility.</li>
            <li>Use the application in well-lit environments for better performance.</li>
            <li>Carry a backup equipment like a white cane for alternative assistance.</li>
            <li>Maintain a stable internet connection for smooth communication and timely updates.</li>
        </ol>
            <button 
    onClick={handleClick} 
    style={{
        padding: '15px 30px',
        fontSize: '25px',
        borderRadius: '5px',
        border: 'none',
        color: 'white',
        backgroundColor: '#007BFF',
        cursor: 'pointer',
        marginTop: '20px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
    }}
>
    LET'S GET STARTED
</button>
        </div>
    );
}

export default HelpPage;