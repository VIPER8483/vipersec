import React from 'react';

const projects = [
  {
    title: 'Python Port Scanner',
    description: 'Fast multithreaded TCP port scanner built with Python.',
    github: 'https://github.com/VIPER8483',
    tech: ['Python', 'Sockets', 'Networking'],
  },
  {
    title: 'VIPERSEC Website',
    description: 'My cybersecurity portfolio built with Docusaurus and React.',
    github: 'https://github.com/VIPER8483/vipersec',
    tech: ['React', 'Docusaurus'],
  },
  {
    title: 'Bash Automation',
    description: 'Linux automation scripts for penetration testing.',
    github: 'https://github.com/VIPER8483',
    tech: ['Bash', 'Linux'],
  },
];

export default function Projects() {
  return (
    <section
      style={{
        background: '#0b1120',
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
          🚀 Projects
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
            gap: '30px',
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                background: '#111827',
                padding: '30px',
                borderRadius: '15px',
                border: '1px solid #1f2937',
              }}
            >
              <h3 style={{ color: '#00ff88' }}>{project.title}</h3>

              <p
                style={{
                  color: '#cbd5e1',
                  minHeight: '70px',
                }}
              >
                {project.description}
              </p>

              <div
                style={{
                  margin: '20px 0',
                }}
              >
                {project.tech.map((item) => (
                  <span
                    key={item}
                    style={{
                      display: 'inline-block',
                      background: '#1e293b',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      marginRight: '8px',
                      marginBottom: '8px',
                      color: '#00ff88',
                      fontSize: '14px',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: '#00ff88',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                }}
              >
                🔗 View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}