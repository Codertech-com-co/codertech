import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const body = await request.json();

        const { fullName, email, message } = body;

        // Verificar que los campos requeridos estén presentes
        if (!fullName || !email || !message) {
            return new Response(JSON.stringify({ success: false, message: "Todos los campos son obligatorios." }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        // Configuración de transporte SMTP
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com", // Cambiar según el proveedor de email
            port: 465,
            secure: true,
            auth: {
                user: "duvanmunoz38@gmail.com", // Tu email
                pass: "nddl sdvl zmee cgvm", // Contraseña o App Password
            },
        });

        // Configuración del email
        await transporter.sendMail({
            from: '"CODERTECH - Formulario de Contacto" <duvanmunoz38@gmail.com>',
            to: "duvanmunoz38@gmail.com",
            subject: `Nuevo message de contacto de ${fullName}`,
            html: `
                <h1>Nuevo message de contacto</h1>
                <p><strong>Nombre:</strong> ${fullName}</p>
                <p><strong>Correo:</strong> ${email}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${message}</p>
            `,
        });

        return new Response(JSON.stringify({ success: true, message: "email enviado con éxito." }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error enviando el email:", error);
        return new Response(JSON.stringify({ success: false, message: "Error al enviar el email." }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
