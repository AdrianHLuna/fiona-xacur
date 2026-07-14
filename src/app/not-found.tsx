import Link from "next/link";
import { FaHeartBroken } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <FaHeartBroken className="text-8xl text-slate-200 mb-8" />
      <h1 className="text-5xl font-black text-slate-900 mb-4">404 - Página no encontrada</h1>
      <p className="text-xl text-slate-600 mb-8 max-w-lg">
        Lo sentimos, la página que buscas no existe o fue movida a otra dirección.
      </p>
      <Link href="/" className="bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition shadow-xl">
        Regresar al Inicio
      </Link>
    </div>
  );
}
