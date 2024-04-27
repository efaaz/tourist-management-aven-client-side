import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { AuthContext } from "../../Providers/AuthProvider";
import Spinner from "../Loading/Spinner";

function MyList() {
  const [spots, setSpots] = useState([]);

  let { user } = useContext(AuthContext);
 const email = "2@gmail.com";
  console.log(email);
  const [loading, setLoading] = useState(true); // Track loading state
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:5000/spots/user/${email}`); // Absolute path to the public folder
        const data = await res.json();
        setSpots(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      finally {
        setLoading(false); // Set loading to false after fetch
      }
    };
    fetchData();
  }, []);
  if (loading) { // Render loader when loading is true
    return <Spinner></Spinner>
  }
  console.log(spots.length);
  if (spots.length === 0) {
    return <div className="min-h-screen flex justify-center items-center lg:text-6xl text-xl">You have not added any tourist spot!</div>
  } else{  return (
    <>
      <div className="my-8 grid lg:grid-cols-3 grid-cols-1 max-w-7xl justify-center mx-auto md:grid-cols-2">
        {spots.map((spot) => (
          <div key={spot._id} className="mb-4">
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
                  <button className="btn btn-primary w-full">Update</button>
                  <button className="btn btn-primary w-full">Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}}


export default MyList;
