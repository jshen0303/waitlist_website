import React from 'react';
import './Waitlist.css';

function Waitlist() {
  return (
    <section id="waitlist" className="waitlist-section glass">
      <h2 className="waitlist-title">ready to join the waitlist?</h2>
      <form className="waitlist-form">
        <input type="text" placeholder="First Name" required />
        <input type="text" placeholder="Last Name" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Occupation" />
        <input type="text" placeholder="Current Company" />
        <button type="submit">submit</button>
      </form>
    </section>
  );
}

export default Waitlist;
