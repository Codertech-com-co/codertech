"use client";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import {
    Typography,
    Card,
    Input,
    Button,
    Textarea,
} from "@material-tailwind/react";

export default function Contact() {
    const [formData, setFormData] = useState({ nombre: "", correo: "", mensaje: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("¡Mensaje enviado con éxito!");
                setFormData({ nombre: "", correo: "", mensaje: "" });
            } else {
                const errorData = await response.json();
                setStatus(`Error: ${errorData.message}`);
            }
        } catch (error) {
            console.error(error);
            setStatus("Error al enviar el mensaje.");
        }
    };

    return (
        <div className="p-16 place-items-center w-full">
            <Typography variant="h2" className="dark:text-white font-bold">Contacto</Typography>

            <Card color="transparent" className="mt-6 grid grid-cols-1 gap-4" shadow={false}>
                {/* <div>
                    <Button className="flex gap-4">
                        <FaWhatsapp />
                    </Button>
                </div> */}
                <div>
                    <Typography variant="h4" color="white">
                        Formulario de <span className="text-cyan-500">contacto</span>
                    </Typography>
                    <Typography className="mt-1 font-normal dark:text-white">
                        📲 ¡Hablemos y hagamos tu proyecto realidad! 🚀
                    </Typography>
                    <form className="mt-8 mb-2  " onSubmit={handleSubmit}>
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" className="-mb-3 dark:text-white">
                                Nombre Completo
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Juan Gomez"
                                name="nombre"
                                value={formData.nombre}
                                className="dark:text-white"
                                onChange={handleChange}
                            />
                            <Typography variant="h6" className="-mb-3 dark:text-white">
                                Correo Electrónico
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                name="correo"
                                className="dark:text-white"
                                value={formData.correo}
                                onChange={handleChange}
                            />
                            <Typography variant="h6" className="-mb-3 dark:text-white">
                                Mensaje
                            </Typography>
                            <Textarea
                                size="lg"
                                placeholder="Escribe un mensaje"
                                name="mensaje"
                                className="dark:text-white"
                                value={formData.mensaje}
                                onChange={handleChange}
                            />
                        </div>
                        <Button className="mt-6 float-right" size="sm" color="cyan" type="submit" id="contacto">
                            Enviar Mensaje
                        </Button>
                    </form>
                    {status && <Typography className="mt-4 text-sm dark:text-white">{status}</Typography>}
                </div>

            </Card>
        </div>
    );
}
