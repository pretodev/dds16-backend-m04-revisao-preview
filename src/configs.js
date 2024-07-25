require('dotenv').config()

module.exports = {
  port: process.env.PORT,
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  },
  email: {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT
  }
}