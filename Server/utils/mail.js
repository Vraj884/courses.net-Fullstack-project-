import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // Load .env variables

function Send(TO, MSG) {
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USERNAME,
            pass: process.env.PASS,
        }
    });

    let mailDetails = {
        from: process.env.USERNAME,
        to: TO,
        subject: 'Login Activity',
        text: MSG
    };

    mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
            console.log('Error Occurred:', err);
        } else {
            console.log('Email sent successfully');
        }
    });
}

export const send = Send;
