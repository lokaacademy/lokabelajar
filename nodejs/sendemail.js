const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'test@example.com',
    pass: '[password]'
  }
});

const mailOptions = {
  from: 'test@example.com [from email]',
  to: 'test@example.com [to email]',
  subject: 'kirim email menggunakan Node.js',
  text: 'Belajar node menyenangkan!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});