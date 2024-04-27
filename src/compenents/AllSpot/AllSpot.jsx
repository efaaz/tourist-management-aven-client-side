import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { NavLink, useLoaderData } from "react-router-dom";
import Spinner from "../Loading/Spinner";

function AllSpot() {
  const data = useLoaderData();
  const [spots, setSpots] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true)
    setSpots(data);
    setLoading(false);
  }, [data]);

  const sortByAverageCost = (order) => {
    setLoading(true)
    const sortedSpots = [...spots].sort((a, b) => {
      if (order === "asc") {
        return a.average_cost - b.average_cost;
      } else {
        return b.average_cost - a.average_cost;
      }
    });
    setSpots(sortedSpots);
    setLoading(false)
  };
  if (loading) {
    return <Spinner></Spinner>
  }else{
  return (
    <>
      <div className="flex justify-center">
        <div className="dropdown dropdown-bottom text-center mt-6">
          <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A]">
            Sort By <IoIosArrowDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button onClick={() => sortByAverageCost("asc")}>
                Average Cost (low to high)
              </button>
            </li>
            <li>
              <button onClick={() => sortByAverageCost("desc")}>
                Average Cost (high to low)
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="my-8 grid lg:grid-cols-3 grid-cols-1 max-w-7xl justify-center mx-auto md:grid-cols-2">
        {spots.map((spot) => (
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
                    Country: {spot.country_Name}
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
}}

export default AllSpot;
