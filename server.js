const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Handle contact form submissions
app.use(express.json());

app.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Log the submission (swap this out for an email service like Nodemailer)
  console.log('New contact form submission:');
  console.log(`  Name:    ${name}`);
  console.log(`  Email:   ${email}`);
  console.log(`  Subject: ${subject}`);
  console.log(`  Message: ${message}`);

  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
