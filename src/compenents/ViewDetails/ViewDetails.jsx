import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

function ViewDetails() {
  const data = useLoaderData();
  console.log(data);

  const {
    image,
    tourists_spot_name,
    country_name,
    travel_time,
    location,
    average_cost,
    totaVisitorsPerYear,
  } = data;

  return (
    <section className="hero min-h-screen bg-gray-100"> 
      <div className="container mx-auto py-12 px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10"> 
          <img
            src={image}
            alt={tourists_spot_name}
            className="w-full lg:w-1/2 h-64 object-cover rounded-lg shadow-xl" /* Large responsive image */
          />

          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800"> 
              {tourists_spot_name}
            </h2>

            <div className="flex gap-1 items-center font-semibold text-gray-700 mt-4"> 
              <FaLocationDot className="text-lg" />
              <span>Location: {location}</span>
            </div>

            <p className="text-lg font-semibold text-gray-700 mt-4"> 
              Country: {country_name}
            </p>

            <p className="text-lg font-semibold text-gray-700"> 
              Travel Time: {travel_time}
            </p>

            <p className="text-lg font-semibold text-gray-700"> 
              Visitors: {totaVisitorsPerYear} per year
            </p>

            <p className="py-4 font-bold text-xl text-gray-900">
              Average cost: ${average_cost}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ViewDetails;
