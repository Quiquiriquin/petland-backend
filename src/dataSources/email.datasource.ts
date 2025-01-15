import mailer, { MailService } from "@sendgrid/mail";

export class EmailHandler {
  sender: MailService;
  constructor() {
    this.sender = mailer;
    this.sender.setApiKey(process.env.SENDGRID_API_KEY);
  }

  async sendEmail(
    email: string,
    subject: string,
    message: string
  ): Promise<void> {
    const msg = {
      to: email,
      from: process.env.SENDGRID_SENDER_EMAIL,
      subject: subject,
      text: message,
      html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };
    await this.sender.send(msg);
  }
}
