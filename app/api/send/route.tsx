import dotenv from 'dotenv';
dotenv.config();

import EmailTemplate from '../../components/EmailTemplate';

import { render } from '@react-email/render';

import { Resend } from 'resend';

import { NextResponse, type NextRequest } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL || '';


export async function POST(req: NextRequest) {
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
      from: fromEmail,
      to: ['yakdi.adil@gmail.com', email],
      subject: subject,
      react: emailHtml,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message || 'Something went wrong' }, { status: 500 });
    }
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}