import nodemailer from 'nodemailer';

export interface EmailRequestBody {
  formType?: string;
  name?: string;
  phone?: string;
  city?: string;
  length?: string | number;
  height?: string | number;
  subject?: string;
  message?: string;
  sitePic?: string; // Data URL / Base64 string
  sitePicName?: string;
}

export async function sendInquiryEmail(data: EmailRequestBody) {
  // Dynamically load .env values if present
  try {
    const fs = await import('fs');
    const path = await import('path');
    const envPath = path.resolve(process.cwd(), '.env');
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf-8');
      for (const line of content.split('\n')) {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
          const [key, ...val] = trimmed.split('=');
          process.env[key.trim()] = val.join('=').trim();
        }
      }
    }
  } catch (e) {
    /* ignore fallback */
  }

  const host = process.env.SMTP_HOST || 'smtp.hostinger.com';
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const secure = process.env.SMTP_SECURE !== 'false';
  const user = process.env.SMTP_USER || 'connect@infiwindow.com';
  const pass = process.env.SMTP_PASS || 'PartlySunny@32C';
  const from = process.env.EMAIL_FROM || 'connect@infiwindow.com';
  const to = process.env.EMAIL_TO || 'hi@infiwindow.com, gunjan@infiwindow.com';

  console.log(`[Email Service] Attempting to send email via ${host}:${port} (${user}) -> To: ${to}`);

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure, // true for 465 (SSL)
    auth: {
      user,
      pass,
    },
  });


  const formType = data.formType || 'Website Inquiry';
  const name = data.name || 'N/A';
  const phone = data.phone || 'N/A';
  const city = data.city || 'N/A';
  const length = data.length !== undefined && data.length !== '' ? `${data.length} ft` : 'N/A';
  const height = data.height !== undefined && data.height !== '' ? `${data.height} ft` : 'N/A';
  const subject = data.subject || `New ${formType} from ${name}`;
  const message = data.message || 'No additional message provided.';

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>INFIWIN Lead Notification</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #0f172a;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; background-color: #f1f5f9; padding: 30px 10px;">
        <tr>
          <td align="center">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 620px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05); border: 1px solid #cbd5e1;">
              
              <!-- Top Gold Gradient Accent Line -->
              <tr>
                <td style="background: linear-gradient(90deg, #b89328 0%, #d4af37 50%, #f3e5ab 100%); height: 5px; font-size: 0; line-height: 0;">&nbsp;</td>
              </tr>

              <!-- Header Section with Logo on Light Background -->
              <tr>
                <td align="center" style="background-color: #ffffff; padding: 32px 24px 24px 24px; border-bottom: 1px solid #e2e8f0;">
                  <table border="0" cellpadding="0" cellspacing="0">
                    <tr>
                      <td align="center">
                        <img src="cid:infiwin-logo" alt="INFIWIN Logo" style="height: 92px; width: auto; max-width: 380px; display: block; margin: 0 auto 12px auto;" />
                        <div style="font-size: 10px; font-weight: 700; color: #b89328; letter-spacing: 3px; text-transform: uppercase;">
                          PREMIUM FRAMELESS BALCONY & WINDOW SYSTEMS
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>


              <!-- Form Type Badge & Title -->
              <tr>
                <td style="padding: 28px 32px 16px 32px; background-color: #ffffff;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td>
                        <span style="display: inline-block; background-color: #fef3c7; color: #92400e; border: 1px solid #fde68a; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; padding: 5px 14px; border-radius: 20px;">
                          ${formType}
                        </span>
                        <h1 style="margin: 14px 0 6px 0; font-family: Georgia, serif; font-size: 22px; font-weight: 600; color: #0f172a; letter-spacing: -0.2px;">
                          New Lead Submission Received
                        </h1>
                        <p style="margin: 0; font-size: 13px; color: #64748b; font-weight: 400;">
                          A prospective client has submitted a new inquiry on your website.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Clean Structured Data Table -->
              <tr>
                <td style="padding: 8px 32px 24px 32px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #ffffff; border-radius: 8px; border: 1px solid #cbd5e1; border-collapse: separate; overflow: hidden;">
                    
                    <!-- Row: Full Name -->
                    <tr>
                      <td style="padding: 13px 16px; width: 35%; background-color: #f8fafc; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #475569; border-bottom: 1px solid #cbd5e1; border-right: 1px solid #cbd5e1; border-left: 3px solid #d4af37;">
                        Full Name
                      </td>
                      <td style="padding: 13px 16px; background-color: #ffffff; font-size: 15px; font-weight: 600; color: #0f172a; border-bottom: 1px solid #cbd5e1;">
                        ${name}
                      </td>
                    </tr>

                    <!-- Row: Phone Number -->
                    <tr>
                      <td style="padding: 13px 16px; background-color: #f8fafc; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #475569; border-bottom: 1px solid #cbd5e1; border-right: 1px solid #cbd5e1; border-left: 3px solid #d4af37;">
                        Phone Number
                      </td>
                      <td style="padding: 13px 16px; background-color: #ffffff; font-size: 15px; font-weight: 700; color: #0f172a; border-bottom: 1px solid #cbd5e1;">
                        <a href="tel:${phone}" style="color: #2563eb; text-decoration: none; border-bottom: 1px dotted #2563eb;">${phone}</a>
                      </td>
                    </tr>

                    ${city !== 'N/A' ? `
                    <!-- Row: City -->
                    <tr>
                      <td style="padding: 13px 16px; background-color: #f8fafc; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #475569; border-bottom: 1px solid #cbd5e1; border-right: 1px solid #cbd5e1; border-left: 3px solid #d4af37;">
                        Location / City
                      </td>
                      <td style="padding: 13px 16px; background-color: #ffffff; font-size: 14px; font-weight: 600; color: #0f172a; border-bottom: 1px solid #cbd5e1;">
                        ${city}
                      </td>
                    </tr>
                    ` : ''}

                    ${length !== 'N/A' ? `
                    <!-- Row: Length -->
                    <tr>
                      <td style="padding: 13px 16px; background-color: #f8fafc; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #475569; border-bottom: 1px solid #cbd5e1; border-right: 1px solid #cbd5e1; border-left: 3px solid #d4af37;">
                        Length (ft)
                      </td>
                      <td style="padding: 13px 16px; background-color: #ffffff; font-size: 14px; font-weight: 600; color: #0f172a; border-bottom: 1px solid #cbd5e1;">
                        ${length}
                      </td>
                    </tr>
                    ` : ''}

                    ${height !== 'N/A' ? `
                    <!-- Row: Height -->
                    <tr>
                      <td style="padding: 13px 16px; background-color: #f8fafc; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #475569; border-bottom: 1px solid #cbd5e1; border-right: 1px solid #cbd5e1; border-left: 3px solid #d4af37;">
                        Height (ft)
                      </td>
                      <td style="padding: 13px 16px; background-color: #ffffff; font-size: 14px; font-weight: 600; color: #0f172a; border-bottom: 1px solid #cbd5e1;">
                        ${height}
                      </td>
                    </tr>
                    ` : ''}

                    ${subject ? `
                    <!-- Row: Subject -->
                    <tr>
                      <td style="padding: 13px 16px; background-color: #f8fafc; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #475569; border-right: 1px solid #cbd5e1; border-left: 3px solid #d4af37;">
                        Subject
                      </td>
                      <td style="padding: 13px 16px; background-color: #ffffff; font-size: 14px; font-weight: 500; color: #334155;">
                        ${subject}
                      </td>
                    </tr>
                    ` : ''}
                  </table>
                </td>
              </tr>

              <!-- Call & WhatsApp Action Buttons (Stacked Up & Down) -->
              ${phone !== 'N/A' ? `
              <tr>
                <td style="padding: 0 32px 24px 32px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td align="center" style="padding-bottom: 12px;">
                        <a href="tel:${phone}" style="display: block; background-color: #0f172a; color: #ffffff; text-decoration: none; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; padding: 14px 16px; border-radius: 8px; text-align: center; box-shadow: 0 3px 8px rgba(15, 23, 42, 0.12);">
                          📞 Call Client (${name.split(' ')[0]})
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td align="center">
                        <a href="https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Hi ${name}, thank you for contacting Infiwin! We received your quote request.`)}" target="_blank" style="display: block; background-color: #25D366; color: #ffffff; text-decoration: none; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; padding: 14px 16px; border-radius: 8px; text-align: center; box-shadow: 0 3px 8px rgba(37, 211, 102, 0.15);">
                          💬 WhatsApp Message
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              ` : ''}


              <!-- Message / Details Box -->

              <tr>
                <td style="padding: 0 32px 28px 32px;">
                  <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #64748b; margin-bottom: 8px;">
                    Message / Client Request Details:
                  </div>
                  <div style="background-color: #f8fafc; border-left: 4px solid #d4af37; border: 1px solid #cbd5e1; border-left-width: 4px; border-left-color: #d4af37; border-radius: 6px; padding: 16px; font-size: 14px; color: #1e293b; line-height: 1.6;">
                    ${message.replace(/\n/g, '<br/>')}
                  </div>
                </td>
              </tr>

              ${data.sitePic ? `
              <!-- Attachment Indicator -->
              <tr>
                <td style="padding: 0 32px 24px 32px;">
                  <div style="background-color: #fffbeb; border: 1px solid #fef3c7; border-radius: 6px; padding: 12px 16px; font-size: 12px; color: #92400e; font-weight: 600; display: inline-block;">
                    📎 Site Image Attachment Included (${data.sitePicName || 'uploaded photo'})
                  </div>
                </td>
              </tr>
              ` : ''}

              <!-- Light Footer Section -->
              <tr>
                <td style="background-color: #f8fafc; padding: 24px 32px; text-align: center; border-top: 1px solid #e2e8f0;">
                  <p style="margin: 0 0 8px 0; font-family: Georgia, serif; font-size: 13px; font-weight: 700; color: #b89328; letter-spacing: 2px; text-transform: uppercase;">
                    INFIWIN SYSTEM
                  </p>
                  <p style="margin: 0 0 10px 0; font-size: 12px; color: #64748b; line-height: 1.5;">
                    H 195, Sector 63, Noida, UP - 201309 &bull; <a href="https://www.infiwindow.com" style="color: #b89328; font-weight: 600; text-decoration: none;">www.infiwindow.com</a>
                  </p>
                  <p style="margin: 0; font-size: 10px; color: #94a3b8; line-height: 1.4;">
                    Automated lead notification email from INFIWIN Website.<br/>
                    Sender: ${from}
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;



  const fs = await import('fs');
  const path = await import('path');

  const attachments: any[] = [];

  const logoTransparentPath = path.resolve(process.cwd(), 'public/logo_transparent.png');
  const logoWebpPath = path.resolve(process.cwd(), 'public/logo.webp');

  if (fs.existsSync(logoTransparentPath)) {
    attachments.push({
      filename: 'logo_transparent.png',
      path: logoTransparentPath,
      cid: 'infiwin-logo',
    });
  } else if (fs.existsSync(logoWebpPath)) {
    attachments.push({
      filename: 'logo.webp',
      path: logoWebpPath,
      cid: 'infiwin-logo',
    });
  }


  if (data.sitePic && data.sitePic.includes('base64,')) {
    const parts = data.sitePic.split(';base64,');
    const mimeType = parts[0].replace('data:', '');
    const base64Content = parts[1];
    const filename = data.sitePicName || `site-image.${mimeType.split('/')[1] || 'jpg'}`;
    attachments.push({
      filename,
      content: Buffer.from(base64Content, 'base64'),
      contentType: mimeType,
    });
  }


  const mailOptions = {
    from: `"INFIWIN Website" <${from}>`,
    to,
    subject: `[INFIWIN Website] ${subject}`,
    html: htmlContent,
    attachments,
  };

  const res = await transporter.sendMail(mailOptions);
  console.log(`[Email Service] SUCCESS! Message ID: ${res.messageId}, Accepted:`, res.accepted);
  return res;
}


// Vercel Serverless Function Handler
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const body: EmailRequestBody = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const info = await sendInquiryEmail(body);
    return res.status(200).json({ success: true, messageId: info.messageId });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, error: error.message || 'Failed to send email' });
  }
}
