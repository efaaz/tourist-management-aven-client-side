import React, { useContext, useEffect, useState } from "react";
import Card from "../Card/Card";

function Cards() {
    const [cardDetails, setCardDetails] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch("http://localhost:5000/spots"); // Absolute path to the public folder
            const data = await res.json();
            setCardDetails(data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchData();
      }, []);
  return (
    <>
      <div className="text-center max-w-7xl mx-auto lg:-mt-28 ">
        <h1 className="lg:text-4xl text-2xl font-bold text-[#131318]">
        Tourist Spots
        </h1>
        <p className="text-[#03071299] font-normal lg:text-base text-xs pt-4 pb-12 px-6">
        Welcome to our guide on the most captivating tourist destinations in Europe. From the iconic landmarks of France to the rich history of Italy, the vibrant culture of Spain, the breathtaking landscapes of Switzerland, and the charming sites of the Netherlands, this collection brings you some of the most popular and unique spots worth visiting. Explore the diverse beauty and cultural richness these countries have to offer.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 max-w-7xl justify-center mx-auto md:grid-cols-2">
        {cardDetails.map((dataItem, index) => (
          <Card key={index} data={dataItem} />
        ))}
      </div>
    </>
  );
}

export default Cards;