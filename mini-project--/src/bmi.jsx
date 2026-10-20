
import { useState } from 'react';
import './bmi.css';

function BMI({ name, mobile, onResult }) {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  async function calculate(e) {
    e.preventDefault();

    const h = Number(height);
    const w = Number(weight);

    if (h <= 0 || w <= 0) {
      alert('Enter valid height and weight');
      return;
    }

    // Calculate BMI
    const bmi = Number((w / ((h / 100) ** 2)).toFixed(2));

    // Find BMI category
    let category = 'Obese';

    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi < 25) {
      category = 'Normal weight';
    } else if (bmi < 30) {
      category = 'Overweight';
    }

    // Prepare data
    const data = {
      name: name,
      mobile: mobile,
      height: h,
      weight: w,
      bmi: bmi,
      category: category
    };

    try {
      const response = await fetch('http://localhost:5000/api/bmi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Could not save data');
      }

      // Send data to App.jsx
      onResult(data);

    } catch (error) {
      console.error('API Error:', error);
      alert(error.message || 'Could not connect to backend');
    }
  }

  return (
    <div className="bmi-box">
      <h1>BMI Calculator</h1>

      <form onSubmit={calculate}>
        <label>Height (cm)</label>
        <input
          type="number"
          min="1"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter height"
          required
        />

        <label>Weight (kg)</label>
        <input
          type="number"
          min="1"
          step="any"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter weight"
          required
        />

        <button type="submit">Calculate BMI</button>
      </form>
    </div>
  );
}

export default BMI;
