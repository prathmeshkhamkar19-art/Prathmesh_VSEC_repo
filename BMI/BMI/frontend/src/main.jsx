import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const API = "http://localhost:5000";

function Login({ onLogin }) {
  const [form, setForm] = useState({
    name: "",
    gender: "",
    age: "",
    phone: ""
  });
  const [error, setError] = useState("");

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submit(e) {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(`${API}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        return;
      }

      onLogin(data.user);
    } catch {
      setError("Cannot connect to backend. Start the server first.");
    }
  }

  return (
    <div className="login">
      <h1>BMI Calculator</h1>
      <p>Enter your basic information</p>

      <form onSubmit={submit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={update}
          required
        />

        <select name="gender" value={form.gender} onChange={update} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input
          name="age"
          type="number"
          min="1"
          max="120"
          placeholder="Age"
          value={form.age}
          onChange={update}
          required
        />

        <input
          name="phone"
          type="tel"
          maxLength="10"
          placeholder="Phone Number"
          value={form.phone}
          onChange={update}
          required
        />

        <button type="submit">Continue</button>
      </form>

      {error && <p className="error">{error}</p>}
    </div>
  );
}

function Dashboard({ user, logout }) {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);

  function calculate(e) {
    e.preventDefault();

    const heightMeters = Number(height) / 100;
    const weightKg = Number(weight);

    if (!heightMeters || !weightKg) return;

    const value = weightKg / (heightMeters * heightMeters);
    setBmi(value.toFixed(1));
  }

  function getCategory(value) {
    if (value < 18.5) return "Underweight";
    if (value < 25) return "Normal weight";
    if (value < 30) return "Overweight";
    return "Obesity";
  }

  return (
    <div className="dashboard">
      <header>
        <div>
          <h1>BMI Dashboard</h1>
          <p>Welcome, {user.name}</p>
        </div>
        <button onClick={logout}>Logout</button>
      </header>

      <section className="profile">
        <h2>Your Information</h2>
        <p><b>Gender:</b> {user.gender}</p>
        <p><b>Age:</b> {user.age}</p>
        <p><b>Phone:</b> {user.phone}</p>
      </section>

      <section className="box">
        <h2>Calculate BMI</h2>

        <form onSubmit={calculate}>
          <label>
            Height (cm)
            <input
              type="number"
              min="1"
              placeholder="Example: 170"
              value={height}
              onChange={e => setHeight(e.target.value)}
              required
            />
          </label>

          <label>
            Weight (kg)
            <input
              type="number"
              min="1"
              placeholder="Example: 65"
              value={weight}
              onChange={e => setWeight(e.target.value)}
              required
            />
          </label>

          <button type="submit">Calculate BMI</button>
        </form>
      </section>

      {bmi && (
        <section className="result">
          <h2>Your BMI</h2>
          <div className="bmi-number">{bmi}</div>
          <h3>{getCategory(Number(bmi))}</h3>
          <p>
            BMI is a general screening measure based on height and weight.
            It does not by itself diagnose health conditions.
          </p>
        </section>
      )}

      <section className="info">
        <h2>Basic BMI Information</h2>
        <table>
          <thead>
            <tr>
              <th>BMI Range</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Below 18.5</td><td>Underweight</td></tr>
            <tr><td>18.5 – 24.9</td><td>Normal weight</td></tr>
            <tr><td>25.0 – 29.9</td><td>Overweight</td></tr>
            <tr><td>30.0 or above</td><td>Obesity</td></tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return <Dashboard user={user} logout={() => setUser(null)} />;
}

createRoot(document.getElementById("root")).render(<App />);