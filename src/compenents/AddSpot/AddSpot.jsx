import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

function AddSpot() {
  let { user } = useContext(AuthContext);
  let defaultEmail = user.email
  let defaultName = user.displayName
  function handleAddSpot(e){
    e.preventDefault();
    const form = e.target;
    const country = form.country.value;
    const username = form.Username.value;
    const useremail = form.email.value;
    const SpotName = form.SpotName.value;
    const img = form.img.value;
    const cost = form.cost.value;
    const season = form.season.value;
    const area = form.location.value;
    const time = form.time.value;
    const visitorCount = form.visitorCount.value;
    const description = form.description.value;

    const data ={
      name : username,
      email : useremail,
      totaVisitorsPerYear : visitorCount,
      country_Name : country,
      tourists_spot_name : SpotName,
      average_cost : cost,
      image :img,
      travel_time:time,
      location:area,
      seasonality : season,
      short_description:description
    };

    fetch('http://localhost:5000/all/spots', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(data)
  })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged === true) {
            Swal.fire({
                title: 'Success!',
                text: 'Updated Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }
    })

  }
  return (
    <>
      <section className="m-8 max-w-7xl mx-auto">
        <form className="border" onSubmit={handleAddSpot}>
          <div className="p-6 space-y-2 md:space-y-6">
            <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Add Your Tourist Spot
            </h1>
            <div className="border p-2 rounded-lg">
              <label htmlFor="cars">Choose a country:</label>
              <select name="country" id="cars" >
                <option value="France">France</option>
                <option value="Italy">Italy</option>
                <option value="Spain">Spain</option>
                <option value="England">England</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Switzerland">Switzerland</option>
              </select>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-6">
              <div className="left">
                <div className="mb-2">
                  <label
                    htmlFor="Name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    User Name
                  </label>
                  <input
                  defaultValue={defaultName}
                    name="Username"
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="Name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Tourist Spot Name
                  </label>
                  <input
                    name="SpotName"
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="Name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Avarage Cost 
                  </label>
                  <input
                    name="cost"
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="$50"
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="Name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Travel Time
                  </label>
                  <input
                    name="time"
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="7days"
                  />
                </div>
              </div>
              <div className="right">
                <div className="mb-2">
                  <label
                    htmlFor="Name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    User Email
                  </label>
                  <input
                  defaultValue={defaultEmail}
                    name="email"
                    type="email"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="email"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="Name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Image url
                  </label>
                  <input
                    name="img"
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="url"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="Name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Seasonality
                  </label>
                  <input
                  name="season"
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Summer"
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="Name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Total Visitors Per Year
                  </label>
                  <input
                    name="visitorCount"
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="1000"
                  />
                </div>
              </div>
            </div>
            <div className="mb-2">
                  <label
                    htmlFor="Name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Location
                  </label>
                  <input
                    name="location"
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Location"
                  />
                </div>
            <div className="">
            <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Short Description
                  </label>
                  <textarea name="description" id="" cols="30" rows="5"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  ></textarea>
            </div>
            <input type="submit" value="Add" className="w-full btn btn-success text-white" />
          </div>
          
        </form>
      </section>
    </>
  );
}

export default AddSpot;
