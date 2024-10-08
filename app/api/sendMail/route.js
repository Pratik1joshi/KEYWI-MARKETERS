// app/api/sendMail/route.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, message } = await req.json();

  try {
    // Send the email using Resend
    await resend.emails.send({
      from: 'yourname@yourdomain.com', // Replace with verified sender email
      to: 'yourEmail@domain.com',      // Your receiving email address
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Email sending failed:', error);
    return new Response(JSON.stringify({ success: false, error: 'Email sending failed.' }), { status: 500 });
  }
}
