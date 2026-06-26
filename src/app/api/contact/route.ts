import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, interest, email, phone, message } = body;

    // Validate inputs
    if (!name || !interest || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Faltan campos obligatorios.' },
        { status: 400 }
      );
    }

    // Connect to Hostinger Webmail SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to receive (Your hostinger email)
    const mailOptions = {
      from: `COLBREW Web <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // Envías el correo a ti mismo
      replyTo: email, // Permite que le des a "Responder" en tu cliente de correo y le responda al usuario
      subject: `Nuevo mensaje de Contacto Web - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #EBE7DD; border-radius: 8px;">
          <h2 style="color: #1a281d; border-bottom: 2px solid #b4843b; padding-bottom: 10px;">Nuevo Contacto Web COLBREW</h2>
          
          <div style="margin-top: 20px;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Motivo:</strong> ${interest}</p>
            <p><strong>Correo Electrónico:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Teléfono / WhatsApp:</strong> ${phone}</p>` : ''}
          </div>
          
          <div style="margin-top: 30px; background-color: #F8F7F2; padding: 15px; border-radius: 4px;">
            <h3 style="margin-top: 0; color: #1a281d; font-size: 16px;">Mensaje:</h3>
            <p style="white-space: pre-wrap; color: #4a4a4a; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 40px; font-size: 12px; color: #888; text-align: center;">
            <p>Este correo fue enviado desde el formulario de contacto en colbrew.coffee</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Correo enviado exitosamente.' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error al enviar correo:', error);
    return NextResponse.json(
      { success: false, message: 'Error interno del servidor. Revisa las credenciales SMTP.' },
      { status: 500 }
    );
  }
}
