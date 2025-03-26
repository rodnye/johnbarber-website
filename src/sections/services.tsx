import { Element } from "react-scroll";
import { decors } from "../assets";
import { Card } from "../components/Card";
import { TitleSection } from "../components/Typography";

const servicesList = [
  {
    title: "Corte de cabello",
    price: 350,
    info: [
      "Precio competitivo",
      "Todo tipo de sombras",
      "Diseño de cejas y barba",
      "Diseño freestyle",
    ],
    icon: decors[1],
  },
  {
    title: "Cejas",
    price: 150,
    info: ["Cejas parejas", "Diseño"],
    icon: decors[4],
  },
  {
    title: "Barba",
    price: 150,
    info: ["Razurado completo", "Diseño"],
    icon: decors[5],
  },
  {
    title: "Decoloración completa",
    price: 800,
    info: [
      "Se cobra por onza",
      "Prepara tu cabello para algún tinte",
      "Cabello completamente blanco",
    ],
    icon: decors[7],
  },
  {
    title: "Decoloración con diseño, mechas",
    price: 600,
    info: ["Se cobra por onza"],
    icon: decors[7],
  },
  {
    title: "Aplicación de color Nacional",
    price: 250,
    info: ["Se cobra por onza", "Producto nacional"],
    icon: decors[2],
  },
  {
    title: "Aplicación de color Importado",
    price: 700,
    info: ["Se cobra por onza", "Producto Importado"],
    icon: decors[2],
  },
];

export function ServicesSection() {
  return (
    <Element name="services-section">
      <div className="mt-16 flex flex-col items-center">
        <TitleSection content="Servicios" icon={decors[0]} />
        <div className="flex flex-wrap justify-center">
          {servicesList.map((item, i) => (
            <Card key={i} title={item.title} icon={item.icon}>
              {item.price && (
                <p className="text-2xl font-bold">
                  <span className="text-5xl"> {item.price} </span> .00 CUP
                </p>
              )}
              <ul className="flex flex-col items-start self-start">
                {item.info.map((info, i) => (
                  <li key={i} className="flex items-center">
                    <div className="m-2 rounded-full bg-green-600 p-1">
                      <svg
                        className="w-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span> {info} </span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </Element>
  );
}
