import React from 'react';
import './Feedback.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="button-container">
      {options.map(option => (
        <button key={option} type="button" onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
