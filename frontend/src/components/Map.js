import React, { useState, useRef, useEffect } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "./Map.css";

// Constants
mapboxgl.accessToken =
  "pk.eyJ1IjoidGVycmF2aXoiLCJhIjoiY2twbW9ldG5vMGsyeDJ3cXF2eTBtNmozaSJ9.cuNhWme-R-RK02H3qWxHWw";

const COLOR_TEMP = {
  negativeBiggest: -0.075,
  negativeBigger: -0.05,
  negativeBig: -0.025,
  negative: -0.01,
  base: 0,
  positive: 0.01,
  positiveBig: 0.025,
  positiveBigger: 0.05,
  positiveBiggest: 0.075,
};

const COLOR_HEX = {
  negativeBiggest: "#146B93",
  negativeBigger: "#25A5E1",
  negativeBig: "#72C5EC",
  negative: "#A6DAF3",
  base: "#FFF6F5",
  positive: "#FDACA8",
  positiveBig: "#FC7F79",
  positiveBigger: "#FA382C",
  positiveBiggest: "#B90E05",
};

const RADIUS_TEMP = {
  low: -0.075,
  base: 0,
  high: 0.075,
};

const RADIUS_SIZE = {
  base: 3,
  change: 6,
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
      fetch("ByCityDataset_Sliced.json")
        .then((res) => res.json())
        .then((data) => {
          defaultMap.addSource("point", {
            type: "geojson",
            data: data,
            buffer: 0,
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
                COLOR_TEMP.negativeBiggest,
                COLOR_HEX.negativeBiggest,
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
                COLOR_TEMP.positiveBiggest,
                COLOR_HEX.positiveBiggest,
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
