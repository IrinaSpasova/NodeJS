const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const sendEmailEthereal = async (req,res)=>{
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'ken.hane87@ethereal.email',
            pass: 'FsW3jyd2UY5E2chvSN'
        }
    });

    let info = await transporter.sendMail({
        from:'"ISS Design" <issdesign@gmail.com>',
        to:'bar@example.com, baz@example.com',
        subject:'Hello 💘',
        html:'<h2>Sending Emails with Node.js</h2>',
    })

   // test res.send('send email func');
    res.send(info);
};


const sendEmail = async (req,res) =>{
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
const msg = {
  to: 'test@example.com', // Change to your recipient
  from: 'test@example.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
const info = await sgMail.send(msg);
// test res.json(info);
}

module.exports = sendEmail;