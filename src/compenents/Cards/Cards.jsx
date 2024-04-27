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
      <div className="grid lg:grid-cols-3 grid-cols-1 max-w-7xl justify-center mx-auto md:grid-cols-2">
        {cardDetails.map((dataItem, index) => (
          <Card key={index} data={dataItem} />
        ))}
      </div>
    </>
  );
}

export default Cards;