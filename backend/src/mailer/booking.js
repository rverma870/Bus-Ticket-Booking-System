// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   host: "smtp.mailtrap.io",
//   service: "mailtrap",
//   port: 2525,
//   auth: {
//     user: process.env.email_user,
//     pass: process.env.email_password
//   }
// });

// const sendMail = (email, username) => {
//   var mail_options = {
//     from: 'actionmailer32@gmail.com',
//     to: email,
//     subject: 'Booking Invoice',
//     text: `Hi ${username}, Your booking is confirmed. Thankyou for using our service.`
//   }

//   transporter.sendMail(mail_options, (err, info) => {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       console.log('Mail Sent', info.response);
//     }
//   });
// }

// module.exports = { sendMail };

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendBookingMail = (email, username) => {
  sgMail.send({
    from: 'verma.08raj@gmail.com',
    to: email,
    subject: 'Booking Invoice',
    text: `Hi ${username}, Your booking is confirmed. Thankyou for using our service.`
  }).then(() => {
    console.log('Email sent')
  })
    .catch((error) => {
      console.error(error)
    })
}

module.exports = { sendBookingMail }
