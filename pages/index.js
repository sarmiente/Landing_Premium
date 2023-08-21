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

      <div className="text-center p-3 bg-blue-500 text-white text-xl lg:text-3xl mb-5">
        <Contador />
      </div>
      <h1 className="font-semibold text-xl lg:text-3xl text-center text-red-500">
        Accede al curso ahora
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

      <div className="container mx-auto bg-blue-500 text-center p-16">
        <a
          href="https://pay.hotmart.com/F37843021Y"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 rounded-xl font-bold bg-black text-white p-3 rounded-md mt-4 inline-block"
        >
          ¡SI, QUIERO Acceder Ahora!
        </a>
      </div>

      <div className="container mx-auto mt-10 font-semibold text-xl lg:text-3xl text-center p-10">
        <h2>
          En el curso Premium Dropshipping | Tiendas de Ropa con Inventario Cero
        </h2>
        <br />
        <p>
          Te guiare en el proceso de creación de una página web para vender ropa
          con tu propia marca y diseños.
        </p>
      </div>

      <div className="container mx-auto flex justify-center p-10">
        <Image width="250" src={Logo} />
      </div>

      <footer className="container mx-auto flex justify-center h-auto bg-gray-800 text-white p-10">
        <p> Dropshipping Premium © {new Date().getFullYear()} </p>
      </footer>
    </div>
  );
}
