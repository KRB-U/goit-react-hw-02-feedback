import React from 'react';
import { divContainerStatistic, PStatisticsDetail } from './Statistics.styled';

const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  percentPositiveFeedback,
}) => {
  return (
    <div>
      <PStatisticsDetail>Good: {good}</PStatisticsDetail>
      <PStatisticsDetail>Neutral: {neutral}</PStatisticsDetail>
      <PStatisticsDetail>Bad: {bad}</PStatisticsDetail>
      <PStatisticsDetail>Total: {totalFeedback}</PStatisticsDetail>
      <PStatisticsDetail>
        Positive feedback: {percentPositiveFeedback}
      </PStatisticsDetail>
    </div>
  );
};

export { Statistics };
