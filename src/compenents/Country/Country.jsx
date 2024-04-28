import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Country(props) {
  const {
    _id,
    country_name,
    image,
    short_description,
  } = props.data;
  return (
    <>
      <div className="mb-6" data-aos="zoom-in">
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
                  <h2 className="card-title">{country_name}</h2>
                </div>
              </div>
              <p className="font-semibold text-base">{short_description}
              </p>
              <div className="card-actions justify-end">
                <NavLink to={`/country/${country_name}`}>
                <button className="btn btn-primary w-full">
                  View tourist spots
                </button>
                </NavLink>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default Country;
