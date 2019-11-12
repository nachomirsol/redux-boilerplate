import React from "react";
import DeckGL from "deck.gl";
import { StaticMap } from "react-map-gl";
import { GeoJsonLayer } from "@deck.gl/layers";
import data from '../../mockData/geojsonMunicipios.json';
import "./map.scss";

const Map = () => {
    const layers = [
        new GeoJsonLayer({
            id: `geojson-layer`,
            data,
            pickable: true,
            stroked: false,
            filled: true,
            extruded: true,
            lineWidthScale: 20,
            lineWidthMinPixels: 2,
            getFillColor: [220, 60, 80, 50],
            getLineColor: [160, 160, 180],
            getRadius: 100,
            getLineWidth: 1,
            getElevation: 30,
            onHover: ({ object, x, y }) => {
                /* const tooltip = object.properties.name || object.properties.station;
                Update tooltip
                    http://deck.gl/#/documentation/developer-guide/adding-interactivity?section=example-display-a-tooltip-for-hovered-object
                */
            }
        })
    ]
    return (
        <div className="map map__map-wrapper">
            <DeckGL
                initialViewState={{
                    longitude: -0.2,
                    latitude: 38.98,
                    zoom: 12
                }}
                controller={true}
                layers={[layers]} // layer here
            >
                <StaticMap
                    mapStyle="mapbox://styles/mapbox/light-v10"
                    mapboxApiAccessToken="pk.eyJ1IjoiY2FyY2FyYmUiLCJhIjoiY2psbnB6NGRyMWdxOTNrbmpkeGhyZXlwbiJ9.dNyXXZ3bvAkE9S9Zm5Z8wA"
                />
            </DeckGL>
        </div>
    );
};

export default Map;
