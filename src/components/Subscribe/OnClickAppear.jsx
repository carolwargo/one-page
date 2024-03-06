import React, { useState } from 'react';

const SubscribeForm = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., using EmailJS)
  };

  return (
    <div>
      <button onClick={toggleForm}>Subscribe</button>
      {showForm && (
        <div id="subscribeForm">
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SubscribeForm;
