const nodemailer = require('nodemailer');
const {email} = require("./configs");

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT
});

module.exports = transporter;