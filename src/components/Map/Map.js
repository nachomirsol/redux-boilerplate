import React from "react";
/**Libraries */
import { StaticMap } from "react-map-gl";
import { GeoJsonLayer, IconLayer } from "@deck.gl/layers";
import DeckGL from "deck.gl";
/**Assets */
import markers from "assets/images/markers.png";
/**Styles */
import "./map.scss";

const Map = ({ dataArea, dataIcon }) => {
  const ICON_MAPPING = {
    bomba: { x: 0, y: 0, width: 150, height: 150, mask: true },
    deposito: { x: 0, y: 150, width: 150, height: 150, mask: true }
  };

  const iconColorRender = iconState => {
    switch (iconState) {
      case "critical":
        return [227, 114, 114];
      case "warning":
        return [233, 196, 23];
      default:
        return [146, 192, 137];
    }
  };
  const colorRender = numberOfAlarms => {
    if (numberOfAlarms < 3) {
      return [137, 191, 132, 50];
    } else if (numberOfAlarms < 10) {
      return [233, 196, 39, 50];
    } else {
      return [220, 60, 80, 50];
    }
  };
  const layers = [
    new IconLayer({
      id: "icon-layer",
      data: dataIcon,
      pickable: true,
      // iconAtlas and iconMapping are required
      // getIcon: return a string
      iconAtlas: markers,
      iconMapping: ICON_MAPPING,
      getIcon: d => d.assetName,
      sizeScale: 10,
      getPosition: d => d.coordinates,
      getSize: d => 5,
      getColor: d => iconColorRender(d.state),
      onHover: ({ object, x, y }) => {
        // const tooltip = `${object.name}\n${object.address}`;
        /* Update tooltip
                   http://deck.gl/#/documentation/developer-guide/adding-interactivity?section=example-display-a-tooltip-for-hovered-object
                */
      }
    }),
    new GeoJsonLayer({
      id: `geojson-layer`,
      data: dataArea,
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
  ];

  return (
    <div className="map map__map-wrapper">
      <DeckGL
        initialViewState={{
          longitude: -0.37739,
          latitude: 39.46975,
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
