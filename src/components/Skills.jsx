import React from 'react';

const skills = [
  'Linux',
  'Networking',
  'Nmap',
  'Burp Suite',
  'Metasploit',
  'Hydra',
  'Python',
  'Bash',
  'Active Directory',
  'Web Security',
  'Privilege Escalation',
  'Git'
];

export default function Skills() {
  return (
    <section
      style={{
        background: '#0B1120',
        color: 'white',
        padding: '80px 20px',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          color: '#00FF88',
          fontSize: '42px',
          marginBottom: '50px',
        }}
      >
        🛡 Skills
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
          gap: '20px',
          maxWidth: '1200px',
          margin: 'auto',
        }}
      >
        {skills.map((skill) => (
          <div
            key={skill}
            style={{
              background: '#111827',
              padding: '25px',
              borderRadius: '12px',
              textAlign: 'center',
              border: '1px solid #1f2937',
              fontWeight: 'bold',
              fontSize: '18px',
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}