import Head from 'next/head';
import Contador from '../Components/Contador';
import Image from 'next/image';
import Logo from '../public/assets/premiumdrop.svg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Clase Online - Emprende en los Negocios Digitales</title>
      </Head>

      <div className="text-center p-3 bg-blue-500 text-white text-xl lg:text-3xl">
        <Contador />
      </div>

      <div className="container mx-auto flex justify-center pt-5">
        <Image width="250" src={Logo} />
      </div>

      <div className="container mx-auto p-5 lg:p-10">
        <main className="font-semibold text-xl lg:text-3xl text-center ">
          <p className="mb-4">¡Aprende a vender en línea con dropshipping!</p>
          <p>
            Generar ingresos a través de una comisión por cada venta, y tendrás
            la libertad de establecer los precios de los productos.
          </p>

          {/* 
         <h1 className="p-4">
            CREA UN EMPRENDIMIENTO VIRTUAL Y EMPIEZA A VENDER PRODUCTOS
            DIGITALES
          </h1>

          <p className="p-4">MONETIZA TU TALENTO Y GANA EL 100% DE TU CURSO</p>

          <p className="">
            O AFILIATE AL PRODUCTO DIGITAL DE UN TERCERO Y GANA UNA COMISION
            ENTRE EL 60 Y 80%
          </p>
         */}
        </main>
      </div>
      <div className="container mx-auto bg-blue-500 p-10">
        <h2>
          CREA UN EMPRENDIMIENTO VIRTUAL Y EMPIEZA A VENDER PRODUCTOS DIGITALES
        </h2>
        <p>Te enseñaremos a encontrar y vender productos premium.</p>
      </div>
      <div className="container mx-auto p-10">
        <h2></h2>
        <p>Aprende a brindar atención al cliente de nivel premium.</p>
      </div>
      <div className="container mx-auto bg-black text-white p-20">
        <h2>Productos Exclusivos</h2>
        <p>Te enseñaremos a encontrar y vender productos premium.</p>
      </div>

      <footer className="flex items-center justify-center h-10 bg-gray-800 text-white">
        <p>© {new Date().getFullYear()} Dropshipping Premium</p>
      </footer>
    </div>
  );
}
