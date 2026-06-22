import React from 'react';

export default function Contact() {
  return (
    <section
      style={{
        background: '#0B1120',
        color: 'white',
        padding: '80px 20px',
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            color: '#00ff88',
            fontSize: '42px',
            marginBottom: '20px',
          }}
        >
          Contact Me
        </h2>

        <p
          style={{
            color: '#CBD5E1',
            marginBottom: '40px',
            fontSize: '18px',
          }}
        >
          Interested in working together? Feel free to reach out.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
            gap: '20px',
          }}
        >
          <div
            style={{
              background: '#111827',
              padding: '25px',
              borderRadius: '12px',
            }}
          >
            <h3>Email</h3>
            <p>iamshantanu121212@gmail.com</p>
          </div>

          <div
            style={{
              background: '#111827',
              padding: '25px',
              borderRadius: '12px',
            }}
          >
            <h3>GitHub</h3>

            <a
              href="https://github.com/VIPER8483"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#00ff88' }}
            >
              github.com/VIPER8483
            </a>
          </div>

          <div
            style={{
              background: '#111827',
              padding: '25px',
              borderRadius: '12px',
            }}
          >
            <h3>LinkedIn</h3>

            <a
              href="https://www.linkedin.com/in/shantanu-kakade-74b587316"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#00ff88' }}
            >
              View Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}