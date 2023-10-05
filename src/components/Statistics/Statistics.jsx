import React from 'react';

const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  percentPositiveFeedback,
}) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive feedback: {percentPositiveFeedback}</p>
    </div>
  );
};

export { Statistics };
