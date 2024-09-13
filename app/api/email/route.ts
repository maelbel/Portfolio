import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { email, phone, firstname, lastname, subject, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    //cc: email,
    subject: `${subject}`,
    html: `
      <html>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
          
          <style>
            body {
              width: 100%; 
              height: 100vh; 
              display: flex; 
              justify-content: center; 
              align-items: center; 
              color: #f3f4f6; 
              background-color: #111827; 
              overflow: hidden; 
              font-family: 'Open Sans', sans-serif;
            }
            .container {
              width: 300px;
              padding: 1rem 2rem;
              background-color: #1f2937;
              border-radius: 10px;
            }
            hr {
              border-color: #1f2937;
            }
            .main {
              margin: 25px 0;
            }
            .message {
              margin: 50px 0;
            }
            .subject {
              text-align: center; 
              font-weight: 800;
            }
            a {
              text-decoration: none;
              color: #2563eb;
            }
            a[href^="mailto"] {
              font-style: italic;
            }
            .footer {
              display: flex; 
              justify-content: space-between; 
              align-items: center;
              font-size: small;
            }
            .footer p {
              font-style: italic;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h3>Portfolio</h3>
            
            <hr />
            
            <div class="main">
              <h3 class="subject">${subject}</h3>

              <p class="message">${message}</p>
              <p style="margin-top: 20px;">${firstname} ${lastname}<br />
                <a href="mailto:${email}">${email}</a><br />
                <a href="https://api.whatsapp.com/send?phone=33${phone}">${phone}</a>
              </p>
            </div>

            <hr />
            
            <div class="footer">
              <p>Suivez-moi sur:</p>
              <div>
                <a href="https://www.linkedin.com/in/mael-belliard/">LinkedIn</a> /
                <a href="https://github.com/maelbel">GitHub</a>
              </div>
            </div>
          </div>
        </body>
      </html>
      `,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}