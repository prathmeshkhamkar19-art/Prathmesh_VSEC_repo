const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
// MONGO_URI me database name mat jodo, wo dbName option se aayega
mongoose
  .connect(process.env.MONGO_URI, { dbName: 'bmiDB' })
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log('MongoDB error:', error.message));

// Define the structure of each BMI record
const bmiSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true }, // frontend se mobile nahi bhej rahe to required hata do
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  bmi: { type: Number, required: true },
  category: { type: String, required: true }
});

// Create the model
const BMI = mongoose.model('BMI', bmiSchema);

// POST API: Save a BMI record
app.post('/api/bmi', async (req, res) => {
  console.log('Received body:', req.body);

  try {
    const record = new BMI(req.body);
    const savedRecord = await record.save();

    res.status(201).json({
      message: 'BMI saved successfully',
      data: savedRecord
    });
  } catch (error) {
    console.log('Save error:', error.message);
    res.status(500).json({
      message: 'Could not save BMI',
      error: error.message
    });
  }
});

// GET API: Read all BMI records
app.get('/api/bmi', async (req, res) => {
  try {
    const records = await BMI.find();
    res.json(records);
  } catch (error) {
    console.log('Fetch error:', error.message);
    res.status(500).json({
      message: 'Could not fetch records',
      error: error.message
    });
  }
});

// Start the server after MongoDB connects
const PORT = process.env.PORT || 5000;

mongoose.connection.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
  });
});
