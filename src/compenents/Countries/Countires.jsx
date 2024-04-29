import React, { useContext, useEffect, useState } from "react";
import Country from "../Country/Country";
import Spinner from "../Loading/Spinner";


function Countires() {
 let  [loading, setLoading] = useState(true);
  const [cardDetails, setCardDetails] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          "https://server-side-ecru-zeta.vercel.app/countries"
        ); // Absolute path to the public folder
        const data = await res.json();
        setCardDetails(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  if(loading){
    return <><Spinner></Spinner> </>
  }else{
      return (
    <div className="grid lg:grid-cols-3 grid-cols-1 max-w-7xl justify-center mx-auto md:grid-cols-2">
      {cardDetails.map((dataItem, index) => (
        <Country key={index} data={dataItem} />
      ))}
    </div>
  );
}}


export default Countires;
