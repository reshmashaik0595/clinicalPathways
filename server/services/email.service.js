const nodemailer = require('nodemailer')
const fs = require('fs')
const { EMAIL } = require('../config/constants')

// Send email
const sendMail = async (req) => {
  try {
    const transporter = nodemailer.createTransport({
      service: EMAIL.EMAIL_SERVICE,
      auth: {
        user: EMAIL.AUTH_EMAIL_ID,
        pass: EMAIL.AUTH_APP_PASSWORD
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    let data, subject
    if (req.emailForReview) {
      data = fs.readFileSync('./config/adminApprovalEmailTemplate.html', 'utf8')
      subject = 'New Request has been sent for your approval!'
    } else {
      data = fs.readFileSync('./config/userApprovalStatusEmailTemplate.html', 'utf8')
      subject = `Your Request has been ${req.approvalStatus} by admin!`
    }

    // console.log(`HTML data, ${data}`);
    data = data.replaceAll('#lastName', req.lastName)
    data = data.replaceAll('#firstName', req.firstName)
    data = data.replaceAll('#mobile', req.mobile)
    data = data.replaceAll('#emailId', req.emailId)
    data = data.replaceAll('#designation', req.designation)
    data = data.replaceAll('#govtIDNumber', req.govtIDNumber)
    data = data.replaceAll('#appURL', EMAIL.APPLICATION_URL)
    data = data.replaceAll('#approvalStatus', req.approvalStatus)
    // console.log(`HTML replaced data, ${data}`);

    const mailOptions = {
      from: EMAIL.DONOT_REPLY_EMAIL_ID,
      to: req.emailForReview ? EMAIL.ADMIN_EMAIL_ID : req.emailId,
      subject,
      html: data
    }

    const result = await transporter.sendMail(mailOptions)
    console.log(`Result: ${JSON.stringify(result)}`);
    return { emailSent: true };
  } catch (err) { // Error in catch block
    console.error(`Failed to send mail, ${err}`)
    return { emailSent: false, error: `${err}` }
  }
}

module.exports = {
  sendMail
}
