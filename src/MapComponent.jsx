import React from 'react';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import mapPoints from './data/sgsites.json';

const MapComponent = () => {
    const position = [1.3521, 103.8198]; // Latitude, Longitude
    const [geoData, setGeoData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const geojsonMarkerOptions = {
        radius: 5,
        fillColor: "#78290f",
        color: "#ffecd1",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };
    const onEachFeature = (feature, layer) => {
        if (feature.properties && feature.properties.name) {
        layer.bindPopup(`<strong>${feature.properties.name}</strong><br/>${feature.properties.address}`);
    }
    };

    const pointToLayer = (feature, latlng) => {
        return L.circleMarker(latlng, geojsonMarkerOptions)
    };

    return (
    <MapContainer center={position} zoom={10} scrollWheelZoom={true}>
        <TileLayer
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        />
        <GeoJSON 
        key={mapPoints ? "loaded-map" : "empty-map"}
        data={mapPoints} 
        pointToLayer={pointToLayer} 
        onEachFeature={onEachFeature} />
    </MapContainer>
    );
};

export default MapComponent;
