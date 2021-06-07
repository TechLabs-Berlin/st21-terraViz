import React, { useState, useRef, useEffect } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "./Map.css";


// Insert your access token here
mapboxgl.accessToken = process.env.REACT_APP_API_KEY;

const Map = () => {
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);


  useEffect(() => {
    // Prevent the map from rerendering every single time
    if (map !== null) {
      return;
    }

    // Initialize base map with basic settings, render it into mapContainer
    const defaultMap = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v10",
      center: [17, 30],
      zoom: 1,
    });

    //Fetch .json file and load the data as circle layer
    defaultMap.on("load", function () {
      fetch("mock.json")
        .then((res) => res.json())
        .then((data) => {
          defaultMap.addSource("point", {
            type: "geojson",
            data: data,
          });
          defaultMap.addLayer({
            id: "circles",
            source: "point",
            type: "circle",
            paint: {
              "circle-color": "#E86A62",
              "circle-stroke-color": "pink",
              "circle-opacity": 0.8,
              "circle-radius": 17,
              "circle-stroke-width": 2,
            },
            layout: {},
          });
        })
        .catch((err) => console.error(err));
    });

    setMap(defaultMap);
  }, [map]);

  // Making our map responsive to toggling the sidebar
  useEffect(() => {
    if (map !== null) {
      map.resize();
    }
  }, [map]);

  return (
    <div>
      <div ref={mapContainer} className="map-container">
      </div>
    </div>
  );
};

export default Map;
