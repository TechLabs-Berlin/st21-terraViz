import React, { useState, useRef, useEffect } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "./Map.css";

// Insert your access token here
mapboxgl.accessToken = "pk.eyJ1IjoidGVycmF2aXoiLCJhIjoiY2twbW9ldG5vMGsyeDJ3cXF2eTBtNmozaSJ9.cuNhWme-R-RK02H3qWxHWw";

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
      style: "mapbox://styles/terraviz/ckpmos6qm1n9t17m4a1r2j3tj",
      center: [17, 30],
      zoom: 1,
    });

    //Fetch .json file and load the data as circle layer
    defaultMap.on("load", function () {
      fetch("TestSet.json")
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

  return (
    <div>
      <div ref={mapContainer} className="map-container"></div>
    </div>
  );
};

export default Map;
