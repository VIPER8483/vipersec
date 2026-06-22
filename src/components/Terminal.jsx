import React, { useState } from 'react';

export default function Terminal() {
  const [history, setHistory] = useState([
    { command: 'help', output: 'Type help to see available commands.' },
  ]);

  const [input, setInput] = useState('');

  const commands = {
    help: `Available Commands

whoami
skills
certifications
projects
github
clear`,

    whoami: `Shantanu Kakade
Junior Penetration Tester
eJPT Certified`,

    skills: `Linux
Networking
Nmap
Burp Suite
Metasploit
Python
Bash
Active Directory`,

    certifications: `eJPT
IBM Cybersecurity Fundamentals
LearnVern Ethical Hacking`,

    projects: `VIPERSEC Website
Python Port Scanner
Bash Automation`,

    github: `https://github.com/VIPER8483`,
  };

  function runCommand(e) {
    e.preventDefault();

    const cmd = input.trim().toLowerCase();

    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const output = commands[cmd] || 'Command not found. Type "help".';

    setHistory([
      ...history,
      {
        command: cmd,
        output,
      },
    ]);

    setInput('');
  }

  return (
    <section
      style={{
        background: '#0B1120',
        padding: '80px 20px',
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          margin: 'auto',
          background: '#111827',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid #1f2937',
          boxShadow: '0 0 25px rgba(0,255,136,.15)',
        }}
      >
        {/* Header */}

        <div
          style={{
            background: '#1f2937',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span style={{ width: 12, height: 12, background: '#ff5f56', borderRadius: '50%' }} />
          <span style={{ width: 12, height: 12, background: '#ffbd2e', borderRadius: '50%' }} />
          <span style={{ width: 12, height: 12, background: '#27c93f', borderRadius: '50%' }} />

          <span
            style={{
              marginLeft: 20,
              color: '#9ca3af',
              fontFamily: 'monospace',
            }}
          >
            VIPERSEC Terminal
          </span>
        </div>

        {/* Body */}

        <div
          style={{
            padding: '25px',
            fontFamily: 'monospace',
            color: '#00ff88',
            minHeight: '350px',
          }}
        >
          {history.map((item, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <div>$ {item.command}</div>

              <pre
                style={{
                  color: 'white',
                  whiteSpace: 'pre-wrap',
                  marginTop: '8px',
                }}
              >
                {item.output}
              </pre>
            </div>
          ))}

          <form onSubmit={runCommand}>
            <span>$ </span>

            <input
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#00ff88',
                width: '90%',
                fontFamily: 'monospace',
                fontSize: '17px',
              }}
            />
          </form>
        </div>
      </div>
    </section>
  );
}