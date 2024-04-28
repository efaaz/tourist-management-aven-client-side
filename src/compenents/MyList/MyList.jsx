import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Spinner from "../Loading/Spinner";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

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
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };
    fetchData();
  }, []);




  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {


            fetch(`http://localhost:5000/spots/delete/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your spot has been deleted.',
                            'success'
                        )
                        const remaining = spots.filter(spot => spot._id !== _id);
                        setSpots(remaining);
                    }
                })

        }
    })}









  if (loading) {
    // Render loader when loading is true
    return <Spinner></Spinner>;
  }
  console.log(spots.length);
  if (spots.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center lg:text-6xl text-xl">
        You have not added any tourist spot!
      </div>
    );
  } else {
    return (
      <>
        <div className="my-8  max-w-7xl mx-auto">
          {spots.map((spot) => (
            <div
              key={spot._id}
              className="card lg:card-side bg-base-100 border border-[#13131326] p-2 container mx-auto mt-16 work"
            >
              <img
                src={spot.image}
                className="lg:w-[30%] w-[100%] my-auto mx-auto rounded-2xl"
                alt="Album"
              />

              <div className="card-body">
              <h2 className="card-title">{spot.tourists_spot_name}</h2>
              <p className="font-semibold text-base">Country: {spot.country_Name}</p>
              <p className="font-semibold text-base">Travle time: {spot.travel_time} days</p>
              <p className="font-semibold text-base">Visitors: {spot.totaVisitorsPerYear} per year</p>
              <p className="font-bold text-xl">Avarage cost: ${spot.average_cost}</p>
                <div className="flex gap-2">
                  <NavLink to={`/spots/update/${spot._id}`}>
                    <button className="btn-accent btn text-white rounded-2xl">
                      Update
                    </button>
                  </NavLink>
                    <button className="btn btn-warning text-white rounded-2xl" onClick={() => handleDelete(spot._id)}>
                      Delete
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default MyList;
