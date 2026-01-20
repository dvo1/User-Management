const express = require('express');
const mongoose = require('mongoose');

const app = express();


app.use(express.json());

const authRoutes = require('./routes/auth.routes');
app.use('/api/auth', authRoutes);

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Server is running' });
});

// Test route to create a document
// app.get('/test-db', async (req, res) => {
//   // Create a simple test schema
//   const TestSchema = new mongoose.Schema({
//     name: String,
//     createdAt: { type: Date, default: Date.now }
//   });

//   const Test = mongoose.models.Test || mongoose.model('Test', TestSchema);

//   // Create a test document
//   const doc = await Test.create({ name: 'Hello MongoDB!' });

//   res.json({ message: 'Document created!', document: doc });
// });

module.exports = app;
