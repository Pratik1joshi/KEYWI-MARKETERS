import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, message } = await req.json();

  // Create a transporter with your SMTP credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., Gmail, Outlook, etc. (or configure custom SMTP)
    auth: {
      user: process.env.SMTP_USER, // your email address
      pass: process.env.SMTP_PASS, // your email password or app-specific password
    },
  });

  const mailOptions = {
    from: email, // Sender email address (from the form input)
    to: process.env.SMTP_USER, // Where you want to receive the contact form submissions
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h1>Subscribed to newsletter</h1>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subscribed to newsetter</strong></p>
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, error: 'Failed to send email' }), { status: 500 });
  }
}