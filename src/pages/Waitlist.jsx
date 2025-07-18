import React, { useState } from 'react';
import './Waitlist.css';
import { supabase } from '../supabase'; // Adjust path if needed

function Waitlist() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    occupation: '',
    company: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Submitting form:', formData);
    const { data, error } = await supabase
      .from('Waitlist Form')
      .insert([{
        "First Name": formData.first_name,
        "Last Name": formData.last_name,
        "Email": formData.email,
        "Occupation": formData.occupation,
        "Current Company": formData.company,
      }])
      .select();

    console.log('Insert result:', data, error);


    if (error) {
      console.error(error);
      setStatus('error');
    } else {
      console.log('Inserted:', data);
      setStatus('success');
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        occupation: '',
        company: '',
      });
    }
  };

  return (
    <section id="waitlist" className="waitlist-section glass">
      <h2 className="waitlist-title">ready to join the waitlist?</h2>
      <form className="waitlist-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={formData.first_name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={formData.last_name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="occupation"
          placeholder="Occupation"
          value={formData.occupation}
          onChange={handleChange}
        />
        <input
          type="text"
          name="company"
          placeholder="Current Company"
          value={formData.company}
          onChange={handleChange}
        />
        <button type="submit">submit</button>

        {status === 'success' && <p className="success-msg">Thanks for joining the waitlist!</p>}
        {status === 'error' && <p className="error-msg">Something went wrong. Try again later.</p>}
      </form>
    </section>
  );
}

export default Waitlist;
