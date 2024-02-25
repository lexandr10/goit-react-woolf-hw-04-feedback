import Section from './Section/Section';
import Option from './Option/Oprions';
import Statistic from './Statistic/Statistic';
import Notification from './Notification/Notification';
import { useState } from 'react';
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handleLeaveFeedback = name => {
    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };
  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();
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
          onLeaveFeedback={handleLeaveFeedback}
          options={['good', 'neutral', 'bad']}
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
};
export default App;
