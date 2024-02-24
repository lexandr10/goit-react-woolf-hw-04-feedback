import { Component } from 'react';
import Section from './Section/Section';
import Option from './Option/Oprions';
import Statistic from './Statistic/Statistic';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleLeaveFeedback = name => {
    this.setState(prev => ({ [name]: prev[name] + 1 }));
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };
  render() {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          paddingTop: '140px',
          paddingBottom: '140px',
        }}
      >
        <Section title="Please leave feedback">
          <Option
            onLeaveFeedback={this.handleLeaveFeedback}
            options={Object.keys(this.state)}
          />
          <h2 style={{ fontSize: '56px', color: '#434455', fontWeight: 500 }}>
            Statistics
          </h2>
          {total ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedback}
            ></Statistic>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
