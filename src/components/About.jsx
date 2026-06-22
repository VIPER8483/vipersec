import React from 'react';

export default function About() {
  return (
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
  );
}