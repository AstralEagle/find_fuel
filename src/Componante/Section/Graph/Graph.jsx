import { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import G6 from "@antv/g6";

let graph = null;
// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ data = {} }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!graph) {
      graph = setGraph(ref, data);
      graph.data(data);
      graph.render();
      window.onresize = changeSize
    } else {
      graph.read(data, false);
    }
  }, [data]);
  const changeSize = () => {
    console.log("Size : ",ref.current.offsetWidth,ref.current.offsetHeight)
    graph.changeSize(ref.current.offsetWidth-10,ref.current.offsetHeight-10);
    graph.fitView();
  }


  return <div id="grapContent" ref={ref} onResize={changeSize}></div>;
}

const setGraph = (ref, data) => {
  return new G6.Graph({
    container: ReactDOM.findDOMNode(ref.current),
    width: ref.current.offsetWidth-10,
    height: ref.current.offsetHeight-10,
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
        textAlign: "center",
      },
    },
    layout: {
      type: "dagre",
      ranksep: 40
    },
    modes:{
      default: ['drag-canvas','zoom-canvas']
    }

  });
};
