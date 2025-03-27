
import { useEffect, useRef } from "react";

interface GoogleMapProps {
  address: string;
  height?: string;
}

const GoogleMap = ({ address, height = "400px" }: GoogleMapProps) => {
  const mapRef = useRef<HTMLIFrameElement>(null);

  // Encode the address for the Google Maps URL
  const encodedAddress = encodeURIComponent(address);

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-md" style={{ height }}>
      <iframe
        ref={mapRef}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBtLeOcPDYBxLFYPWf1Lto_s8JZ6x38yfE&q=${encodedAddress}&language=ja`}
        title="Google Maps"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
