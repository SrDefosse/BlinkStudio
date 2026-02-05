import { data } from "react-router";
import type { Route } from "./+types/contact";

// Define the shape of our form data for type safety
type ContactFormData = {
    nombre: string;
    correo: string;
    mensaje: string;
    interests?: string; // Comma separated string or specific format
    website?: string; // Honeypot
};

export async function action({ request }: Route.ActionArgs) {
    // 1. Origin Check
    const origin = request.headers.get("Origin");
    // Allow requests from the main domain and localhost for development
    const allowedOrigins = [
        "https://blinkstudio.dev",
        "https://www.blinkstudio.dev",
        "http://localhost:5173", // Dev environment
        "http://localhost:3000",
    ];

    // In development, we might strictly enforce this or leniently allow localhost
    if (process.env.NODE_ENV === "production" && origin && !allowedOrigins.includes(origin)) {
        return data({ success: false, error: "Unauthorized origin" }, { status: 403 });
    }

    const formData = await request.formData();
    const nombre = formData.get("nombre") as string;
    const correo = formData.get("correo") as string;
    const mensaje = formData.get("mensaje") as string;
    // Interests might come as multiple fields or a joined string. 
    // If usage is FormData with same name, getAll returns array.
    const interestsRaw = formData.getAll("interests");
    const interests = interestsRaw.join(", ");

    const website = formData.get("website") as string;

    // 2. Honeypot Check
    if (website) {
        // Silently return success to fool bots
        return data({ success: true, message: "Mensaje enviado correctamente." });
    }

    // 3. Input Sanitization & Strict Validation

    // Helper to strip HTML tags
    const stripHtml = (str: string) => str ? str.replace(/<[^>]*>?/gm, "") : "";

    const cleanNombre = stripHtml(nombre)?.trim();
    const cleanCorreo = stripHtml(correo)?.trim();
    const cleanMensaje = stripHtml(mensaje)?.trim();
    const cleanInterests = stripHtml(interests)?.trim();

    // Validate lengths
    if (!cleanNombre || cleanNombre.length < 2 || cleanNombre.length > 100) {
        return data({ success: false, error: "Name is invalid." }, { status: 400 });
    }
    if (!cleanMensaje || cleanMensaje.length < 10 || cleanMensaje.length > 2000) {
        return data({ success: false, error: "Message must be between 10 and 2000 characters." }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanCorreo || !emailRegex.test(cleanCorreo) || cleanCorreo.length > 254) {
        return data({ success: false, error: "Email is invalid." }, { status: 400 });
    }

    // 4. Header Protection
    const subject = `New contact message from ${cleanNombre} - Blink Studio`;
    const safeSubject = subject.replace(/[\r\n]/g, " ");

    // 5. Server-Side Execution with Resend (Native Fetch)
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.error("RESEND_API_KEY is missing");
        return data({ success: false, error: "Server configuration error." }, { status: 500 });
    }

    try {
        const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                from: "Blink Studio <noreply@blinkstudio.dev>", // Ideally this should be a verified domain
                // If blinkstudio.dev is not verified on Resend yet, they might need to use 'onboarding@resend.dev'
                // But the user asked to adapt to blinkstudio.dev domain. 
                // Using a potentially unverified domain might fail if not set up, 
                // but I must follow instructions. 
                // Often 'onboarding@resend.dev' works for testing if 'to' is the same as account email.
                // I will use noreply@blinkstudio.dev as requested adaptation.
                to: ["blinksitesweb@gmail.com"],
                reply_to: cleanCorreo,
                subject: safeSubject,
                html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Message from Blink Studio</title>
</head>
<body style="margin: 0; padding: 0; background-color: #1a1d18; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #e6e1d7;">
  <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color: #1a1d18; padding: 40px 0;">
    <tr>
      <td align="center">
        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width: 600px; background-color: #2a2e26; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); border: 1px solid #3c4237;">
          
          <!-- Header -->
          <tr>
            <td style="background-color: #1a1d18; padding: 40px; text-align: center; border-bottom: 1px solid #3c4237;">
              <h1 style="color: #e6e1d7; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 1px;">BLINK STUDIO</h1>
              <p style="color: #a89080; margin: 10px 0 0 0; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Contact Notification</p>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="color: #e6e1d7; margin-top: 0; margin-bottom: 24px; font-size: 20px; font-weight: 600; border-bottom: 1px solid #3c4237; padding-bottom: 12px;">Message Details</h2>
              
              <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="padding-bottom: 16px;">
                    <p style="margin: 0; font-size: 12px; color: #a89080; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Name</p>
                    <p style="margin: 4px 0 0 0; font-size: 16px; color: #e6e1d7;">${cleanNombre}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 16px;">
                    <p style="margin: 0; font-size: 12px; color: #a89080; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Email</p>
                    <a href="mailto:${cleanCorreo}" style="margin: 4px 0 0 0; font-size: 16px; color: #c8b4a0; text-decoration: none; display: inline-block;">${cleanCorreo}</a>
                  </td>
                </tr>
                ${cleanInterests ? `
                <tr>
                  <td style="padding-bottom: 16px;">
                    <p style="margin: 0; font-size: 12px; color: #a89080; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Interests</p>
                    <p style="margin: 4px 0 0 0; font-size: 16px; color: #e6e1d7;">${cleanInterests}</p>
                  </td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding-top: 8px;">
                    <p style="margin: 0; font-size: 12px; color: #a89080; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Message</p>
                    <div style="margin-top: 8px; padding: 16px; background-color: #1a1d18; border-radius: 8px; border-left: 4px solid #c8b4a0; color: #e6e1d7; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${cleanMensaje}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA / Reply Button -->
          <tr>
            <td style="padding: 0 40px 40px 40px; text-align: center;">
              <a href="mailto:${cleanCorreo}?subject=RE: ${safeSubject}" style="background-color: #e6e1d7; color: #1a1d18; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; display: inline-block;">Reply to Client</a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #1a1d18; padding: 24px 40px; text-align: center; border-top: 1px solid #3c4237;">
              <p style="margin: 0; font-size: 12px; color: #6b7280;">Sent via Blink Studio Contact Form</p>
              <p style="margin: 8px 0 0 0; font-size: 12px; color: #6b7280;">&copy; ${new Date().getFullYear()} Blink Studio. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`,
            }),
        });

        if (!res.ok) {
            const errorData = await res.json();
            console.error("Resend API Error:", errorData);
            throw new Error("Error sending email via Resend");
        }


        return data({ success: true, message: "Message sent successfully." });

    } catch (error) {
        console.error("Contact form error:", error);
        return data({ success: false, error: "Error sending message. Please try again later." }, { status: 500 });
    }
}
