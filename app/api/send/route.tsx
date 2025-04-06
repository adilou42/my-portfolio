import dotenv from 'dotenv';
dotenv.config();

import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, subject, message } = body;

  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // You can use other email services like Outlook, Yahoo, etc.
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASSWORD, // App password (not your email password)
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: [email, 'yakdi.adil@gmail.com'], // Recipient email addresses
      subject: subject,
      text: `New message: ${message}`, // Plain text body
      html: `
        <div>
          <h1>${subject}</h1>
          <p>${message}</p>
        </div>
      `, // HTML body
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    // Respond with success
    return NextResponse.json({ message: 'Email sent', info }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message || 'Something went wrong' }, { status: 500 });
    }
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
