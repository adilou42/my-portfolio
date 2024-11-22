import dotenv from 'dotenv';
dotenv.config();

import EmailTemplate from '../../components/EmailTemplate';

import { render } from '@react-email/render';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL || '';

import { NextApiRequest, NextApiResponse } from 'next';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req;
  const { email, subject, message } = body;

  try {
    const emailHtml = render(
      <EmailTemplate>
        <div>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </div>
      </EmailTemplate>
    );

    const { data, error } = await resend.emails.send({
      from: fromEmail, // Replace with the actual sender email
      to: ['yakdi.adil@gmail.com', email],
      subject: subject,
      react: emailHtml,
    });

    if (error) {
      return res.status(500).json({ error });
    }

    return res.status(200).json(data);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message || 'Something went wrong' });
    }
    return res.status(500).json({ error: 'Something went wrong' });
  }
}