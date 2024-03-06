import React from 'react';
import emailjs from 'emailjs-com';

const SubscribeForm = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Send email using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
      email: 'subscriber@example.com', // Subscriber's email
    }, 'YOUR_USER_ID')
      .then((response) => {
        console.log('Email sent successfully:', response);
        // Handle success, e.g., show a success message to the user
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        // Handle error, e.g., show an error message to the user
      });
  };

  return (
    <form onSubmit={handleSubscribe}>
      <input type="email" placeholder="Enter your email" />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default SubscribeForm;
