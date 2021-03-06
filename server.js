const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());

app.post('/api/email',(req,res) => {
    console.log('received')
    nodemailer.createTestAccount(() => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'rsl-wc2.au.syrahost.com',
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: 'proxy@paylinx.com.au', 
                pass: 'he};1U)o5WVE'
            }
        });

    let mailOptions = {
        from: req.body.email, // sender address
        to: ['mel@paylinx.com.au','ander.p@paylinx.com.au'], // list of receivers
        subject: 'PayLinx Website Enquery', // Subject line
        text: `Hi PayLinx,

        Name: ${req.body.name}
        Email: ${req.body.email}
        Company: ${req.body.company}
        Industry:${req.body.industry} industry.
        Message:${req.body.message}

        Cheers,
        ${req.body.name}`, // plain text body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(400).send();
        }
        return res.send('successful');
    });
});
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });
  
app.listen(port, () => {
    console.log(`start on ${port}`)
});