# BMI Calculator Mini Project

A beginner-friendly full stack BMI calculator with a login page and dashboard.

## Features

- Login/basic information page
- Name, gender, age and phone number
- BMI calculation using height and weight
- BMI category
- Basic BMI information table
- User information dashboard
- Logout
- React + Node.js + Express
- Minimal CSS

## Run backend

```bash
cd backend
npm install
npm start
```

Backend runs at:
http://localhost:5000

## Run frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the Vite URL, normally:
http://localhost:5173

## BMI formula

BMI = weight (kg) / height² (m²)

Example:

Weight = 65 kg
Height = 1.70 m

BMI = 65 / (1.70 × 1.70) = 22.5

## Note

This is an educational project, not a medical diagnosis tool. User data is stored only in memory and is cleared when the backend restarts.
