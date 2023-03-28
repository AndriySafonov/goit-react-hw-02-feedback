import React from 'react';

const Statistics = ({
  onGood,
  onNeutral,
  onBad,
  onTotal,
  onPositivePercentage,
}) => {
  return (
    <ul className="statistic-list">
      <li className="statistic-item">Good: {onGood}</li>
      <li className="statistic-item">Neutral: {onNeutral}</li>
      <li className="statistic-item">Bad: {onBad}</li>
      <li className="statistic-item">Total: {onTotal}</li>
      <li className="statistic-item">
        Positive feedback: {onPositivePercentage}%
      </li>
    </ul>
  );
};

export default Statistics;
