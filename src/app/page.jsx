"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import TypeWriter from "./components/TypeWriter";
import { motion } from "framer-motion";
import {
  Navbar,
  MobileNav,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { FaReact, FaPhp, FaShopify, FaJs, FaApple } from "react-icons/fa";
import { SiWoo } from "react-icons/si";
import Link from "next/link";

export default function Home() {
  const logos = [
    { name: 'EvoBike', img: 'https://evobike.com.co/cdn/shop/files/footer_logo.svg?v=1736868548&width=375' },
    { name: 'Vetesoft', img: 'https://vetesoft.org/nube1/wp-content/uploads/2024/05/cropped-vetesoft-2048x572.png' },
    { name: 'Marquetingentsas', img: 'https://visionveterinaria.com.co/logomarquetingnet.png' },
    { name: 'gmfoto', img: 'https://crmgmfoto.codertech.com.co/_next/image?url=%2Fimages%2Flogo.png&w=128&q=75' },
    { name: 'vetechip', img: 'https://www.visionveterinaria.com.co/base_de_conocimiento/compra_online/images/logo_vetechip.png' },
    { name: 'Loncheros', img: 'https://www.loncheroscolombia.com/img/logo1.png' },

  ];

  const stats = [
    { number: '7+', label: 'Años de experiencia' },
    // { number: '15 K', label: 'Proyectos completados' },
    // { number: '240', label: 'Premios obtenidos' },
    // { number: '180', label: 'Clientes satisfechos en 24 países' },
  ];


  return (
    <div className="">
      {/* Left background decorative pattern */}
      <div className="absolute left-0 top-20  h-full  hidden md:block opacity-60">
        <img src="http://iteck_vuenuxt.themescamp.com/assets/img/header/head_shape_l.png" width={400} alt="" />
      </div>

      {/* Right background decorative pattern */}
      <div className="absolute right-0 top-20  h-full hidden md:block opacity-60">
        <img src="http://iteck_vuenuxt.themescamp.com/assets/img/header/head_shape_r.png" alt="" width={900} />
      </div>

      {/* Main content */}
      <div className=" z-10 container mx-auto px-4 py-16 scale-110 h-screen/2">
        <motion.div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-20"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {/* Left content */}
          <div className="lg:w-1/2 text-center sm:text-left order-1 sm:order-0">
            <div className="text-sm text-blue-600 font-medium mb-2">DESARROLLO DE SOFTWARE</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Soluciones
            </h1>
            <h2 className="text-3xl lg:text-4xl font-normal text-gray-900 mb-6">
              Digitales
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              Impulsamos la transformación digital de las empresas con soluciones de software innovadoras, escalables y adaptadas a las necesidades del mercado actual.
            </p>
            <div className="text-left  ">
              <Link href='/contact' className="bg-black text-white p-3 rounded-lg" >
                Contactanos
              </Link>
              {/* <button className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                <span className="mr-2">Videos de Iteck</span>
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </button> */}
            </div>
          </div>

          {/* Right content - Circular image */}
          <div className="lg:w-1/2 order-0 sm:order-1">
            <div className="relative w-72 h-72 lg:w-[500px] lg:h-[500px] mx-auto">
              <div className="absolute inset-0 bg-transparent  overflow-hidden">
                <img
                  src="http://iteck_vuenuxt.themescamp.com/assets/img/header/head.png"
                  alt="IT professionals working together"
                  className="w-full h-full "
                />
              </div>
              {/* Decorative circle border */}
              <div className="absolute -right-4 -top-4 w-full h-full">
                <div className="w-full h-full border-2 border-blue-200 border-dashed rounded-full" />
              </div>
              {/* Decorative dots around the circle */}
              <div className="absolute w-full h-full">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-200 rounded-full"
                    style={{
                      transform: `rotate(${i * 45}deg) translateX(${i % 2 ? '12rem' : '13rem'})`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <br /><br />
      <div className="flex flex-wrap items-center justify-between gap-4 mb-16 text-sm font-medium w-full max-w-6xl mx-auto">
        {logos.map((logo) => (
          <div key={logo.name} className="text-white/90 hover:text-white transition-colors">
            <img src={logo.img} className="w-[100px]" alt="" />
          </div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: .2 }} className=" w-full max-w-6xl mx-auto p-5 md:p-0">

        <div className="rounded-3xl  p-8 text-white" style={{
          background: "linear-gradient(to right, #0c3df4 0%, #02b5ff 100%)"
        }}>
          {/* Top logos */}

          {/* Content grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left column - Quote */}
            <div>
              <blockquote className="text-3xl lg:text-4xl font-bold mb-4">
                &quot;El software transforma el mundo cuando conecta con las necesidades reales&quot;
              </blockquote>
              <cite className="text-white/80">MARÍA TORRES</cite>
            </div>

            {/* Right column - Description */}
            <div className="space-y-6">
              <p>
                Desarrollamos soluciones de software innovadoras y escalables que impulsan la transformación digital de empresas en todo el mundo.
              </p>
              <p className="text-white/90">
                Nuestra empresa es líder en desarrollo de software personalizado, soluciones cloud, e integración de sistemas. Ayudamos a las empresas a optimizar sus operaciones mediante tecnología de vanguardia, metodologías ágiles y un equipo experto comprometido con la excelencia.
              </p>
              <button className="px-6 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                Más Sobre Nosotros
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/20">
            {stats.map((stat) => (
              <div key={stat.number} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>



      <motion.div className="grid grid-cols-2 gap-0 items-center justify-center  z-0"

        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-full h-96 flex flex-wrap justify-center col-span-2 order-1 sm:order-0 md:col-span-1 !-z-50">
          <motion.img src="http://iteck_vuenuxt.themescamp.com/assets/img/choose_us/choose_lines.svg" alt=""
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 50, delay: 1 * 0.2, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
          />

          <motion.div
            className="absolute p-2"
            initial={{ y: 40, scale: 1, opacity: 1 }}
            animate={{ y: 40 / 2, scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1 * 0.2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          >
            <img src="http://iteck_vuenuxt.themescamp.com/assets/img/choose_us/choose_brands.png" alt="" className="sm:h-[600px]" />
          </motion.div>

        </div>
        <div className="w-1/full sm:w-1/2 p-10 col-span-2 md:col-span-1 order-0 sm:order-1 mt-20">
          <span className="text-blue-500 text-[20px]">¿POR QUÉ ELEGIRNOS?</span>
          <br />
          <br />
          <h2 className="text-3xl font-bold text-gray-900">Impulsa tu negocio</h2>
          <p className="text-gray-600 mt-4">
            Transformamos tu negocio con las últimas tecnologías y soluciones de
            vanguardia.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center text-gray-700">
              ✅ Desarrollo de software a la medida para tu empresa
            </li>
            <li className="flex items-center text-gray-700">
              ✅ Aplicaciones web y móviles con tecnología de vanguardia
            </li>
            <li className="flex items-center text-gray-700">
              ✅ Soluciones optimizadas para alto rendimiento y escalabilidad
            </li>
            <li className="flex items-center text-gray-700">
              ✅ Soporte técnico especializado y continuo
            </li>
          </ul>

          {/* <Button className="mt-6">Cómo Trabajamos</Button> */}
        </div>
      </motion.div>

      <footer className="bg-black text-white py-10 z-[1000]  sm:mt-60 ">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sección de la empresa */}
            <div>
              <h2 className="text-xl font-bold flex items-center">
                <img
                  src="logo2.png" // Reemplaza con el logo real
                  alt="Logo"
                  className="mr-2 w-[200px]"
                />

              </h2>
              <p className="text-gray-400 mt-2">
                El mejor tema de WordPress para soluciones de TI y tecnología para su negocio.
              </p>
              <div className="mt-4 space-y-2">
                <p className="flex items-center text-gray-400">
                  📍 Colombia
                </p>
                <p className="flex items-center text-gray-400">✉ duvanmunoz38@gmail.com</p>
                <p className="flex items-center text-gray-400">📞 (+57) 313 323 6125</p>
              </div>
              {/* Redes sociales */}
              {/* <div className="flex space-x-3 mt-4">
                <a href="#" className="text-gray-400 hover:text-white">🌍</a>
                <a href="#" className="text-gray-400 hover:text-white">📘</a>
                <a href="#" className="text-gray-400 hover:text-white">🐦</a>
                <a href="#" className="text-gray-400 hover:text-white">🔗</a>
              </div> */}
            </div>

            {/* Sección de servicios */}
            <div>
              <h3 className="text-lg font-semibold">Servicios</h3>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li>Consultas de TI</li>
                <li>Seguridad de datos</li>
                <li>Desarrollo de sitios web</li>
                <li>Diseño UI/UX</li>
                <li>Servicios en la nube</li>
                <li>CRM y software</li>
              </ul>
            </div>

            {/* Sección de información */}
            {/* <div>
              <h3 className="text-lg font-semibold">Información</h3>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li>Acerca de Iteck</li>
                <li>Inversionistas</li>
                <li>Blog</li>
                <li>Carrera</li>
                <li>Contacto</li>
                <li>Programa de afiliados</li>
                <li>Cómo funciona</li>
                <li>Plan de precios</li>
                <li>Actualización sobre el Covid-19</li>
              </ul>
            </div> */}

            {/* Sección de suscripción */}
            <div>
              <h3 className="text-lg font-semibold">Hoja informativa</h3>
              <p className="text-gray-400 mt-2">
                Regístrese ahora para recibir las últimas actualizaciones sobre promociones y cupones.
              </p>
              <div className="mt-4 flex">
                <input
                  type="email"
                  placeholder="Ingresa tu correo electrónico"
                  className="flex-1 p-2 bg-gray-800 text-white rounded-l-md border border-gray-600"
                />
                <button className="bg-blue-500 px-4 py-2 rounded-r-md text-white">
                  Suscribir
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                Al suscribirte aceptas nuestras <a href="#" className="text-blue-400">Política</a>
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
            © 2025 Derechos de autor de <a href="#" className="text-blue-400">CoderTech</a>.
          </div>
        </div>
      </footer>





    </div>
  );
}