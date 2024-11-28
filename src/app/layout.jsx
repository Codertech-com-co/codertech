"use client";
import localFont from "next/font/local";
import React from "react";
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

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-bold text-white"
      >
        <Link href="/" className="flex items-center">
          Inicio
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-bold text-white"
      >
        <Link href="/about" className="flex items-center">
          Sobre mi
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-bold text-white"
      >
        <Link href="/projects" className="flex items-center">
          Proyectos
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-bold text-white"
      >
        <Link href="/contact" className="flex items-center">
          Contacto
        </Link>
      </Typography>
    </ul>
  );
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}

      >
        <div className="min-h-screen bg-gradient-to-br from-[60%] from-black to-blue-900 fixed inset-0 -z-10"></div>
        <div className="relative">
          <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 bg-transparent border-none ">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900 bg">
              <Typography
                as="a"
                href="#"
                className="mr-4 cursor-pointer py-1.5 font-bold text-white"
              >
                <img src="./logo2.png" width={'200px'} />
              </Typography>
              <div className="hidden lg:block">{navList}</div>
              <div className="flex items-center gap-x-1">
                {/* <Button variant="text" size="sm" className="hidden lg:inline-block text-white">
            <span>Log In</span>
          </Button> */}
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block"
                  color="white"
                >
                  <span>Redes Sociales</span>
                </Button>
              </div>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-white"
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
                    className=""
                    color="white"
                  >
                    <span>Redes Sociales</span>
                  </Button>
                </div>
              </div>
            </Collapse>
          </Navbar>
          {children}
        </div>
      </body>
    </html>
  );
}
