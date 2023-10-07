import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Games = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [locations, setLocations] = useState([]);
  const [filter, setFilter] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    if (e.target.value === "all") {
      setFilter(data);
      return;
    }
    setFilter(data.filter((game) => game.location === e.target.value));
  };

  const getGames = async () => {
    const { data } = await axios.get("http://localhost:3000/api/all");
    setData(data);
    setFilter(data);
    const res = await axios.get("http://localhost:3000/api/locations");
    const temp = [];
    for (const obj of res.data) {
      temp.push(obj.location);
    }
    setLocations(temp);
  };
  useEffect(() => {
    getGames();
  }, []);
  return (
    <div>
      <div className="flex flex-col items-center mx-10">
        <h1 class="text-1xl font-bold text-gray-800 dark:text-white lg:text-4xl mb-5">
          Search
        </h1>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-10 mx-10"
          placeholder="Select location"
          onChange={handleChange}
          value={searchInput}
        >
          <option value="all">All Locations</option>
          {locations &&
            locations.map((loc) => {
              return <option value={loc}>{loc}</option>;
            })}
        </select>
      </div>

      <div className="grid grid-cols-3 gap-5 items-stretch ">
        {filter &&
          filter.map(({ id, title, logo, date, price, location }) => {
            return (
              <Card
                key={id}
                title={title}
                url={logo}
                price={price}
                location={location}
                date={date}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Games;
