import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const App = () => {
  const [locations, setLocations] = useState([]);
  const getAllLocations = async () => {
    const { data } = await axios.get("http://localhost:3000/api/locations");
    const temp = [];
    for (const ele of data) {
      temp.push(ele);
    }
    setLocations(temp);
  };
  useEffect(() => {
    getAllLocations();
  }, []);

  return (
    <div className="app flex flex-col items-center">
      <h1 class="text-1xl font-bold text-gray-800 dark:text-white lg:text-4xl mb-5">
        Find games by locations
      </h1>
      <main>
        {locations &&
          locations.map(({ location }) => (
            <a
              href={"/locations/" + location.replaceAll(" ", "-")}
              key={locations}
            >
              <button className="px-4 py-1">{location}</button>
            </a>
          ))}
      </main>
    </div>
  );
};

export default App;
