import { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import G6 from "@antv/g6";

let graph = null;
// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ data = {} }) {
  const ref = useRef(null);

  useEffect(() => {
    console.log(graph, "test");
    if (!graph) {
      graph = setGraph(ref);
      graph.data(data);
      graph.render();
    }
  }, []);

  useEffect(() => {
      console.log("test de force 2",data)
    if (graph) {
      graph.changeData(data);
    }
  }, [data]);

  return <div id="grapContent" ref={ref}></div>;
}

const setGraph = (ref) => {
  return new G6.Graph({
    container: ReactDOM.findDOMNode(ref.current),
    width: ref.current.offsetWidth,
    height: ref.current.offsetHeight,
    fitView: true,
    fitViewPadding: [20, 40, 50, 20],
    defaultNode: {
      type: "node",
      labelCfg: {
        style: {
          fill: "#000000A6",
          fontSize: 10,
        },
      },
      style: {
        stroke: "#72CC4A",
        width: 150,
        textAlign: "center"
      },
    },
  });
};
