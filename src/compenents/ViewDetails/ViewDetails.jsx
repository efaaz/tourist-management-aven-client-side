import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

function ViewDetails() {
  const data = useLoaderData();
  console.log(data);
  const {
    _id,
    totaVisitorsPerYear,
    country_name,
    tourists_spot_name,
    average_cost,
    image,
    travel_time,
    location,
  } = data;

  return (
    <>
      <div className="hero min-h-screen bg-base-200 border">
        <div className="hero-content flex-col lg:flex-row">
          <img
          src={image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <div className="flex justify-between">
              <div className="flex gap-1 items-center font-semibold lg:py-0 py-4">
                <FaLocationDot className="text-sm" />
                <p className="">Location: {location}</p>
              </div>
              <div className=""></div>
            </div>
            <h2 className="card-title">{tourists_spot_name}</h2>
            <p className="font-semibold text-base">Country: {country_name}</p>
            <p className="font-semibold text-base">
              Travle time: {travel_time}
            </p>
            <p className="font-semibold text-base">
              Visitors: {totaVisitorsPerYear} per year
            </p>
            <p className="py-2 font-bold text-xl">
              Avarage cost: ${average_cost}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewDetails;
