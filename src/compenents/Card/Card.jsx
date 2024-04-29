import React, { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoIosTime } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Card(props) {
  const {
    _id,
    totaVisitorsPerYear,
    country_name,
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
                  <p className="font-bold">{location}</p>
                </div>
                <div>
                <p className="font-bold text-base text-yellow-500">{country_name}</p>
                </div>
              </div>
              <h2 className="card-title font-bold">{tourists_spot_name}</h2>
              
              <hr />
              <div className="flex gap-1 text-lg items-center font-semibold text-gray-700 mt-1">
              <IoIosTime></IoIosTime>
              <p className="font-semibold text-base">Travle time: {travel_time}</p>
              </div>
              <div className="flex gap-1 text-lg items-center font-semibold text-gray-700 mb-1">
              <HiOutlineUserGroup />
              <p className="font-semibold text-base">Visitors: {totaVisitorsPerYear} per year</p>
              </div>
              
              <hr />
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