"use client"
import React, { useState } from 'react';
import { 
  Card, 
  Typography, 
  Input, 
  Button, 
  Textarea 
} from "@material-tailwind/react";
import { FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    website: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({ ...formData, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        let newData = formData
   
        newData.message = formData.message + "\n Sitio web >>" + formData.website
    
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      if (response.ok) {
        setStatus("¡Mensaje enviado con éxito!");
        setFormData({ fullName: "", email: "", website: "", message: "" });
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
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-8">
          <div>
            <Button
              variant="text"
              className="text-blue-600 font-normal text-sm mb-4"
            >
              Contáctanos
            </Button>
            <Typography variant="h2" className="text-3xl font-bold mb-4">
              ¿Listo para Transformar tu Idea en Realidad?
            </Typography>
            <Typography className="text-gray-600 mb-8">
              Somos expertos en desarrollo de software a medida. Desde aplicaciones web hasta soluciones empresariales complejas, 
              nuestro equipo está preparado para ayudarte a llevar tu proyecto al siguiente nivel con tecnologías innovadoras y las mejores prácticas de desarrollo.
            </Typography>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
                <FaEnvelope size={20} />
              </div>
              <div>
                <Typography variant="small" className="text-gray-600">
                  Correo Electrónico
                </Typography>
                <Typography>duvanmunoz38@gmail.com</Typography>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
                <FaPhone size={20} />
              </div>
              <div>
                <Typography variant="small" className="text-gray-600">
                  Teléfono
                </Typography>
                <Typography>+57 324 989 9089</Typography>
              </div>
            </div>

           

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <Typography variant="small" className="text-gray-600">
                  Ubicación
                </Typography>
                <Typography>Colombia</Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <Button
            variant="text"
            className="text-blue-600 font-normal text-sm mb-4"
          >
            Inicia tu Proyecto
          </Button>
          <Typography variant="h2" className="text-3xl font-bold mb-8">
            Cuéntanos sobre tu Proyecto
          </Typography>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              size="lg"
              label="Nombre Completo"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              color="blue"
            />
            
            <Input
              size="lg"
              label="Correo Electrónico"
              name="email"
              value={formData.email}
              onChange={handleChange}
              color="blue"
            />
            
            <Input
              size="lg"
              label="Sitio Web (opcional)"
              name="website"
              value={formData.website}
              onChange={handleChange}
              color="blue"
            />
            
            <Textarea
              size="lg"
              label="Describe tu Proyecto"
              name="message"
              value={formData.message}
              onChange={handleChange}
              color="blue"
            />
            
            <Button
              type="submit"
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Enviar Mensaje →
            </Button>
          </form>
          
          {status && (
            <Typography className="mt-4 text-sm text-gray-600">
              {status}
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
}