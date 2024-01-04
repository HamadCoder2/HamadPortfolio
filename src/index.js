require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");




// routers for different pages 
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/resume', (req, res) => {
    res.render('resume');
});

app.get('/portfolio', (req, res) => {
    res.render('portfolio');
});

app.get('/contact', (req, res) => {
    res.render('contact', { message: null });
});

app.get('/project', (req, res) => {
    res.render('project');
});



// nodemailer 
const transporter = nodemailer.createTransport({
    service: 'Gmail', // You can use another email service
    auth: {
        user: 'saifhamad8787@gmail.com',
        pass: process.env.pass
    },
});

// Define the route to handle form submissions
app.post('/sendmail', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Create the email content
    const mailOptions = {
        from: email,
        to: 'saifhamad8787@gmail.com',
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.render('contact', { message: 'Error sending email' });
        } else {
            console.log('Email sent: ' + info.response);

            // Send a confirmation email to the user
            const userMailOptions = {
                from: 'saifhamad8787@gmail.com',
                to: email,
                subject: 'Confirmation Email',
                text: 'Thank you for contacting me. I have received your message and I will get back to you shortly.',
            };

            transporter.sendMail(userMailOptions, (userError, userInfo) => {
                if (userError) {
                    console.log(userError);
                } else {
                    console.log('Confirmation email sent: ' + userInfo.response);
                }
            });

            res.render('contact', { message: 'Your response has been recorded . I will get back to you shortly' });
        }
    });
});



mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('mongodb connected');
    })
    .catch(() => {
        console.log('error');
    })

// project form 
const formSchema = new mongoose.Schema({
    Name: String,
    Emailorphone: String,
    companyname: String,
    projecttype: String,
    Date: Date,
    Message: String,
});


const projects = mongoose.model('projects', formSchema);

app.post('/submit', (req, res) => {
    const { name, email, company, projectType, date, message } = req.body;

    // Save the project data to MongoDB using Mongoose
    const contacts = new projects({
        Name: req.body.name,
        Emailorphone: req.body.email,
        companyname: req.body.company,
        projecttype: req.body.projectType,
        Date: req.body.date,
        Message: req.body.message
    });


    contacts.save()
        .then(() => {
            console.log('data saved successfully');
            const errors = {};

            if (!name || !company || !email || !projectType || !date || !message) {
                errors.name = 'Name is required.';
            }

            // Repeat for other fields

            if (Object.keys(errors).length > 0) {
                return res.render('project', { errors });
            }
            res.locals.successMessage = "Thank you! your response has been submited ,I'll contact you sortly ";
            res.render('project');
        })
        .catch(err => {
            // Handle the error
            console.error('Error saving data:', err);
            res.status(500).send('Error saving data');
        });
});




const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});