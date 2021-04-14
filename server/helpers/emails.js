const sgMail = require('@sendgrid/mail');
//const Token = require('../api/models/token');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmailToVerifyAccount = async (user, req, res, resend = false) => {
  const token = user.generateVerificationToken();
  try {
    await token.save();
    const msg = {
      to: user.email,
      from: {
        email: process.env.SMTP_EMAIL,
        name: 'Naplozz',
      },
      templateId: process.env.TEMPLATE_ID,
      dynamic_template_data: {
        subject: 'Your Naplozz email verification request',
        // name: `${user.firstName} ${user.lastName}`,
        code: token.token,
        for: 'verify your account',
      },
    };
    await sgMail.send(msg);
    return;
  } catch (err) {
    if (resend === true) {
      return res.status(500).json({
        error: err.message,
        message: 'Email sending failed',
      });
    } else {
      return res.status(500).json({
        error: err.message,
        accountCreated: true,
        isEmailSent: false,
        message:
          'Account is created successfully . But failed to send email, please send email again',
      });
    }
  }
};
const sendForgotPasswordCode = async (user, req, res) => {
  const token = user.generateVerificationToken();
  try {
    await token.save();
    const msg = {
      to: user.email,
      from: {
        email: process.env.SMTP_EMAIL,
        name: 'Naplozz',
      },
      templateId: process.env.TEMPLATE_ID,
      dynamic_template_data: {
        subject: 'Your Naplozz password reset request',
        // name: `${user.firstName} ${user.lastName}`,
        code: token.token,
        fromname: 'naplozz',
        for: 'reset your account',
      },
    };
    await sgMail.send(msg);
    res.status(200).json({
      message: 'Your account has not been verified, Please check your Email',
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
    });
  }
};

const sendInviteEmail = async (user, link, req, res) => {
  try {
    const msg = {
      to: user.email,
      from: {
        email: process.env.SMTP_EMAIL,
        name: 'Naplozz',
      },

      templateId: process.env.INVITE_TEMPLATE_ID,
      dynamic_template_data: {
        subject: `You have been added as a ${user.role} within Naplozz`,
        heading: 'Welcome to Naplozz!',
        description: `You have been added as a ${user.role} within Naplozz. Please follow the link below to get started and to set up your Naplozz profile`,
        preHeader: `You have been added as a supervisor within Naplozz`,
        link: link,
      },
    };

    await sgMail.send(msg);
    return;
  } catch (err) {
    return res.status(500).json({
      error: err.message,
    });
  }
};

const randomString = () => {
  const number = Math.random().toFixed(36).substring(2, 7);
  return number;
};

export {
  randomString,
  sendEmailToVerifyAccount,
  sendForgotPasswordCode,
  sendInviteEmail,
};
