// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_3Q3N6LEa_4R8VAA5Den6YqLmDCKbYe8iv');
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: 'zabelca01@blazetek.net',
      to: ["zabelca01@gmail.com", email],
      subject: subject,
      react: (
      <>
        <h1>{subject}</h1>
        <p>Thank you for contacting me!</p>
        <p>New message submitted:</p>
        <p>{message}</p>
      </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}