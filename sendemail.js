const nodemailer = require('nodemailer');

async function sendMail() {
  // Yaha apna Gmail daal
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'teamdev917@gmail.com',
      pass: 'qbhf vpvt vnry rali' // normal password nahi
    }
  });

  let info = await transporter.sendMail({
    from: 'teamdev917@gmail.com',
    to: 'milkeysukita@gmail.com',
    subject: 'Test Email',
    text: 'Hello, This is an test email sent by node.js through nodemailer!',
    html: '<b>Hello, This is an test email sent by node.js through nodemailer!</b>'
  });

  console.log('Email bhej diya: ' + info.messageId);
}

sendMail().catch(console.error);