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
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'chinazzk94@gmail.com', 
                pass: 'etmjmqgatkfciata'
            }
        });

    let mailOptions = {
        from: req.body.email, // sender address
        to: 'chinazzk94@gmail.com', // list of receivers
        subject: 'PayLinx Website Enquery', // Subject line
        text: `Hi PayLinx,
            I'm ${req.body.name} from ${req.body.company} in ${req.body.industry} industry
            ${req.body.message}
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