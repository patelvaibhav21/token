const nodemailer = require('nodemailer');

const send_email = async(req, res) => {
 const {email,subject,text}=req.body
 console.log(req.body)
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'vaibhavpatel2nd@gmail.com',
            pass: 'gocvsojyledscefp'
        }
    });

    var mailOptions = {
        from: 'vaibhavpatel2nd@gmail.com',
        to: email,
        subject: subject,
        text: text
    };

 transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(400).json({message:'Mail not sent...'})
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({message:'Mail sent...'})
        }
    });
}
module.exports={send_email}