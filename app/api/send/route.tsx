import dotenv from 'dotenv';
dotenv.config();

import EmailTemplate from '../../components/EmailTemplate';

import { render } from '@react-email/render';

import { Resend } from 'resend';

import { type NextRequest } from 'next/server'

import { NextApiResponse } from 'next';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL || '';


export async function POST(req: NextRequest, res: NextApiResponse) {
  const body = await req.json();
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