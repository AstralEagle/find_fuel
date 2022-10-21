import { useEffect, useState } from "react";

import Graph from "./Graph/Graph";

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ station = null }) {
  const [nodeData, setNode] = useState({});

  useEffect(() => {
    if (station) {
      console.log(station)
      setNode(setData(station.fields));
    }

  }, [station]);

  if (station) {
    return (
      <aside id="asideView">
        <h2>{station.fields.name}</h2>

        <Graph data={nodeData} />
      </aside>
    );
  } else {
    return <aside></aside>;
  }
}

const setData = (data) => {
  let dataReturn = {};
  let nodeData = [];
  nodeData[0] = {
    id: "nameStation",
    x: 520/2,
    y: 30,
    type: "ellipse",
    size: [280, 60],
    label: data.name ? data.name.toUpperCase(): "STATION",
    linkPoint: {
      bottom: true,
    }
  };
  let edgeData = [];

  const fuels = data.fuel.split("/")
  fuels.forEach((fuel,index) => {
    console.log(fuel)
    nodeData.push({
      id : `fuel${index}`,
      x: 0,
      y: 100,
      type: "circle",
      size: 40,
      label: fuel,
      // On définie la prix en euros/litre, possibilité que le prix ne sois pas en euro 
      price: data[`price_${fuel.toLowerCase()}`] ? data[`price_${fuel.toLowerCase()}`]>0.009 ? data[`price_${fuel.toLowerCase()}`] : data[`price_${fuel.toLowerCase()}`]* 1000 : "null"
    });
    edgeData.push({
      source: "nameStation",
      target: `fuel${index}`,
      sourceAnchor: 3,
    })
    console.log(fuel,data[`price_${fuel.toLowerCase()}`])

  })

  dataReturn.nodes = nodeData;
  dataReturn.edges = edgeData;

  console.log("data",dataReturn)

  return dataReturn;
};
