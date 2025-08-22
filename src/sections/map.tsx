import { Element } from "react-scroll";
import { TitleSection } from "@/components/Typography";
import { decors } from "@/assets";
import { MapViewer } from "@/components/MapViewer";

export function MapSection() {
  const location = { lat: 23.040347, lng: -82.330902 };

  return (
    <Element name="map-section">
      <div className="mt-12 flex flex-col items-center">
        <TitleSection
          content="Nuestra Ubicación"
          icon={decors[6]}
          id="location-map"
        />
        <div className="my-4 text-center">
          <p className="text-lg font-semibold text-gray-700">
            Calle 4ta entre Avenida de las Flores y Calle Laureles, #50A
          </p>
          <p className="text-gray-600">Arroyo Naranjo, La Habana, Cuba</p>
        </div>
        <div className="relative -z-10 m-8 w-full max-w-4xl overflow-hidden rounded-xl shadow-lg">
          <MapViewer location={location} zoom={15} />
        </div>
      </div>
    </Element>
  );
}
