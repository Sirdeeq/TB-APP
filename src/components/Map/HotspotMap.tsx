import React from 'react';
import Map, { Source, Layer } from 'react-map-gl';
import type { HeatmapLayer } from 'react-map-gl';

const MAPBOX_TOKEN = 'YOUR_MAPBOX_TOKEN'; // Replace with actual token in production

const heatmapLayer: HeatmapLayer = {
  id: 'heatmap',
  type: 'heatmap',
  paint: {
    'heatmap-weight': ['interpolate', ['linear'], ['get', 'cases'], 0, 0, 100, 1],
    'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, 9, 3],
    'heatmap-color': [
      'interpolate',
      ['linear'],
      ['heatmap-density'],
      0, 'rgba(33,102,172,0)',
      0.2, 'rgb(103,169,207)',
      0.4, 'rgb(209,229,240)',
      0.6, 'rgb(253,219,199)',
      0.8, 'rgb(239,138,98)',
      1, 'rgb(178,24,43)'
    ],
    'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 0, 2, 9, 20],
    'heatmap-opacity': 0.8
  }
};

export function HotspotMap() {
  return (
    <div className="h-[500px] w-full rounded-lg overflow-hidden">
      <Map
        initialViewState={{
          latitude: 0,
          longitude: 0,
          zoom: 2
        }}
        mapStyle="mapbox://styles/mapbox/dark-v10"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Source
          id="tb-cases"
          type="geojson"
          data={{
            type: 'FeatureCollection',
            features: [] // Populate with actual TB case data
          }}
        >
          <Layer {...heatmapLayer} />
        </Source>
      </Map>
    </div>
  );
}