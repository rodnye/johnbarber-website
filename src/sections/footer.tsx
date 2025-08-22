import { Link } from "react-scroll";
import { Image } from "@/components/Image";
import textLogoImg from "@/assets/text_inline_logo.svg";
import whatsappIcon from "../assets/whatsapp.png";
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 px-6 py-12 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-4">
        {/* Logo y descripción */}
        <div className="md:col-span-2">
          <div className="mb-4 flex items-center">
            <Image src={textLogoImg} alt="Logo" className="mr-3 h-10" />
          </div>
          <p className="mb-4 text-gray-400">
            Barbería especializada en cortes modernos, tradicionales y servicios
            de cuidado personal.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://wa.me/5356086003?text=Hola%2C%20quiero%20reservar%20un%20turno"
              className="rounded-full bg-green-600 p-2 transition-colors hover:bg-green-700"
            >
              <Image src={whatsappIcon} alt="WhatsApp" className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com/JohnBarber0"
              className="rounded-full bg-blue-600 p-2 transition-colors hover:bg-blue-700"
            >
              <Image src={facebookIcon} alt="Facebook" className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/johnmr_0"
              className="rounded-full bg-pink-600 p-2 transition-colors hover:bg-pink-700"
            >
              <Image src={instagramIcon} alt="Instagram" className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Enlaces Rápidos</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="examples-section"
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-400 transition-colors hover:text-white"
              >
                Cortes
              </Link>
            </li>
            <li>
              <Link
                to="services-section"
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-400 transition-colors hover:text-white"
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                to="contact-section"
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-400 transition-colors hover:text-white"
              >
                Contáctame
              </Link>
            </li>
            <li>
              <Link
                to="map-section"
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-400 transition-colors hover:text-white"
              >
                Ubicación
              </Link>
            </li>
          </ul>
        </div>

        {/* Información de contacto */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Contacto</h4>
          <address className="text-gray-400 not-italic">
            <p className="mb-2">
              Calle 4ta entre Avenida de las Flores y Calle Laureles
            </p>
            <p className="mb-2">Arroyo Naranjo, La Habana, Cuba</p>
            <p className="mb-4">
              <a
                href="tel:+5356086003"
                className="transition-colors hover:text-white"
              >
                +53 56086003
              </a>
            </p>
            <p>Lunes a Sábado: 9:00 AM - 7:00 PM</p>
          </address>
        </div>
      </div>

      {/* Divider y copyright */}
      <div className="mx-auto mt-8 max-w-6xl border-t border-gray-800 pt-8 text-center">
        <p className="text-gray-500">
          &copy; {currentYear} TheBlessed_styles. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
