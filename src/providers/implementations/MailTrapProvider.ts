import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer'
import Mail from "nodemailer/lib/mailer";

export class MailTrapMailProvider implements IMailProvider{
    private transporter: Mail

    constructor(){
        this.transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            auth:{
                user: "donnie.torphy51@ethereal.email",
                pass: "Gdnt6XQE1pmuyAfYEx"
            }
        })
    }
    
    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to:{
                name: message.to.name,
                address: message.to.email
            },
            from:{
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        })
    }
}