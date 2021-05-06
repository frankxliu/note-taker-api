const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'frankieliu.23@gmail.com',
    subject: 'Thanks for joining the app!',
    text: `Welcome to the app, ${name}. Please rate your experience of the app!`
  })
}

const sendFarewellEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'frankieliu.23@gmail.com',
    subject: 'We\'re sorry to say goodbye, please give use some feedback!',
    text: `It is sad to hear this from you ${name}, our time was short but please tell us how we can do better in the future!`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendFarewellEmail
}