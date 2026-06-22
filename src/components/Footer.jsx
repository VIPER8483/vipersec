import React from 'react';

export default function Footer() {
  return (
    <footer
      style={{
        background: '#111827',
        color: '#ffffff',
        padding: '50px 20px',
        textAlign: 'center',
        borderTop: '1px solid #1f2937',
      }}
    >
      <h2
        style={{
          color: '#00ff88',
          marginBottom: '10px',
        }}
      >
        🐍 VIPERSEC
      </h2>

      <p>Cybersecurity Portfolio</p>

      <p style={{ color: '#9ca3af' }}>
        Junior Penetration Tester
      </p>

      <div
        style={{
          marginTop: '25px',
          display: 'flex',
          justifyContent: 'center',
          gap: '25px',
          flexWrap: 'wrap',
        }}
      >
        <a
          href="https://github.com/VIPER8483"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#00ff88' }}
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/shantanu-kakade-74b587316"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#00ff88' }}
        >
          LinkedIn
        </a>

        <a
          href="mailto:iamshantanu121212@gmail.com"
          style={{ color: '#00ff88' }}
        >
          Email
        </a>
      </div>

      <p
        style={{
          marginTop: '30px',
          color: '#6b7280',
          fontSize: '14px',
        }}
      >
      
      </p>
    </footer>
  );
}