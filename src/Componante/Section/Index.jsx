import { useState, useEffect } from "react";

import Station from "./Item";
import InfoStation from "./Info";

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ coord = null }) {
  const [stations, setStation] = useState([]);
  const [distance, setDistance] = useState(7);

  const [infoStation, setInfo] = useState(null);

  useEffect(() => {
    if (coord) {
      fetch(
        `https://public.opendatasoft.com/api/records/1.0/search/?dataset=prix_des_carburants_j_7&q=&facet=cp&rows=250&facet=pop&facet=city&facet=automate_24_24&facet=fuel&facet=shortage&facet=update&facet=services&facet=brand&geofilter.distance=
        ${coord.lat}%2C${coord.lng}%2C${distance * 1000}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setStation(data.records);
        })
        .catch((err) => console.error(err));
    } else if (stations.length === 0) {
      fetch(
        "https://public.opendatasoft.com/api/records/1.0/search/?dataset=prix_des_carburants_j_7&q=&facet=cp&rows=250&facet=pop&facet=city&facet=automate_24_24&facet=fuel&facet=shortage&facet=update&facet=services&facet=brand"
        )
        .then((res) => res.json())
        .then((data) => {
          setStation(data.records);
        })
        .catch((err) => console.error(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coord, distance]);
  const onChang = (e) => {
    setDistance(e.target.value);
  };

  return (
    <section>
      <input
        type="range"
        min="2"
        max="15"
        onChange={onChang}
        value={distance}
      />
      <div id="stationContent">
        {stations.map((station, index) => (
          <Station key={station.recordid} station={station} setInfo={setInfo} />
        ))}
      </div>
      <InfoStation station={infoStation} />
    </section>
  );
}
