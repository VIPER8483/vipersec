import React from 'react';

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
          }}
        >
          VIPERSEC
        </h1>

        <h2>Cybersecurity Portfolio</h2>

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
          }}
        >
          eJPT • Web Security • Active Directory • Linux
        </p>

        <div
          style={{
            marginTop: '40px',
          }}
        >
          <button
            style={{
              padding: '15px 30px',
              margin: '10px',
              borderRadius: '8px',
              border: 'none',
              background: '#00FF88',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            📚 Resources
          </button>

          <button
            style={{
              padding: '15px 30px',
              margin: '10px',
              borderRadius: '8px',
              border: 'none',
              background: '#2563EB',
              color: 'white',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            🧪 Labs
          </button>

          <button
            style={{
              padding: '15px 30px',
              margin: '10px',
              borderRadius: '8px',
              border: 'none',
              background: '#F59E0B',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            📄 Resume
          </button>
        </div>

      </div>
    </section>
  );
}