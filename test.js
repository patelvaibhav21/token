// function shubham() {

//     let delhiWeather = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("27 Deg")
//         }, 2000)
//     })

//     return delhiWeather
// }
// async function getweather(){
//     const delhi=await shubham()
//     return delhi
// }
// console.log(getweather())





var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vaibhavpatel2nd@gmail.com',
    pass: 'gocvsojyledscefp'
  }
});

var mailOptions = {
  from: 'vaibhavpatel2nd@gmail.com',
  to: 'shubhampanchal19988@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy this is another mail!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});


