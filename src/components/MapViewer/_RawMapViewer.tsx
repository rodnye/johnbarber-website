import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// fix for icons :(
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

interface Location {
  lat: number;
  lng: number;
}

interface MapViewerProps {
  location: Location;
  zoom?: number;
  height?: string;
  width?: string;
  markerPopup?: string;
}

/**
 * WARNING!!!! Not use this component directly, use the lazy loaded Map instead.
 * @see {@link ./MapViewer.tsx}
 */
export function RawMapViewer({
  location,
  zoom = 13,
  height = "400px",
  width = "100%",
  markerPopup = "Ubicación seleccionada",
}: MapViewerProps) {
  return (
    <div style={{ height, width }}>
      <MapContainer
        center={[location.lat, location.lng]}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
        zoomControl={true}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[location.lat, location.lng]}>
          <Popup>{markerPopup}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
