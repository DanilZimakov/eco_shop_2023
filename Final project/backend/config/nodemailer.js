const nodemailer = require("nodemailer");
// const defultConfig = "smtp://nodemailer74@mail.ru:ts*+;b$k6?GLXw3@smtp.mail.ru";
const transporter = nodemailer.createTransport(
    {
      host: "smtp.mail.ru",
      port: 465,
      secure: true,
      auth: {
        user: "nodemailer74@mail.ru",
        pass: "jCywYuVRt2qcP5bjJ8nm",
      },
    },
  // defultConfig,
  {
    from: "nodemailer74@mail.ru",
  },
);
//npm i nodemailer
const messageCreator = (to, subject, text) => ({
  to,
  subject,
  text,
});
transporter.verify((error, success) => {
  error ? console.log(error) : console.log("Server is good", success);
});
const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Email send: ${info}`);
    }
  });
};

module.exports = { mailer, messageCreator };
