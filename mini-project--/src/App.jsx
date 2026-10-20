
import { useState } from 'react';
import BMI from './bmi.jsx';
import Result from './result.jsx';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [result, setResult] = useState(null);

  function login(e) {
    e.preventDefault();

    if (mobile.length !== 10) {
      alert('Enter a 10-digit mobile number');
      return;
    }

    setLoggedIn(true);
  }

  return (
    <div className="app">
      {!loggedIn ? (
        <form className="login-box" onSubmit={login}>
          <h1>Welcome</h1>
          <p>Enter your details to continue</p>

          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Mobile Number</label>
          <input
            type="tel"
            value={mobile}
            onChange={(e) =>
              setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))
            }
            required
          />

          <button type="submit">Continue</button>
        </form>
      ) : result === null ? (
        <>
          <h2>Hello, {name}!</h2>
          <BMI
          name={name}       // Send the user's name to BMI component
          mobile={mobile}   // Send the mobile number to BMI component
           onResult={setResult} // Send the result back to App
/>
        </>
      ) : (
        <Result
          data={result}
          onBack={() => setResult(null)}
        />
      )}
    </div>
  );
}

export default App;
