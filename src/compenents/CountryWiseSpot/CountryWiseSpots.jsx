import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { NavLink, useLoaderData } from "react-router-dom";
import Spinner from "../Loading/Spinner";

function CountryWiseSpots() {
  let data = useLoaderData();

  return (
    <>
      <div className="my-8 grid lg:grid-cols-3 grid-cols-1 max-w-7xl justify-center mx-auto md:grid-cols-2">
        {data.map((spot) => (
          <div key={spot._id} className="mb-4">
            <NavLink to={`/viewDetails/${spot._id}`}>
              <div className="card card-compact w-96 h-[100%] bg-base-100 shadow-xl mx-auto">
                <figure>
                  <img src={spot.image} alt="Tourist Spot" />
                </figure>
                <div className="card-body">
                  <div className="flex justify-between">
                    <div className="flex gap-1 items-center font-semibold">
                      <FaLocationDot />
                      <p>{spot.location}</p>
                    </div>
                  </div>
                  <h2 className="card-title">{spot.tourists_spot_name}</h2>
                  <p className="font-semibold text-base">
                    Country: {spot.country_name}
                  </p>
                  <p className="font-semibold text-base">
                    Travel time: {spot.travel_time}
                  </p>
                  <p className="font-semibold text-base">
                    Visitors: {spot.totaVisitorsPerYear} per year
                  </p>
                  <p className="font-bold text-xl">
                    Average cost: ${spot.average_cost}
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary w-full">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
}

export default CountryWiseSpots;
