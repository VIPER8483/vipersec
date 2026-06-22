import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaShieldAlt,
} from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        background: '#0B1120',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <div>
        <img
          src="/logo/vipersec-logo.png"
          alt="VIPERSEC"
          style={{
            width: '140px',
            marginBottom: '25px',
          }}
        />

        <h1
          style={{
            fontSize: '72px',
            color: '#00FF88',
            marginBottom: '10px',
            fontWeight: 'bold',
          }}
        >
          VIPERSEC
        </h1>

        <h2 style={{ fontSize: '36px' }}>
          Cybersecurity Portfolio
        </h2>

        <p
          style={{
            fontSize: '22px',
            color: '#CBD5E1',
          }}
        >
          Junior Penetration Tester
        </p>

        <p
          style={{
            color: '#00FF88',
            marginTop: '15px',
            fontSize: '18px',
          }}
        >
          eJPT • Web Security • Active Directory • Linux
        </p>

        {/* Buttons */}

        <div style={{ marginTop: '40px' }}>
          <a href="/docs/intro">
            <button
              style={{
                padding: '15px 30px',
                margin: '10px',
                background: '#00FF88',
                color: '#000',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              📚 Resources
            </button>
          </a>

          <a href="/blog">
            <button
              style={{
                padding: '15px 30px',
                margin: '10px',
                background: '#2563EB',
                color: '#FFF',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              🧪 Labs
            </button>
          </a>

          <a
            href="https://github.com/VIPER8483"
            target="_blank"
            rel="noreferrer"
          >
            <button
              style={{
                padding: '15px 30px',
                margin: '10px',
                background: '#F59E0B',
                color: '#000',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              💻 GitHub
            </button>
          </a>
        </div>

        {/* Social Icons */}

        <div
          style={{
            marginTop: '50px',
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            fontSize: '34px',
          }}
        >
          <a
            href="https://github.com/VIPER8483"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#00FF88' }}
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/shantanu-kakade-74b587316"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#00FF88' }}
          >
            <FaLinkedin />
          </a>

          <a
            href="https://tryhackme.com/"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#00FF88' }}
          >
            <FaShieldAlt />
          </a>

          <a
            href="mailto:iamshantanu121212@gmail.com"
            style={{ color: '#00FF88' }}
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}