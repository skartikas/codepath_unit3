import React from "react";
import moment from "moment";

const currentDate = moment();

const Card = ({ url, title, location, date, price }) => {
  const parsedDate = moment(date, "DD/MM/YYYY").format("MMM D, YYYY");

  return (
    <div>
      <div
        className="animated fadeIn faster left-0 top-0 flex justify-center items-center outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
        id="modal-id"
      >
        <div className=" bg-black opacity-80 "></div>
        <div className="items-stretch flex flex-col items-center justify-center ">
          <div className="container">
            <div className="border border-double border-4 border-sky-500 max-w-md bg-gray-900 shadow-lg rounded-xl p-6">
              <div className="flex flex-col ">
                <div className="">
                  <div className="relative h-62 mb-3">
                    <img
                      //   src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80"
                      src={url}
                      alt="Just a flower"
                      className=" object-fill  rounded-2xl"
                    ></img>
                  </div>
                  <div className="flex-auto justify-evenly">
                    <div className="flex flex-wrap ">
                      <div className="flex-none text-sm flex items-center text-gray-600">
                        <span className="text-gray-400 whitespace-nowrap mr-3">
                          From ${price}
                        </span>
                        <span className="mr-2 text-gray-400">{location}</span>
                      </div>
                      <div className="flex items-center w-full justify-between min-w-0 ">
                        <h2 className="text-lg mr-auto text-gray-200  ">
                          {title}
                        </h2>
                      </div>
                    </div>
                    <div className="text-xl text-white font-semibold mt-1">
                      {parsedDate}
                    </div>
                    In {moment(date, "DD/MM/YYYY").diff(currentDate, "days")}{" "}
                    days{" and "}
                    {moment(date, "DD/MM/YYYY").diff(currentDate, "hours") -
                      moment(date, "DD/MM/YYYY").diff(currentDate, "days") *
                        24}{" "}
                    hours
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
