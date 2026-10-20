
import './result.css';

function Result({ data, onBack }) {
  return (
    <div className="result-box">
      <h1>Your BMI Result</h1>

      <p>Height: {data.height} cm</p>
      <p>Weight: {data.weight} kg</p>
      <h2>BMI: {data.bmi}</h2>
      <p>Category: {data.category}</p>

      <button onClick={onBack}>Calculate Again</button>
    </div>
  );
}

export default Result;
