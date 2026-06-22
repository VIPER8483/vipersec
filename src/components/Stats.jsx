import React from 'react';

export default function Stats() {
  const stats = [
    {
      number: '50+',
      title: 'Labs Completed',
    },
    {
      number: '10+',
      title: 'Projects',
    },
    {
      number: '3',
      title: 'Certifications',
    },
    {
      number: '100+',
      title: 'Hours of Practice',
    },
  ];

  return (
    <section
      style={{
        background: '#111827',
        color: 'white',
        padding: '80px 20px',
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
        Statistics
      </h2>

      <div
        style={{
          maxWidth: '1100px',
          margin: 'auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
          gap: '25px',
        }}
      >
        {stats.map((item, index) => (
          <div
            key={index}
            style={{
              background: '#0B1120',
              border: '1px solid #1f2937',
              borderRadius: '15px',
              padding: '35px',
              textAlign: 'center',
            }}
          >
            <h1
              style={{
                color: '#00ff88',
                fontSize: '55px',
                marginBottom: '10px',
              }}
            >
              {item.number}
            </h1>

            <p
              style={{
                color: '#CBD5E1',
                fontSize: '18px',
              }}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}