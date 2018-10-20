import * as React from "react";
import * as VegaLite from "react-vega-lite";

const spec = {
  $schema: "https://vega.github.io/schema/vega-lite/v2.json",
  width: 700,
  height: 500,
  config: {
    view: {
      stroke: "transparent"
    }
  },
  layer: [
    {
      data: {
        url: "http://localhost:8000/datasets/hk.json",
        format: {
          type: "topojson",
          feature: "districts"
        }
      },
      layer: [
        {
          mark: {
            type: "geoshape",
            stroke: "white",
            strokeWidth: 2
          },
          encoding: {
            color: {
              value: "#eee"
            }
          }
        }
      ]
    }
  ]
};

class Map extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <h1>Hello From Map</h1>
        <VegaLite spec={spec} />
      </div>
    );
  }
}

export default Map;
