import { useState, useRef } from "react";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
import Section from "./Section/Index";

import "../Style/style.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const [adress, setAdress] = useState(null);

  //On actualise la localisation
  const selectAdress = (adress) => {
    geocodeByAddress(adress.label)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        setAdress({lat:lat,lng:lng});
      })
      .catch((error) => console.error(error));
  };

  return (
    <div id="mainDiv">
      <header>
        <h1>Find fuel</h1>
        <GooglePlacesAutocomplete
          apiKey={"AIzaSyCAjZncD6io9xEKzazHtU-WmH-_UIkTOn0"}
          apiOptions={{ language: "fr", region: "fr" }}
          selectProps={{
            adress,
            onChange: selectAdress,
          }}
        />
      </header>
      <Section coord={adress} 
      style="flex:1"/>
    </div>
  );
}
