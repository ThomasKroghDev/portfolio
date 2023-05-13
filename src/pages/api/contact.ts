import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { FirstName, LastName, Email, comment } = req.body;

    // Create a nodemailer transporter with your email provider's SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.sendinblue.com',
      port: 587,
      auth: {
        user: process.env.SENDINBLUE_USERNAME,
        pass: process.env.SENDINBLUE_PASSWORD,
      },
    });

    try {
      // Send the email
      const info = await transporter.sendMail({
        from: `"${FirstName} ${LastName}" <${Email}>`,
        to: 'thomas.krogh.dev@gmail.com',
        subject: 'Contact Form Submission',
        text: comment,
      });

      console.log(`Email sent: ${info.messageId}`);
      res.status(200).json({ message: 'Email sent' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Something went wrong' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
