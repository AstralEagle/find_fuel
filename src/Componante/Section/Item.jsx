import "../../Style/item.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ station, setInfo }) {
  //console.log(station);
  const onClick = () => {
    setInfo(station);
  };

  return (
    <div className="itemStation" onClick={onClick}>
      <h3>{`${station.fields.exploitant} - ${station.fields.commune}`}</h3>
      <p>{`${station.fields.rue}`}</p>
    </div>
  );
}
