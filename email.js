const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '', // email address
        pass: '' // email password
    }
});


let mailOptions = {
    from: '', // Sender address
    to: '', // Receiver address
    subject: 'Hello from Nodemailer', // Subject line
    text: 'Hello, this is a test email sent from Nodemailer!' // Plain text body
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error occurred:', error);
    } else {
        console.log('Email sent successfully:', info.response);
    }
});
