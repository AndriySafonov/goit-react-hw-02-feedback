import React from 'react';
import PropTypes from 'prop-types';
import './Feedback.css';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
    hasFeedback: false,
  };

  handleFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
        total: prevState.total + 1,
        positiveFeedback:
          ((prevState.good + (option === 'good' ? 1 : 0)) /
            (prevState.total + 1)) *
          100,
        hasFeedback: true,
      };
    });
  };

  render() {
    const options = ['good', 'neutral', 'bad'];

    return (
      <div className="container">
        <h1>Please leave feedback</h1>
        <Section title="Give feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        {this.state.hasFeedback ? (
          <Section title="Statistics">
            <Statistics
              onGood={this.state.good}
              onNeutral={this.state.neutral}
              onBad={this.state.bad}
              onTotal={this.state.total}
              onPositivePercentage={this.state.positiveFeedback}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
Feedback.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedback: PropTypes.number,
  hasFeedback: PropTypes.bool,
};

export default Feedback;
