import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsFillCloudsFill } from "react-icons/bs";

function ViewDetails() {
  const data = useLoaderData();

  const {
    seasonality,
    short_description,
    image,
    tourists_spot_name,
    country_name,
    travel_time,
    location,
    average_cost,
    totaVisitorsPerYear,
  } = data;

  return (
    <section className="hero min-h-screen">
      <div className="container mx-auto py-12 px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <img
            src={image}
            alt={tourists_spot_name}
            className="w-full lg:w-1/2 h-64 object-cover rounded-lg shadow-xl" /* Large responsive image */
          />

          <div className="lg:w-1/2">
            <div className="flex justify-between lg:flex-row flex-col">
              <h2 className="text-2xl font-bold  mb-2">
                {tourists_spot_name}
              </h2>
              <div className="flex gap-1 text-2xl items-center font-bold mb-2">
                <FaLocationDot className="text-lg" />
                <p>{location}</p>
              </div>
            </div>
            <hr />

            <p className="text-lg font-semibold mt-2">
              {short_description}
            </p>
            <div className="flex gap-1 text-lg items-center font-semibol mt-2 mb-2">
              <p className="text-lg font-semibold">
                Country: {country_name}
              </p>
            </div>
            <hr />
            <div className="flex gap-1 text-lg items-center font-semibold mt-2">
              <IoIosTime></IoIosTime>
              <p className="text-lg font-semibol">
                Travel time: {travel_time}
              </p>
            </div>
            <div className="flex gap-1 text-lg items-center font-semibold mt-2">
              <HiOutlineUserGroup />
              <p className="text-lg font-semibold">
                Visitors: {totaVisitorsPerYear} per year
              </p>
            </div>
            <div className="flex gap-1 text-lg items-center font-semibold mt-2 mb-2">
              <BsFillCloudsFill />
              <p className="text-lg font-semibold">
                Season: {seasonality}
              </p>
            </div>
            <hr />
            <p className="py-2 font-bold text-x">
              Average cost: ${average_cost}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ViewDetails;
