import stl from './statistic.module.css';
const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={stl.list}>
      <li className={stl.item}>Good: {good}</li>
      <li className={stl.item}>Neutral: {neutral}</li>
      <li className={stl.item}>Bad: {bad}</li>
      <li className={stl.item}>Total: {total}</li>
      <li className={stl.item}>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};
export default Statistic;
