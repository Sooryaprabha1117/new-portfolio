import React from 'react';
import Resume from './portfolio/Assets/Soorya Updated.pdf';
import BackgroundImage from './portfolio/Assets/A12.png';
import qrcode from "./portfolio/Assets/qrcode.png";
import "./ResumeP.css";

const ResumePage = () => {
  // Download resume
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'Resume_SP.pdf';
    link.click();
  };

  // Preview resume in a new tab
  const handlePreview = () => {
    window.open(Resume, '_blank'); // Open in new tab
  };

  return (
    <div
      className="resume-page"
      style={{
        display: "flex",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: '27%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        marginTop: "1%",
        minHeight: '97vh',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        overflowX: 'hidden',
        width: '100vw',
        boxSizing: 'border-box',
      }}
    >
      <img src={qrcode} id="qr" alt="QR Code" style={{ width: '200px', height: 'auto' }} />

      <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
        <button className="download-btn" onClick={handleDownload}>
          Download Resume
        </button>

        <button className="download-btn" onClick={handlePreview}>
          Preview Resume
        </button>
      </div>
    </div>
  );
};

export default ResumePage;
