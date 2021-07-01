import React, { useState, useRef, useEffect } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "./Map.css";

// Constants
mapboxgl.accessToken =
  "pk.eyJ1IjoidGVycmF2aXoiLCJhIjoiY2twbW9ldG5vMGsyeDJ3cXF2eTBtNmozaSJ9.cuNhWme-R-RK02H3qWxHWw";

const COLOR_TEMP = {
  negativeBigger: -0.12,
  negativeBig: -0.1,
  negative: -0.05,
  base: 0,
  positive: 0.05,
  positiveBig: 0.1,
  positiveBigger: 0.12,
};

const COLOR_HEX = {
  negativeBigger: "#146B93",
  negativeBig: "#25A5E1",
  negative: "#72C5EC",
  base: "#F5E9C8",
  positive: "#FC7F79",
  positiveBig: "#FA382C",
  positiveBigger: "#B90E05",
};

const RADIUS_TEMP = {
  low: -0.1,
  base: 0,
  high: 0.1,
};

const RADIUS_SIZE = {
  base: 3,
  change: 8,
};

// Main component
const Map = (props) => {
  const { currentYear } = props;
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
      center: [-50, 25],
      zoom: 1,
    });

    // Disable zooming on the map
    defaultMap.scrollZoom.disable();

    //Fetch .json file and load the data as circle layer
    defaultMap.on("load", function () {
      fetch("ByCityDataset.json")
        .then((res) => res.json())
        .then((data) => {
          defaultMap.addSource("point", {
            type: "geojson",
            data: data,
          });

          defaultMap.addLayer({
            id: "country-circles",
            source: "point",
            type: "circle",
            paint: {
              "circle-color": [
                "interpolate",
                ["linear"],
                ["get", "temp"],
                COLOR_TEMP.negativeBig,
                COLOR_HEX.negativeBig,
                COLOR_TEMP.negative,
                COLOR_HEX.negative,
                COLOR_TEMP.base,
                COLOR_HEX.base,
                COLOR_TEMP.positive,
                COLOR_HEX.positive,
                COLOR_TEMP.positiveBig,
                COLOR_HEX.positiveBig,
              ],
              "circle-opacity": 0.8,
              "circle-radius": [
                "interpolate",
                ["linear"],
                ["get", "temp"],
                RADIUS_TEMP.low,
                RADIUS_SIZE.change,
                RADIUS_TEMP.base,
                RADIUS_SIZE.base,
                RADIUS_TEMP.high,
                RADIUS_SIZE.change,
              ],
            },
            layout: {},
          });

          // Filter the data points and show only those where the "year" property matches
          // with the currentYear of the TimeSlider component.
          defaultMap.setFilter("country-circles", [
            "==",
            ["get", "year"],
            currentYear,
          ]);
        })

        .catch((err) => console.error(err));

      setMap(defaultMap);
    });
  }, [map, currentYear]);

  // This useEffect() takes care of the data filtering after the initial load has happened
  useEffect(() => {
    if (map === null) {
      return;
    }

    map.setFilter("country-circles", ["==", ["get", "year"], currentYear]);
  }, [currentYear, map]);

  return (
    <div>
      <div ref={mapContainer} className="map-container"></div>
    </div>
  );
};

export default Map;
