import React from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { googleApiKey } from "../utilities/URL";

export default function CheckoutMap() {
  const containerStyle = {
    marginTop:"64px",
    width: "100%",
    height: "320px",
    borderRadius: "10px",
  };


  const center = {
    lat: 31.582045, 
    lng: 74.329376, 
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleApiKey,
    libraries: ["places", "drawing"],
  });

  if (!isLoaded) return <p>Loading map...</p>;

  return (
    <GoogleMap
      zoom={14}
      center={center}
      mapContainerStyle={containerStyle}
      options={{ disableDefaultUI: true }}
    >
      <MarkerF position={center} />
    </GoogleMap>
  );
}
