import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

function UpdateSpot() {
  let data = useLoaderData();
  function handleUpdateSpot(e) {
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

    const updatedInfo = {
      username,
      useremail,
      visitorCount,
      country,
      SpotName,
      cost,
      img,
      time,
      area,
      season,
      description,
    };

    fetch(`https://server-side-ecru-zeta.vercel.app/spots/update/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  }
  return (
    <section className="m-8 max-w-7xl mx-auto">
      <form className="border" onSubmit={handleUpdateSpot}>
        <div className="p-6 space-y-2 md:space-y-6">
          <h1 className="text-xl font-bold text-center leading-tight tracking-tight">
            Add Your Tourist Spot
          </h1>
          <div className="border p-2 rounded-lg">
            <label htmlFor="cars">Choose a country:</label>
            <select name="country" id="cars" defaultValue={data.country_Name}>
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
                  className="block mb-2 text-sm font-medium"
                >
                  User Name
                </label>
                <input
                  defaultValue={data.name}
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
                  className="block mb-2 text-sm font-medium"
                >
                  Tourist Spot Name
                </label>
                <input
                  defaultValue={data.tourists_spot_name}
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
                  className="block mb-2 text-sm font-medium"
                >
                  Avarage Cost
                </label>
                <input
                  defaultValue={data.average_cost}
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
                  className="block mb-2 text-sm font-medium"
                >
                  Travel Time
                </label>
                <input
                  defaultValue={data.travel_time}
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
                  className="block mb-2 text-sm font-medium"
                >
                  User Email
                </label>
                <input
                  defaultValue={data.email}
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
                  className="block mb-2 text-sm font-medium"
                >
                  Image url
                </label>
                <input
                  defaultValue={data.image}
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
                  className="block mb-2 text-sm font-medium"
                >
                  Seasonality
                </label>
                <input
                  defaultValue={data.seasonality}
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
                  className="block mb-2 text-sm font-medium"
                >
                  Total Visitors Per Year
                </label>
                <input
                  defaultValue={data.totaVisitorsPerYear}
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
              className="block mb-2 text-sm font-medium"
            >
              Location
            </label>
            <input
              defaultValue={data.location}
              name="location"
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Location"
            />
          </div>
          <div className="">
            <label className="block mb-2 text-sm font-medium">
              Short Description
            </label>
            <textarea
              name="description"
              id=""
              cols="30"
              rows="5"
              defaultValue={data.short_description}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
          </div>
          <input
            type="submit"
            value="Add"
            className="w-full btn btn-success text-white"
          />
        </div>
      </form>
    </section>
  );
}

export default UpdateSpot;
