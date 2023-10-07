import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const Locations = ({}) => {
  let { name } = useParams();
  const [data, setData] = useState();
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const getLocationData = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/api/all/`);
      setLocation(name.replaceAll("-", " "));
      setData(data.filter((ele) => ele.location === name.replaceAll("-", " ")));
    } catch (err) {
      console.log("404");
      navigate("/404");
    }
  };

  useEffect(() => {
    getLocationData();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 class="text-1xl font-bold text-gray-800 dark:text-white lg:text-4xl mb-5">
        Games in {location}
      </h1>
      <div className="grid grid-cols-3 gap-5 items-stretch ">
        {data &&
          data.map(({ id, title, logo, date, price, location }) => {
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

export default Locations;
