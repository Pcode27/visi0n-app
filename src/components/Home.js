import React, { useRef, useState, useEffect } from 'react';
import CameraFeed from './CameraFeed';
import axios from 'axios';

const HomePage = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraActive, setCameraActive] = useState(false);
  const [isNavigationActive, setNavigationActive] = useState(false);
  let intervalId = null;

  const captureImage = (video) => {
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL('image/jpeg');
  };

  const startObjectDetection = () => {
    if (!isCameraActive) {
      intervalId = setInterval(async () => {
        const image = captureImage(videoRef.current);
        try {
          /* const response = await axios.post('http://localhost:5000/detect', { image });
  
          // Draw results on canvas
          const context = canvasRef.current.getContext('2d');
          context.clearRect(0, 0, context.canvas.width, context.canvas.height);
          for (const object of response.data) {
            context.beginPath();
            context.rect(object.x, object.y, object.width, object.height);
            context.lineWidth = 2;
            context.strokeStyle = 'red';
            context.fillStyle = 'red';
            context.stroke();
            context.fillText(
              `${Math.round(object.score * 100)}% ${object.class}`,
              object.x,
              object.y > 10 ? object.y - 5 : 10
            );
          } */
        } catch (error) {
          console.error('Error during object detection:', error);
        }
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
  
    setCameraActive(!isCameraActive); // Toggle isCameraActive state
  };

  return (
    <div>
      <div className="header">
        <div className="title">VISION</div>
      </div>
      <div className="camera-feed">
        <CameraFeed videoRef={videoRef} />
        <canvas ref={canvasRef} style={{ position: 'absolute' }} />
      </div>
      <div className="button-container">
        <button onClick={startObjectDetection}>
          {isCameraActive ? 'STOP NAVIGATION' : 'START NAVIGATION'}
        </button>
      </div>
    </div>
  );
};

export default HomePage;