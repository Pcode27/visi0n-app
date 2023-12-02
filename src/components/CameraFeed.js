import React, { useEffect } from 'react';

const CameraFeed = ({ videoRef }) => {
  const constraints = {
    video: {
      facingMode: { ideal: 'environment' } // for the back camera
    }
  };

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia(constraints)
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((error) => {
          console.error('Error accessing camera:', error);
        });
    }
  }, [videoRef]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadedmetadata', () => {
        console.log(video.videoWidth);
      });
    }
  }, [videoRef]);

  return (
    <div className="camera-feed">
      <video ref={videoRef} autoPlay playsInline muted></video>
    </div>
  );
};

export default CameraFeed;