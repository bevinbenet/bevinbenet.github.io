import React, { useState } from 'react';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const response = await fetch('https://script.google.com/macros/s/AKfycbwX4wvaidgPIKLNURom-d-5d9KRWtPdjRAKc8SRxx2w3CFpAixsFFhBiDgOH86iuO8zkg/exec', {
      // Replace YOUR_SCRIPT_URL with the Apps Script deployment URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message sent successfully!');
    } else {
      alert('Failed to send the message. Please try again.');
    }

    setLoading(false);
  };

  return (
    <form id="contact-form" onSubmit={onSubmit}>
      <div className="row gx-3 gy-4">
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input
              name="name"
              placeholder="Name *"
              className="form-control"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Your Email</label>
            <input
              name="email"
              placeholder="Email *"
              className="form-control"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label className="form-label">Subject</label>
            <input
              name="subject"
              placeholder="Subject *"
              className="form-control"
              type="text"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label className="form-label">Your Message</label>
            <textarea
              name="message"
              placeholder="Your message *"
              rows={4}
              className="form-control"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="send">
            <button
              className={`px-btn w-100 ${loading ? 'disabled' : ''}`}
              type="submit"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
