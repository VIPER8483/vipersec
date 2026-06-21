import React from 'react';
import Layout from '@theme/Layout';
import Terminal from '../components/Terminal';

export default function Home() {
  return (
    <Layout
      title="VIPERSEC"
      description="Cybersecurity Portfolio of Shantanu Kakade"
    >
      {/* HERO SECTION */}
      <main
        style={{
          minHeight: '100vh',
          background: '#0b1120',
          color: '#ffffff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '40px 20px',
        }}
      >
        <div>

          <h1
            style={{
              fontSize: '72px',
              color: '#00ff88',
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
              color: '#cbd5e1',
            }}
          >
            Junior Penetration Tester
          </p>

          <p
            style={{
              color: '#00ff88',
              marginTop: '10px',
              fontSize: '18px',
            }}
          >
            eJPT Certified • Web Pentesting • Active Directory
          </p>

          <div style={{ marginTop: '40px' }}>

            <button
              style={{
                padding: '15px 30px',
                background: '#00ff88',
                color: '#000',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                margin: '10px',
                fontSize: '18px',
              }}
            >
              📚 Resources
            </button>

            <button
              style={{
                padding: '15px 30px',
                background: '#2563eb',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                margin: '10px',
                fontSize: '18px',
              }}
            >
              🧪 Labs
            </button>

            <button
              style={{
                padding: '15px 30px',
                background: '#f59e0b',
                color: '#000',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                margin: '10px',
                fontSize: '18px',
              }}
            >
              📄 Resume
            </button>

          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '60px',
              flexWrap: 'wrap',
              marginTop: '70px',
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

      {/* ABOUT SECTION */}

      <section
        style={{
          background: '#111827',
          color: 'white',
          padding: '80px 20px',
        }}
      >
        <div
          style={{
            maxWidth: '900px',
            margin: 'auto',
          }}
        >

          <h2
            style={{
              color: '#00ff88',
              fontSize: '42px',
              marginBottom: '30px',
            }}
          >
            About Me
          </h2>

          <p
            style={{
              fontSize: '18px',
              lineHeight: '1.8',
            }}
          >
            Hi, I'm <strong>Shantanu Kakade</strong>, a Junior Penetration Tester
            passionate about Offensive Security, Web Application Security,
            Active Directory, Linux, Networking, and Capture The Flag (CTF)
            challenges.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: '1.8',
              marginTop: '20px',
            }}
          >
            My goal is to become a professional Penetration Tester by building
            practical skills through labs, certifications, and real-world
            projects.
          </p>

          <h3
            style={{
              marginTop: '40px',
              color: '#00ff88',
            }}
          >
            Current Learning
          </h3>

          <ul
            style={{
              fontSize: '18px',
              lineHeight: '2',
            }}
          >
            <li>✅ eJPT Certified</li>
            <li>📚 CCNA</li>
            <li>🐧 Linux</li>
            <li>🌐 Active Directory</li>
            <li>🕷 Web Application Security</li>
            <li>🛡 Privilege Escalation</li>
          </ul>

        </div>
      </section>
        <Terminal />
    </Layout>
  );
}