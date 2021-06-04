import React, { useState, useRef, useEffect } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "./Map.css";
import Sidebar from "./Sidebar";
import "./Sidebar.css";


// Insert your access token here
mapboxgl.accessToken = process.env.REACT_APP_API_KEY;

const Map = () => {
  const mapContainer = useRef(null);
  const [sidebar, setSidebar] = useState(false);
  const [map, setMap] = useState(null);
  const onToggleSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    // Prevent the map from rerendering every single time
    if (map !== null) {
      return;
    }

    // Initialize base map with basic settings, render it into mapContainer
    const defaultMap = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [17, 30],
      zoom: 1,
    });

    //Fetch .json file and load the data as circle layer
    defaultMap.on('load', function() {
      fetch('mock.json')
      .then(res => res.json())
      .then(data => {
        defaultMap.addSource('point', {
          type : 'geojson',
          data: data
        });
        defaultMap.addLayer({
          id: "circles",
          source: "point",
          type: "circle",
          paint: {
            "circle-color": "purple",
          },
          layout: {},
        });
      })
      .catch(err => console.error(err));
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
    <div className="wrapper">
      <Sidebar onToggleSidebar={onToggleSidebar} sidebar={sidebar} />
      <div ref={mapContainer} className="map-container"></div>
    </div>
  );
};

export default Map;
