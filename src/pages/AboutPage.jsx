import React from 'react';
import './AboutPage.css';

const team = [
  {
    name: 'Sai Kolasani',
    title: 'role',
    description: 'description',
    image: '/sai.jpg',
    linkedin: 'https://www.linkedin.com/in/saikolasani/',
  },
  {
    name: 'Truong Nguyen',
    title: 'role',
    description: 'description',
    image: '/truong.jpg',
    linkedin: 'https://www.linkedin.com/in/truong-h-nguyen/',
  },
  {
    name: 'Jeff Shen',
    title: 'role',
    description: 'Software Engineer @ Oracle Cloud Infrastructure\n\nGraduated from UC Berkeley 2025 majoring in CS and minoring in DS',
    image: '/public/jeff.jpg',
    linkedin: 'https://www.linkedin.com/in/jeff-shen-0303/',
  }
];

export default function AboutPage() {
  return (
    <section className="about-section">
      <h2 className="about-title">Our Team</h2>
      <div className="team-grid">
        {team.map((member) => (
          <a
            key={member.name}
            className="team-card"
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={member.image} alt={member.name} className="team-photo" />
            <h3>{member.name}</h3>
            <p className="team-role">{member.title}</p>
            <p className="team-bio">
                {member.description.split('\n').map((line, i) => (
                    <span key={i}>
                    {line}
                    <br />
                    </span>
                ))}
            </p>

          </a>
        ))}
      </div>
    </section>
  );
}
