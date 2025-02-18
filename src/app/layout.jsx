"use client";
import localFont from "next/font/local";
import React, { useEffect } from "react";
import "./globals.css";
import {
  Navbar,
  MobileNav,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Link from "next/link";
import SplashCursor from "./components/SplashCursor";
import Particles from "./components/Particles";
import CursorEffect from "./components/CursorEffect";
import AnimatedCursor from "react-animated-cursor"
import { FaWhatsapp } from "react-icons/fa";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const metadata = {
  title: "CoderTech",
  description: "Desarrollo de software",
};



export default function RootLayout({ children }) {
  const [openNav, setOpenNav] = React.useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Función para actualizar el tema automáticamente
      const updateTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

        // document.body.classList.toggle('dark', isDark);
      };

      // Ejecutar la actualización inicial del tema
      updateTheme();

      // Escuchar cambios en el modo de color del sistema
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', updateTheme);

      // Limpiar el listener al desmontar el componente
      return () => {
        mediaQuery.removeEventListener('change', updateTheme);
      };
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 dark:text-blue-gray-700 ">
      <span
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-bold "
      >
        <Link href="/" className="flex items-center">
          INICIO
        </Link>
      </span>
      <span
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-bold "
      >
        <Link href="/contact" className="flex items-center">
          CONTACTO
        </Link>
      </span>
    </ul>
  );
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}

      >
       
        {/* <SplashCursor /> */}
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          color="#2196F3"
          innerStyle={{
            backgroundColor: '#2196F3'
          }}
          outerStyle={{
            border: '3px solid #2196F3'
          }}
          className="relative z-[2000]"
        />


        <div className="h-screen">
          <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 bg-transparent  border-none shadow-none  ">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900 bg-transparent">
              <Typography
                as="a"
                href="#"
                className="mr-4 cursor-pointer py-1.5 font-bold text-white"
              >
                {/* <img src="./logo2.png" width={'200px'} /> */}
                <div className="bg-[url('/logo.png')] dark:bg-[url('/logo.png')] w-[200px] h-[50px] bg-contain bg-no-repeat" alt="" width={'200px'} />
              </Typography>
              <div className="hidden lg:block">{navList}</div>
              <div className="flex items-center gap-x-1">
           
              </div>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-blue-gray-700"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
            <Collapse open={openNav}>
              <div className="container mx-auto">
                {navList}
                <div className="flex items-center gap-x-1">
                  {/* <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button> */}
                  <Button
                    fullWidth
                    variant="gradient"
                    size="sm"
                    className="text-cyan-400 dark:text-white"

                  >
                    <span>Redes Sociales</span>
                  </Button>
                </div>
              </div>
            </Collapse>
          </Navbar>
          {children}
        </div>
        <a href="https://api.whatsapp.com/send?phone=573249899089&text=%F0%9F%92%A1%20Hola%2C%20tengo%20en%20mente%20un%20proyecto%20para%20desarrollar.%20%C2%BFPodemos%20hacerlo%20posible%3F%20%F0%9F%9A%80" target="_blank" className=" fixed bottom-5 right-5 bg-green-600 rounded-[50%] w-[60px] h-[60px]  place-items-center place-content-center text-white text-[35px]"><FaWhatsapp /></a>
      </body>
    </html>
  );
}
