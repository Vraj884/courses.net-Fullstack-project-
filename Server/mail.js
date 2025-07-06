// Filename - index.js

import nodemailer from "nodemailer"
function Send(TO , MSG ){
    let mailTransporter =
    nodemailer.createTransport(
        {
            service: 'gmail',
            auth: {
                user: 'vrajlovesmoney@gmail.com',
                pass: 'bkbubumdqfnvyxzi'
            }
        }
    );

    let mailDetails = {
    from: 'vrajlovesmoney@gmail.com',
    to: TO,
    subject: 'Login Activity',
    text: MSG 
};

mailTransporter
    .sendMail(mailDetails,
        function (err, data) {
            if (err) {
                console.log('Error Occurs');
            } else {
                console.log('Email sent successfully');
            }
        });

}
export const send = Send ;