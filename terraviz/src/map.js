import React, { useRef, useEffect } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
// Insert your access token here
mapboxgl.accessToken = "";

// Initialize base map with basic settings
const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [17, 30],
      zoom: 1,
    });
  });
  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default Map;
