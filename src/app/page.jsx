"use client";
import Image from "next/image";
import React from "react";
import TypeWriter from "./components/TypeWriter";
import {
  Navbar,
  MobileNav,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

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
  return (
    <div>
      
       

        {/* PRESENTACION */}

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          <div className="place-items-center place-content-center col-span-2 md:col-span-1 sm:col-span-2">
            {/* <img
              src="https://yt3.googleusercontent.com/BrHvTVuz3HnKJx656FpXzm_B8il50fI281AC0PtrE7RgHazzPqmUudw7yUzqmnuFsaCp6YkTEQ=s900-c-k-c0x00ffffff-no-rj"
              className="rounded-[50%] w-[200px] md:w-[300px]"
            /> */}
            <img
              src="./icono.png"
              className=" w-[200px] md:w-[300px]"
            />
            <br/>
            {/* <b className=" font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-800 p-5">Duvan Ayala</b> */}
          </div>
          <div className=" md:p-0 md:text-[40px] col-span-2 lg:col-span-2 md:col-span-1 sm:p-16 sm:text-[20px] sm:col-span-2 md:leading-[52px] font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-800 p-5">
            Hola soy <span className="text-blue-500">Duvan Ayala</span>, Desarrollador Fullstack freelance, creador de soluciones completas para
            tu negocio.

            <br />
            <TypeWriter data={typeWriter} className="text-[20px] text-blue-600" />
            <br />
            <Button color="blue" className="mt-5 rounded-[30px]">
              Descargar CV
            </Button>
          </div>
        </div>

       

        {/* EMPRESAS CON LAS QUE EH TRABAJADO */}
        <div className="overflow-hidden w-full mt-16 place-items-center">
          <span className="text-white font-bold tracking-[10px]">
            ALGUNAS EMPRESAS CON LAS QUE TRABAJE
          </span>
          <div className="overflow-hidden w-[80%] m-5">
            <div className="flex animate-marquee space-x-4 grayscale ">
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
                src="https://marquetingnet.com/wp-content/uploads/2020/05/cropped-logomarquetingnet-2.png"
                className="h-[40px]"
              />
              </a>
            </div>
          </div>
        </div>

        {/* INICIAR TU PROYECTO */}
        <div className="w-full place-items-center mt-16">
          <div className=" p-5 rounded-xl  text-center w-[70%]">
          <span className="text-[40px] text-white">💡 ¿Tienes un proyecto en mente? 🚀</span>
          <p className="text-white">
          Hagámoslo realidad juntos. ¡Estoy aquí para ayudarte a desarrollarlo! 🌟
          </p>
          <br/>
          <br/>
          <a href="https://api.whatsapp.com/send?phone=573133236125&text=%F0%9F%92%A1%20Hola%2C%20tengo%20en%20mente%20un%20proyecto%20para%20desarrollar.%20%C2%BFPodemos%20hacerlo%20posible%3F%20%F0%9F%9A%80" target="_blank" className="px-4 py-2 text-white rounded-full float-right bg-blue-500 font-bold">👉 Hablemos</a>
        </div>
        </div>
        
  
    </div>
  );
}
