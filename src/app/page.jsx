"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import TypeWriter from "./components/TypeWriter";
import {
  Navbar,
  MobileNav,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Contact from "./contact/page";
import Particles from "./components/Particles";

export default function Home() {
  const typeWriter = [
    "Escribiendo código.",
    "Compilando ideas.",
    "Código es magia.",
    "Un bug menos.",
    "Hello, World!",
    "Soluciones en código.",
    "Más líneas, más problemas.",
    "Puedo, debo, programo.",
    "Lógica al infinito.",
    "El código construye el futuro.",
    "Error = oportunidad.",
    "Magia es depuración.",
    "Código habla por mí.",
    "Repetir hasta funcionar.",
    "Todo código tiene su solución.",
    "Programa, piensa, repite.",
    "Increíble = código.",
    "Cosas increíbles, código increíble.",
    "Un código limpio es un buen código.",
    "Resuelve problemas, programa.",
    "Algoritmos = soluciones."
  ];

  // Datos de habilidades
  const skills = [
    { name: "HTML", percentage: 95 },
    { name: "CSS", percentage: 90 },
    { name: "JavaScript", percentage: 85 },
    { name: "React", percentage: 80 },
    { name: "PHP", percentage: 75 },
    { name: "Tailwind CSS", percentage: 90 },
    { name: "Bootstrap", percentage: 85 },
    { name: "CorelDRAW", percentage: 70 },
  ];

  // Comentarios de clientes
  const testimonials = [
    {
      name: "Juan Pérez",
      company: "Tech Solutions",
      comment:
        "Duvan es un desarrollador excepcional. Su capacidad para resolver problemas complejos es impresionante.",
    },
    {
      name: "María López",
      company: "Design Studio",
      comment:
        "Trabajar con Duvan fue una experiencia increíble. Entregó el proyecto antes de lo esperado y superó nuestras expectativas.",
    },
    {
      name: "Carlos Gómez",
      company: "Marketing Agency",
      comment:
        "Duvan tiene un gran conocimiento en desarrollo web y diseño gráfico. Lo recomiendo totalmente.",
    },
  ];

  return (
    <div className="relative">
       <div className="fixed mt-0 w-full h-screen">
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
      {/* PRESENTACION */}
      <div className="w-full h-screen flex flex-col justify-center items-center text-center ">
        {/* Partículas en el fondo */}
       
        {/* Contenido encima de las partículas */}
        <div className="z-10 -mt-32">
          <Typography variant="h1" className="text-white text-[40px] md:text-[80px]">
            Duvan<span className="text-black bg-cyan-500 rounded-md px-5 py-2 ml-2">Ayala</span>
          </Typography>
          <br />
          <TypeWriter data={typeWriter} className=" text-white font-semibold text-[30px]" />
          <br />
          <br />
          <a href="#proyecto" color="cyan" className="mt-10 text-[20px] md:text-[40px] bg-cyan-500 p-2 rounded-xl text-white font-semibold">
            Empezar
          </a>
        </div>
      </div>

      {/* EMPRESAS CON LAS QUE EH TRABAJADO */}
      <div className="overflow-hidden w-full mt-16 place-items-center place-content-center z-50">
        <span className="dark:text-white font-bold tracking-[10px] text-center">
          ALGUNAS EMPRESAS CON LAS QUE TRABAJE
        </span>
        <div className="overflow-hidden w-[80%] m-5">
          <div className="flex place-content-center place-items-center space-x-4  ">
            <img
              src="https://crmgmfoto.codertech.com.co/_next/image?url=%2Fimages%2Flogo.png&w=128&q=75"
              className="h-[40px invert"
            />
            <a href="https://vetesoft.org" target="_blank">
              <img
                src="https://vetesoft.org/nube1/wp-content/uploads/2024/05/cropped-vetesoft-2048x572.png"
                className="h-[40px]"
              />
            </a>
            <a href="https://vetechip.com" target="_blank">
              <img
                src="https://www.visionveterinaria.com.co/base_de_conocimiento/compra_online/images/logo_vetechip.png"
                className="h-[40px]"
              />
            </a>
            <a href="https://visionveterinaria.com.co" target="_blank">
              <img
                src="https://visionveterinaria.com.co/clientes/images/logoblancos-2.png"
                className="h-[40px]"
              />
            </a>
            <a href="https://marquetingnet.com" target="_blank">
              <img
                src="https://visionveterinaria.com.co/logomarquetingnet.png"
                className="h-[40px]"
              />
            </a>
          </div>
        </div>
      </div>

       {/* INICIAR TU PROYECTO */}
       <div className="relative w-full place-items-center mt-16 " id="proyecto">
        <div className="p-5 rounded-xl text-center w-[70%] mx-auto">
          <Typography variant="h2" className="text-[40px] dark:text-white">
            💡 ¿Tienes un proyecto en mente? 🚀
          </Typography>
          <Typography variant="paragraph" className="dark:text-white">
            Hagámoslo realidad juntos. ¡Estoy aquí para ayudarte a
            desarrollarlo! 🌟
          </Typography>
          <br />
          <br />
          <a
            href="https://api.whatsapp.com/send?phone=573249899089&text=%F0%9F%92%A1%20Hola%2C%20tengo%20en%20mente%20un%20proyecto%20para%20desarrollar.%20%C2%BFPodemos%20hacerlo%20posible%3F%20%F0%9F%9A%80"
            target="_blank"
            className="px-4 py-2 text-white rounded-full float-right bg-cyan-400 font-bold z-50"
          >
            👉 Hablemos
          </a>
        </div>
      </div>

      {/* HABILIDADES */}
      <div className="relative w-full mt-16 place-items-center">
        <Typography variant="h2" className="text-center dark:text-white mb-8">
          Mis Habilidades
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[80%] mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <Typography variant="h5" className="dark:text-white">
                {skill.name}
              </Typography>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-cyan-400 h-2.5 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
              <Typography variant="small" className="dark:text-white">
                {skill.percentage}%
              </Typography>
            </div>
          ))}
        </div>
      </div>

      

     

      

      <Contact />
    </div>
  );
}