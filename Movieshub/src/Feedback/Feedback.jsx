import React, { useState } from 'react';
import axios from 'axios'; 
import './Feedback.css';

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/feedback', formData);
      console.log('Feedback submitted:', response.data);
      

      alert('Your responses have been submitted. Thank you!');

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('There was an error submitting the feedback:', error);
    }
  };

  return (
    <div className="feedback-form">
      <h2 className="feedback-title">FEEDBACK FORM</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        <div className="form-groupes">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className="form-groups">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="textarea-field"
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;