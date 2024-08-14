import React, { useState } from 'react';
import axios from 'axios';
import './Payment.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    email: '',
    phoneNumber: '',
    cardName: '',
    cardNumber: '',
    cvv: '',
    paymentType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'cardNumber') {
      const validLength = getValidCardLength(formData.country);
      if (value.length > validLength) {
        return; 
      }
    }

    if (name === 'cvv' && value.length > 4) {
      return; 
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validCardLength = getValidCardLength(formData.country);

    if (formData.cardNumber.length !== validCardLength) {
      alert(`Card number must be exactly ${validCardLength} digits for ${formData.country}.`);
      return;
    }

    if (formData.cvv.length !== 4) {
      alert('CVV must be exactly 4 digits.');
      return;
    }

    try {
      await axios.post('http://localhost:3000/payment', formData);
      alert('Your payment has been successfully received.');
      console.log('Form data submitted:', formData);
      // Optionally clear form fields after submission
      setFormData({
        name: '',
        country: '',
        email: '',
        phoneNumber: '',
        cardName: '',
        cardNumber: '',
        cvv: '',
        paymentType: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error processing your payment.');
    }
  };

  const getValidCardLength = (country) => {
    switch (country) {
      case 'USA':
        return 16;
      case 'India':
        return 14;
      case 'UK':
        return 19;
      default:
        return 0; 
    }
  };

  return (
    <div className='paynet'>
      <form className="contact-form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Information</legend>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            placeholder="Name"
            required
          />

          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Select a country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
          </select>
        </fieldset>

        <fieldset>
          <legend>Payment Information</legend>
          <input
            type="text"
            id="cardName"
            name="cardName"
            value={formData.cardName}
            onChange={handleChange}
            className="form-input"
            placeholder="Card Name"
            required
          />

          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            className="form-input"
            placeholder="Card Number"
            required
          />

          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            className="form-input"
            placeholder="CVV"
            required
          />

          <select
            id="paymentType"
            name="paymentType"
            value={formData.paymentType}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Select Payment Type</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </fieldset>

        <button type="submit" className="form-button">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
