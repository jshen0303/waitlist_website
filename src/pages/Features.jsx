import React from 'react';

const items = [
  { title: 'text', copy: '123' },
  { title: 'text', copy: '123' },
  { title: 'text', copy: '123' },
];

// renders three feature cards
function Features() {
  return (
    <section id="features" className="features container">
      <h1 style={{textAlign:'center', fontSize:'2rem', marginBottom:'2rem'}}>Insert some random images</h1>
      <h2 style={{textAlign:'center', fontSize:'2rem', marginBottom:'2rem'}}>why X?</h2>
      <div className="grid">
        {items.map((f) => (
          <div key={f.title} className="glass card">
            <h3 style={{marginTop:0}}>{f.title}</h3>
            <p style={{color:'var(--text-secondary)'}}>{f.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
