import nodemailer from "nodemailer"
import mongoose from "mongoose";
import { User } from "./models/User.model.js";
import { send } from "./utils/mail.js";
main().catch(err => console.log(err));
 async function main (Announcement) {
        await mongoose.connect('mongodb://localhost:27017/admin');
        User.find().then(data=>{
            data.forEach((e)=>{
                send(e.email , `${Announcement}`)
            })
        })
    }