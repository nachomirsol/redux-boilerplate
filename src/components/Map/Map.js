import React from "react";
/**Libraries */
import { StaticMap } from "react-map-gl";
import { GeoJsonLayer } from "@deck.gl/layers";
import DeckGL from "deck.gl";

/**Styles */
import "./map.scss";

const Map = ({ data }) => {

    const colorRender = (numberOfAlarms) => {
        if (numberOfAlarms < 3) {
            return [137, 191, 132, 50];
        } else if (numberOfAlarms < 10) {
            return [233, 196, 39, 50];
        } else {
            return [220, 60, 80, 50];
        }
    }
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
            getFillColor: f => colorRender(f.properties.valueAlarms),
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
                    longitude: -0.3773900,
                    latitude: 39.4697500,
                    zoom: 12
                }}
                controller={true}
                // onViewStateChange={(e) => console.log(e)}
                layers={[layers]} // layer here
            >
                <StaticMap
                    mapStyle="mapbox://styles/mapbox/dark-v10"
                    mapboxApiAccessToken="pk.eyJ1IjoiY2FyY2FyYmUiLCJhIjoiY2psbnB6NGRyMWdxOTNrbmpkeGhyZXlwbiJ9.dNyXXZ3bvAkE9S9Zm5Z8wA"
                />
            </DeckGL>
        </div>
    );
};

export default Map;
