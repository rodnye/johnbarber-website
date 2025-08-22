import dynamic from "next/dynamic";
/**
 * Lazy load the MapViewer component to prevent SSR issues with Leaflet :(
 *
 * @see https://stackoverflow.com/questions/77978480/nextjs-with-react-leaflet-ssr-webpack-window-not-defined-icon-not-found
 */
export const MapViewer = dynamic(
  async () =>
    (await import("@/components/MapViewer/_RawMapViewer")).RawMapViewer,
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);
