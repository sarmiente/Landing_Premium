import Head from 'next/head';
import Contador from '../Components/Contador';
import Image from 'next/image';
import Logo from '../public/assets/premiumdrop.svg';
import Flecha from '../public/assets/flecha.svg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Clase Online - Emprende en los Negocios Digitales</title>
      </Head>

      <div className="text-center p-3 bg-blue-500 text-white text-xl lg:text-3xl">
        <Contador />
      </div>
      <h1 className="font-semibold text-xl lg:text-3xl text-center">
        Accede al curso
      </h1>
      <div className="container mx-auto flex justify-center pt-5">
        <Image width="250" src={Logo} />
      </div>

      <div className="container mx-auto p-5 lg:p-10">
        <main className="font-semibold text-xl lg:text-3xl text-center ">
          <p className="mb-4">¡Aprende a vender en línea con dropshipping!</p>
          <p>
            Genera ingresos a través de una comisión por cada venta, y ten la
            libertad de establecer los precios de los productos.
          </p>
        </main>
      </div>
      <div className="container mx-auto bg-blue-500 p-10 font-semibold text-xl lg:text-3xl text-center text-white">
        <h2>
          CREA UN EMPRENDIMIENTO VIRTUAL Y EMPIEZA A VENDER PRODUCTOS DIGITALES
        </h2>
        <br />
        <p>En este curso aprenderas a encontrar y vender productos premium.</p>
      </div>

      <div className="container mx-auto p-10 font-semibold text-xl lg:text-3xl text-center">
        <h2>Agrega Productos Exclusivos a tu tienda</h2>
        <p>Te enseñaremos a encontrar y vender productos premium.</p>
      </div>

      <div className="container mx-auto flex justify-center">
        <Image width="250" src={Flecha} />
      </div>

      <div className="container mx-auto bg-black text-white text-center p-20">
        <button className="hover:scale-105 bg-red-500 p-4 rounded-xl" src="">
          ¡SI, QUIERO Acceder Ahora!
        </button>
      </div>
      <div className="container mx-auto flex justify-center p-10">
        <Image width="250" src={Logo} />
      </div>

      <footer className="container mx-auto flex justify-center h-auto bg-gray-800 text-white p-10">
        <p>© {new Date().getFullYear()} Dropshipping Premium</p>
      </footer>
    </div>
  );
}
