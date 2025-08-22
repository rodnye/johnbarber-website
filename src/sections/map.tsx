import { Element } from "react-scroll";
import { TitleSection } from "@/components/Typography";
import { decors } from "@/assets";
import { useMediaQuery } from "react-responsive";
import { useEffect, useRef, useState } from "react";

export function MapSection() {
  const isMediumScreen = useMediaQuery({ minWidth: "40rem" });
  const mapContainer = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [marker, setMarker] = useState<any>(null);

  const location = { lat: 23.040347, lng: -82.330902 };
  const zoom = 15;

  useEffect(() => {
    // Cargar Leaflet dinámicamente para evitar problemas con SS
    const loadLeaflet = async () => {
      // @ts-ignore
      if (typeof window !== "undefined" && !window.L) {
        // @ts-ignore
        await import("leaflet/dist/leaflet.css");
        window.L = await import("leaflet");
        const L = window.L;

        // Solucionar problema con iconos en producción
        L.Icon.Default.mergeOptions({
          iconRetinaUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
          iconUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
          shadowUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
        });

        const mapInstance = L.map(mapContainer.current!).setView(
          [location.lat, location.lng],
          zoom,
        );

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(mapInstance);

        const markerInstance = L.marker([location.lat, location.lng])
          .addTo(mapInstance)
          .bindPopup("Nuestra ubicación");

        setMap(mapInstance);
        setMarker(markerInstance);
      }
    };

    loadLeaflet();

    return () => {
      if (map) {
        map.remove();
      }
    };
  });

  return (
    <Element name="map-section">
      <div className="mt-12 flex flex-col items-center">
        <TitleSection
          content="Nuestra Ubicación"
          icon={decors[6]}
          id="location-map"
        />

        <div
          ref={mapContainer}
          style={{
            height: isMediumScreen ? "450px" : "300px",
            width: "100%",
            maxWidth: "4xl",
          }}
          className="mt-6 w-full max-w-4xl overflow-hidden rounded-lg shadow-lg"
        />

        <div className="mt-4 text-center text-gray-600">
          <p className="mt-2 text-sm">
            Mapa proporcionado por
            <a
              href="https://www.openstreetmap.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              OpenStreetMap
            </a>
          </p>
        </div>
      </div>
    </Element>
  );
}
