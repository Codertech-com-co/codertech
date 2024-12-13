import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const body = await request.json();

        const { nombre, correo, mensaje } = body;

        // Verificar que los campos requeridos estén presentes
        if (!nombre || !correo || !mensaje) {
            return new Response(JSON.stringify({ success: false, message: "Todos los campos son obligatorios." }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        // Configuración de transporte SMTP
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com", // Cambiar según el proveedor de correo
            port: 465,
            secure: true,
            auth: {
                user: "duvanmunoz38@gmail.com", // Tu correo
                pass: "nddl sdvl zmee cgvm", // Contraseña o App Password
            },
        });

        // Configuración del correo
        await transporter.sendMail({
            from: '"CODERTECH - Formulario de Contacto" <duvanmunoz38@gmail.com>',
            to: "duvanmunoz38@gmail.com",
            subject: `Nuevo mensaje de contacto de ${nombre}`,
            html: `
                <h1>Nuevo mensaje de contacto</h1>
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Correo:</strong> ${correo}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${mensaje}</p>
            `,
        });

        return new Response(JSON.stringify({ success: true, message: "Correo enviado con éxito." }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error enviando el correo:", error);
        return new Response(JSON.stringify({ success: false, message: "Error al enviar el correo." }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
