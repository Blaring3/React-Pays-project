import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const [selectedRadios, setRadios] = useState([]);
  const radios = ["Africa", "Europe", "America", "Oceania"];
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
      <h1>Countries</h1>
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        <span>{rangeValue}</span>

        {radios.map((continent) => (
          <li>
            <input
              type="radio"
              name=""
              id={continent}
              onChange={(e) => setRadios(e.target.id)}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      {selectedRadios && <button onClick={()=> setRadios("")}> Annulere la recherche</button>}
      <ul>
        {data
          .filter((country) => country.continents[0].includes(selectedRadios))
          .slice(0, rangeValue)
          .map((country, index) => (
            <Card key={index} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
