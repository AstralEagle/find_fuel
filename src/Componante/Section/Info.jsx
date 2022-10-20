import { useEffect, useState } from "react";

import Graph from "./Graph/Graph";

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ station = null }) {
  const [nodeData, setNode] = useState({});

  useEffect(() => {
    if (station) {
      setNode(setData(station));
    }

  }, [station]);

  if (station) {
    return (
      <aside>
        <h2>{station.fields.exploitant}</h2>
        <Graph data={nodeData} />
      </aside>
    );
  } else {
    return <></>;
  }
}

const setData = (data) => {
  let dataReturn = {};
  let nodeData = [];
  nodeData[0] = {
    id: "nameStation",
    x: 210,
    y: 30,
    type: "rect",
    size: [20, 40],
    label: data.fields.exploitant,
  };

  dataReturn.nodes = nodeData;
  console.log("lol",dataReturn);

  return dataReturn;
};
