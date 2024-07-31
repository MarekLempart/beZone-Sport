// server.js

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Używamy zmiennych środowiskowych dla większego bezpieczeństwa
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/send-email', (req, res) => {
  const { name, email, phone, message, subject } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'zoltanchivay.ml@gmail.com',
    subject: subject,
    html: `<h1>Jestem ${name}</h1>
           <h3>Mój numer telefonu: ${phone}</h3>
           <h3>Mój mail: ${email}</h3>
           <p>${message}</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Wiadomość wysłana');
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
