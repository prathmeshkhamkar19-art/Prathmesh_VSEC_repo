const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Demo user storage. Data resets when the server restarts.
const users = new Map();

app.post("/api/login", (req, res) => {
  const { name, gender, age, phone } = req.body;

  if (!name || !gender || !age || !phone) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  if (!/^\d{10}$/.test(phone)) {
    return res.status(400).json({ message: "Phone number must contain 10 digits" });
  }

  const user = {
    name,
    gender,
    age: Number(age),
    phone
  };

  users.set(phone, user);

  res.json({
    message: "Login successful",
    user
  });
});

app.listen(PORT, () => {
  console.log(`BMI backend running at http://localhost:${PORT}`);
});