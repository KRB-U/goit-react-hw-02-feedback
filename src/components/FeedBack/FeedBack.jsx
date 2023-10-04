import { Component } from 'react';

class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
    // this.setState({ good: 5 });
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positiveFeedbackPercentage = () => {
    const { good } = this.state;

    const totalFeedback = this.totalFeedback();
    return totalFeedback > 0 ? (good * 100) / totalFeedback : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

    const totalFeedback = this.totalFeedback();
    const percentPositiveFeedback = this.positiveFeedbackPercentage();

    return (
      <div>
        <h2>Please leave feedback</h2>
        <button onClick={() => this.handleFeedback('good')}>Good</button>
        <button onClick={() => this.handleFeedback('neutral')}>Neutral</button>
        <button onClick={() => this.handleFeedback('bad')}>Bad</button>

        <h3>Statistics</h3>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive feedback: {percentPositiveFeedback}</p>
      </div>
    );
  }
}

export { FeedBack };
