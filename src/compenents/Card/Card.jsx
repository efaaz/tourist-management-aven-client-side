import React, { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Card(props) {
  const {
    _id,
    totaVisitorsPerYear,
    country_Name,
    tourists_spot_name,
    average_cost,
    image,
    travel_time,
    location,
  } = props.data;

  return (
    <>
      <div className="mb-6" data-aos="zoom-in">
        <NavLink to={`/viewDetails/${_id}`}>
          <div className="card card-compact w-96 h-[100%] bg-base-100 shadow-xl mx-auto">
            <figure>
              <img
                src={image} // Corrected image source
                alt="Estate"
              />
            </figure>
            <div className="card-body">
              <div className="flex justify-between">
                <div className="flex gap-1 items-center font-semibold">
                  <FaLocationDot />
                  <p className="">{location}</p>
                </div>
                <div className="">
                  
                </div>
              </div>
              <h2 className="card-title">{tourists_spot_name}</h2>
              <p className="font-semibold text-base">Country: {country_Name}</p>
              <p className="font-semibold text-base">Travle time: {travel_time}</p>
              <p className="font-semibold text-base">Visitors: {totaVisitorsPerYear} per year</p>
              <p className="font-bold text-xl">Avarage cost: ${average_cost}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary w-full">
                  View Details{" "}
                </button>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
}

export default Card;