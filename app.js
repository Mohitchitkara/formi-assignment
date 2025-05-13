const express = require('express');
const app = express();

// Middleware to parse JSON bodies (for POST requests)
app.use(express.json());

// Routes
app.get('/knowledge/faq', require('./controllers/knowledgeController').getChunk);
app.post('/knowledge/faq', require('./controllers/knowledgeController').getChunk); // Optional for Retell AI

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));