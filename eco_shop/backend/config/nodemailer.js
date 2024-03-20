require("dotenv").config()
const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendMail = (email) => {
  transporter.sendMail({
    from: process.env.SMTP_USER,
    to:email,
    subject: " Добро пожаловать на SwapStyle",
    html: "<h1>Добро пожаловать на SwapStyle</h1>",

  })
  
}

module.exports = sendMail