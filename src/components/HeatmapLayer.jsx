import React from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.heat';

const HeatmapLayer = ({ points, radius, blur, maxZoom, gradient }) => {
  const map = useMap();

  React.useEffect(() => {
    if (!map) return;

    const heat = L.heatLayer(points, {
      radius,
      blur,
      maxZoom,
      gradient
    }).addTo(map);

    return () => {
      map.removeLayer(heat);
    };
  }, [map, points, radius, blur, maxZoom, gradient]);

  return null;
};

export default HeatmapLayer;