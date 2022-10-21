import "../../Style/item.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ station, setInfo }) {
  //console.log(station);
  const onClick = () => {
    setInfo(station);
  };

  return (
    <div className="itemStation" onClick={onClick}>
      <h3>{`${station.fields.name ? station.fields.name+"-":""} ${station.fields.city}`}</h3>
      <p>{`${station.fields.address}`}</p>
    </div>
  );
}
