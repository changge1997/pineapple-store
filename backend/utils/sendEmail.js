import nodemailer from 'nodemailer'
import asyncHandler from 'express-async-handler'
import dotenv from 'dotenv'
import { google } from 'googleapis'
const OAuth2 = google.auth.OAuth2

dotenv.config()

const sendEmail = asyncHandler(async (user, token) => {
  try {
    const oauth2Client = new OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      'https://developers.google.com/oauthplayground'
    )

    oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN,
    })
    const accessToken = oauth2Client.getAccessToken()

    const transporter = nodemailer.createTransport({
      service: process.env.SERVICE,

      auth: {
        type: 'OAuth2',
        user: process.env.USER_EMAIL,
        accessToken,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
      },
    })

    transporter.sendMail({
      from: process.env.USER_EMAIL,
      to: user.email,
      subject: 'Activate Your PineApple Account Now!',
      html: `
      <h3> Hello ${user.name} </h3>
      <p>Thank you for registering into PineApple Store.  Just one click away from getting started with PineApple!</p>
      <p>To activate your account please  verify your email address:</p>
      <p><a target="_" href="${process.env.DOMAIN}/activate/${user._id}/${token}">Confirm Your Email Here</a></p>
      <p>Cheers,</p>
      <p>PineApple Store Team</p>
    `,
    })
    console.log('email sent successfully')
  } catch (error) {
    console.log(error)
    res.status(502)
    throw new Error('Fail to send email!')
  }
})

export default sendEmail
