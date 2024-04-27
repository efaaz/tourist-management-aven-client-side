import React from 'react';

function AddingJsonFile() {
    const touristSpots = [
        {
          image: "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg?auto=compress&cs=tinysrgb&w=800",
          tourists_spot_name: "Eiffel Tower",
          country_Name: "France",
          location: "Paris",
          short_description:
            "An iconic symbol of Paris and France, the Eiffel Tower is a wrought-iron lattice tower offering panoramic views of the city.",
          average_cost: 25,
          seasonality: "All year",
          travel_time: "1 day",
          totaVisitorsPerYear: 7000000,
        },
        {
          image: "https://images.pexels.com/photos/2676642/pexels-photo-2676642.jpeg?auto=compress&cs=tinysrgb&w=800",
          tourists_spot_name: "Colosseum",
          country_Name: "Italy",
          location: "Rome",
          short_description:
            "An ancient Roman amphitheater, the Colosseum is known for its impressive architecture and historical significance.",
          average_cost: 18,
          seasonality: "All year",
          travel_time: "1 day",
          totaVisitorsPerYear: 6000000,
        },
        {
          image: "https://images.pexels.com/photos/6483239/pexels-photo-6483239.jpeg?auto=compress&cs=tinysrgb&w=800",
          tourists_spot_name: "Sagrada Familia",
          country_Name: "Spain",
          location: "Barcelona",
          short_description:
            "A massive basilica designed by Antoni Gaudí, known for its unique architectural style and ongoing construction.",
          average_cost: 20,
          seasonality: "All year",
          travel_time: "1 day",
          totaVisitorsPerYear: 4500000,
        },
        {
          image: "https://images.pexels.com/photos/18861249/pexels-photo-18861249/free-photo-of-view-of-the-matterhorn-in-swiss-alps.jpeg?auto=compress&cs=tinysrgb&w=800",
          tourists_spot_name: "Matterhorn",
          country_Name: "Switzerland",
          location: "Zermatt",
          short_description:
            "A famous mountain in the Swiss Alps, the Matterhorn is a popular destination for climbers and outdoor enthusiasts.",
          average_cost: 100,
          seasonality: "Summer",
          travel_time: "1 day",
          totaVisitorsPerYear: 500000,
        },
        {
          image: "https://images.pexels.com/photos/19774105/pexels-photo-19774105/free-photo-of-stone-house-with-wooden-door.jpeg?auto=compress&cs=tinysrgb&w=800",
          tourists_spot_name: "Anne Frank House",
          country_Name: "Netherlands",
          location: "Amsterdam",
          short_description:
            "The Anne Frank House is a museum dedicated to the Jewish wartime diarist Anne Frank, offering insights into her life during WWII.",
          average_cost: 15,
          seasonality: "All year",
          travel_time: "1 day",
          totaVisitorsPerYear: 1500000,
        },
        {
          image: "https://images.pexels.com/photos/4452037/pexels-photo-4452037.jpeg?auto=compress&cs=tinysrgb&w=800",
          tourists_spot_name: "Louvre Museum",
          country_Name: "France",
          location: "Paris",
          short_description:
            "The Louvre is the world's largest art museum, home to thousands of works including the Mona Lisa and the Venus de Milo.",
          average_cost: 17,
          seasonality: "All year",
          travel_time: "1 day",
          totaVisitorsPerYear: 9600000,
        },
      ];
      
      
  

  function handleClick(e) {
    e.preventDefault(); // Prevent default form submission behavior

    fetch('http://localhost:5000/spots', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(touristSpots),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Data:', data);
        // If the response includes an insertedId, extract it
        const insertedId = data.insertedId || 'No ID returned';
        console.log('Inserted ID:', insertedId);
      })
      .catch((error) => {
        console.error('Error during fetch:', error);
      });
  }

  return (
    <>
      <form onSubmit={handleClick}>
        <button type="submit">Click</button>
      </form>
    </>
  );
}

export default AddingJsonFile;
