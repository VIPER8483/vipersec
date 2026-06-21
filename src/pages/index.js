import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="VIPERSEC"
      description="Cybersecurity Portfolio of Shantanu Kakade"
    >
      <main
        style={{
          minHeight: '100vh',
          background: '#0b1120',
          color: '#ffffff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        <div>
          <h1
            style={{
              fontSize: '72px',
              marginBottom: '10px',
              color: '#00ff88',
              fontWeight: 'bold',
            }}
          >
            VIPERSEC
          </h1>

          <h2
            style={{
              fontSize: '36px',
              marginBottom: '20px',
            }}
          >
            Cybersecurity Portfolio
          </h2>

          <p
            style={{
              fontSize: '22px',
              color: '#cbd5e1',
            }}
          >
            Junior Penetration Tester
          </p>

          <p
            style={{
              fontSize: '18px',
              color: '#00ff88',
              marginTop: '10px',
            }}
          >
            eJPT Certified • Active Directory • Web Pentesting
          </p>

          <div style={{ marginTop: '40px' }}>
            <button
              style={{
                padding: '15px 35px',
                margin: '10px',
                fontSize: '18px',
                background: '#00ff88',
                color: '#000',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              📚 Resources
            </button>

            <button
              style={{
                padding: '15px 35px',
                margin: '10px',
                fontSize: '18px',
                background: '#2563eb',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              🧪 Labs
            </button>

            <button
              style={{
                padding: '15px 35px',
                margin: '10px',
                fontSize: '18px',
                background: '#f59e0b',
                color: '#000',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              📄 Resume
            </button>
          </div>

          <div
            style={{
              marginTop: '70px',
              display: 'flex',
              justifyContent: 'center',
              gap: '50px',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <h2 style={{ color: '#00ff88' }}>25+</h2>
              <p>Labs Completed</p>
            </div>

            <div>
              <h2 style={{ color: '#00ff88' }}>10+</h2>
              <p>Projects</p>
            </div>

            <div>
              <h2 style={{ color: '#00ff88' }}>3+</h2>
              <p>Certificates</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}