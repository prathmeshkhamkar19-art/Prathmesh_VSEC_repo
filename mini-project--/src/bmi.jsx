
import { useState } from 'react';
import './bmi.css';

function BMI({ name, mobile, onResult })  {
  const [height, setHeight] = useState('');      ///use to get the data and update
  const [weight, setWeight] = useState('');

  async function calculate(e) {       //async Function that work with await for api calling 
    e.preventDefault();         //it use use to preventig the browser from page reloading

    const h = Number(height);
    const w = Number(weight);   //converting html (string) value into js value(numbers)

    if (h <= 0 || w <= 0) {             //condtion
      alert('Enter valid height and weight');
      return;
    }

    const bmi = Number((w / ((h / 100) ** 2)).toFixed(2));    ///formula for calcuating bmi

    let category = 'Obese';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 25) category = 'Normal weight';
    else if (bmi < 30) category = 'Overweight';

   const data = {
  name: name,         // Name entered on login page
  mobile: mobile,     // Mobile number entered on login page
  height: h,          // Height in centimetres
  weight: w,          // Weight in kilograms
  bmi: bmi,            // Calculated BMI value
  category: category   // BMI category
};

    try {   //API Calling 
      const response = await fetch('http://localhost:5000/api/bmi', { //send request to my system(local host) /api/bmi is end point 
        method: 'POST',     //post means send the data to backend (server)
        headers: {
          'Content-Type': 'application/json'   //creating the blockto store data in json form
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {     //if response false = !response.ok show the error
        throw new Error('Could not save data');
      }

      const savedRecord = await response.json(); // Read response from backend
      onResult(savedRecord.data); // Display the record returned by MongoDB API
//                                                  //otherwise send this data to onResult fuction ofapp.jsx
    } catch (error) {
      alert('Could not save data. Check the backend and MongoDB.');
    }
  }

  return (
    <div className="bmi-box">   
      <h1>BMI Calculator</h1>

      <form onSubmit={calculate}>
        <label>Height (cm)</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter height"
          required
        />

        <label>Weight (kg)</label>
        <input
          type="number"
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
