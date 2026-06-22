import React from 'react';

const certs = [
  {
    title: 'eJPT',
    issuer: 'INE Security',
    status: 'Completed',
    color: '#00ff88',
  },
  {
    title: 'IBM Cybersecurity Fundamentals',
    issuer: 'IBM',
    status: 'Completed',
    color: '#00ff88',
  },
  {
    title: 'LearnVern Ethical Hacking',
    issuer: 'LearnVern',
    status: 'Completed',
    color: '#00ff88',
  },
];

export default function Certifications() {
  return (
    <section
      style={{
        background: '#111827',
        color: 'white',
        padding: '90px 20px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: 'auto',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            color: '#00ff88',
            fontSize: '42px',
            marginBottom: '60px',
          }}
        >
          🏆 Certifications
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
            gap: '25px',
          }}
        >
          {certs.map((cert, index) => (
            <div
              key={index}
              style={{
                background: '#0b1120',
                padding: '30px',
                borderRadius: '15px',
                border: '1px solid #1f2937',
              }}
            >
              <h3 style={{ color: cert.color }}>
                {cert.title}
              </h3>

              <p>{cert.issuer}</p>

              <span
                style={{
                  color: '#00ff88',
                  fontWeight: 'bold',
                }}
              >
                ✔ {cert.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}