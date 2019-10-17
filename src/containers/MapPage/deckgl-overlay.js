import React from 'react';
import DeckGL from '@deck.gl/react';
import { PathLayer } from "@deck.gl/layers";

const DeckGLOverlay = ({ viewport, data }) => {


    /**
     * Data format:
     * Valid GeoJSON object
     */
    const layer = [
        new PathLayer({
            id: "path-layer",
            data,
            getWidth: data => 7,
            getColor: data => data.color,
            widthMinPixels: 7
        })
    ]

    return (<DeckGL {...viewport} layers={layer} />);
};

export default DeckGLOverlay;