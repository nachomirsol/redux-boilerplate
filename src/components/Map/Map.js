import React from "react";
import DeckGL from "deck.gl";
import { StaticMap } from "react-map-gl";
import { PolygonLayer } from "@deck.gl/layers";
import { data } from './data';
import "./map.scss";

const Map = () => {
    const layer = [
        new PolygonLayer({
            id: "polygon-layer",
            data,
            pickable: true,
            stroked: true,
            filled: true,
            wireframe: true,
            lineWidthMinPixels: 1,
            getPolygon: d => d.contour,
            getElevation: d => d.population / d.area / 10,
            getFillColor: d => [d.population / d.area / 60, 140, 0, 100],
            getLineColor: [80, 80, 80],
            getLineWidth: 1,
            onHover: () => {
                //   const tooltip = `${object.zipcode}\nPopulation: ${object.population}`;
                /* Update tooltip
                   http://deck.gl/#/documentation/developer-guide/adding-interactivity?section=example-display-a-tooltip-for-hovered-object
                */
            }
        })
    ];
    return (
        <div className="map-wrapper">
            <DeckGL
                initialViewState={{
                    longitude: -122.4011597,
                    latitude: 37.7820243,
                    zoom: 10
                }}
                controller={true}
                layers={layer} // layer here
            >
                <StaticMap
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    mapboxApiAccessToken="pk.eyJ1IjoiY2FyY2FyYmUiLCJhIjoiY2psbnB6NGRyMWdxOTNrbmpkeGhyZXlwbiJ9.dNyXXZ3bvAkE9S9Zm5Z8wA"
                />
            </DeckGL>
        </div>
    );
};

export default Map;
