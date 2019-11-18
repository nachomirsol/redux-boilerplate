import React from "react";
/**Libraries */
import { StaticMap } from "react-map-gl";
import { PathLayer } from "@deck.gl/layers";
import DeckGL from "deck.gl";
/**Styles */
import './MapPage.scss';

// data needed for overlay here
const data = [{
    name: "random-name",
    color: [255, 0, 0],
    path: [[-74.00578, 40.713067],
    [-74.004577, 40.712425],
    [-74.003626, 40.713650],
    [-74.002666, 40.714243],
    [-74.002136, 40.715177],
    [-73.998493, 40.713452],
    [-73.997981, 40.713673],
    [-73.997586, 40.713448],
    [-73.99256, 40.713863]]
}
]
const MapPage = () => {
    // below, add whatever layers you need to overlay on your map
    const layer = [
        new PathLayer({
            id: "path-layer",
            data,
            getWidth: data => 7,
            getColor: data => data.color,
            widthMinPixels: 7
        })
    ]
    return (
        <div className="grid-container">
            <DeckGL
                initialViewState={{
                    longitude: -74.006,
                    latitude: 40.7128,
                    zoom: 12
                }}
                height="50%"
                width="50%"
                controller={true}
                layers={layer} // layer here
            >
                <StaticMap
                    mapStyle="mapbox://styles/mapbox/streets-v11"
                    mapboxApiAccessToken="pk.eyJ1IjoiY2FyY2FyYmUiLCJhIjoiY2psbnB6NGRyMWdxOTNrbmpkeGhyZXlwbiJ9.dNyXXZ3bvAkE9S9Zm5Z8wA"
                />
            </DeckGL>
        </div>
    )
}

export default MapPage;