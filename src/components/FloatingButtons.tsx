"use client";

import { doctor } from "@/data/doctor";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { trackEvent } from "@/lib/analytics";

const FloatingButtons = () => {
  const cleanWhatsapp = doctor.whatsapp.replace(/\D/g, "");
  const whatsappLink = `https://wa.me/${cleanWhatsapp}`;
  const phoneLink = `tel:${doctor.phone}`;

  const buttonBaseClass =
    "w-[50px] h-[50px] rounded-full text-white flex justify-center items-center shadow-lg hover:scale-110 transition-transform duration-300 relative z-50";
  const pulseClass =
    "absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping -z-10";

  return (
    <div className="fixed right-5 bottom-5 flex flex-col gap-4 z-50">
      {/* Botón WhatsApp */}
      <a
        target="_blank"
        href={whatsappLink}
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        className={`${buttonBaseClass} bg-[#25D366]`}
        onClick={() => trackEvent("clic_whatsapp", { source: "floating" })}
      >
        <span className={`${pulseClass} bg-[#25D366]`}></span>
        <FaWhatsapp size={28} />
      </a>

      {/* Botón Teléfono */}
      <a
        href={phoneLink}
        aria-label="Llamar al doctor"
        className={`${buttonBaseClass} bg-primary text-primary-foreground`}
        onClick={() => trackEvent("clic_llamar", { source: "floating" })}
      >
        <span className={`${pulseClass} bg-primary`}></span>
        <FaPhone size={20} />
      </a>
    </div>
  );
};

export default FloatingButtons;
