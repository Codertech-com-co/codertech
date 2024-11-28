"use client"
import {
    Typography,
    Card,
    Input,
    Checkbox,
    Button,
    Textarea
} from "@material-tailwind/react";

export default function Contact() {
    return (
        <div className="p-16">

            <Typography variant="h2" className="text-white font-bold">Contacto</Typography>



            <Card color="transparent" className="mt-6" shadow={false}>
                <Typography variant="h4" color="blue">
                    Formulario de contacto
                </Typography>
                <Typography color="white" className="mt-1 font-normal">
                📲 ¡Hablemos y hagamos tu proyecto realidad! 🚀
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="white" className="-mb-3">
                            Nombre Completo
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="Juan Gomez"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-white"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="white" className="-mb-3">
                            Correo Electronico
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-white"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="white" className="-mb-3">
                            Mensaje
                        </Typography>
                        <Textarea
                            size="lg"
                            placeholder="Escribe un mensaje"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-white"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                    </div>

                    <Button className="mt-6 float-right" size="sm" color="blue" >
                        Enviar Mensaje
                    </Button>

                </form>
            </Card>
        </div>
    )
}