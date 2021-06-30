import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Cards";

const Departements = () => {
  const [data, setData] = useState([]);

  const fetchDataDep = async () => {
    try {
      const response = await axios.get(
        "https://coronavirusapi-france.vercel.app/AllLiveData"
      );
      setData(response.data.allLiveFranceData);
      //console.log(response.data.allLiveFranceData);
    } catch (e) {
      console.log("fetching data failed");
    }
  };

  useEffect(() => {
    fetchDataDep();
  }, []);

  return (
    <div className="countries">
      <ul className="countries-list">
        {data.map((dep) => (
          <Card dep={dep} key={dep.nom} />
        ))}
      </ul>
    </div>
  );
};

export default Departements;
