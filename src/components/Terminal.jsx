import React from 'react';

export default function Terminal() {
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
        {/* Terminal Header */}
        <div
          style={{
            background: '#1f2937',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span style={{width:'12px',height:'12px',background:'#ff5f56',borderRadius:'50%'}}></span>
          <span style={{width:'12px',height:'12px',background:'#ffbd2e',borderRadius:'50%'}}></span>
          <span style={{width:'12px',height:'12px',background:'#27c93f',borderRadius:'50%'}}></span>

          <span
            style={{
              color: '#9ca3af',
              marginLeft: '20px',
              fontFamily: 'monospace',
            }}
          >
            terminal
          </span>
        </div>

        {/* Terminal Body */}
        <div
          style={{
            padding: '30px',
            color: '#00FF88',
            fontFamily: 'monospace',
            lineHeight: '2',
            fontSize: '17px',
          }}
        >
          <p>$ whoami</p>
          <p style={{color:'white'}}>Shantanu Kakade</p>

          <p>$ certifications</p>
          <p style={{color:'white'}}>eJPT</p>

          <p>$ current_focus</p>
          <p style={{color:'white'}}>
            Web Security<br/>
            Active Directory<br/>
            CCNA
          </p>

          <p>$ labs</p>
          <p style={{color:'white'}}>
            Hack The Box<br/>
            TryHackMe<br/>
            PortSwigger
          </p>

          <p>$ <span style={{animation:'blink 1s infinite'}}>█</span></p>
        </div>
      </div>
    </section>
  );
}