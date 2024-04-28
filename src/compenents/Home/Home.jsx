import React from "react";
import Slider from "../Slider/Slider";
import Cards from "../Cards/Cards";
import Countires from "../Countries/Countires";
import TravelTipsAndGuides from "../TravelGuidesSection/TravelTipsAndGuides";
import AboutSection from "../AboutSection/AboutSection";

function Home() {
  let sopts = [
    {
      image:
        "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg?auto=compress&cs=tinysrgb&w=800",
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
      image:
        "https://images.pexels.com/photos/2676642/pexels-photo-2676642.jpeg?auto=compress&cs=tinysrgb&w=800",
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
      image:
        "https://images.pexels.com/photos/6483239/pexels-photo-6483239.jpeg?auto=compress&cs=tinysrgb&w=800",
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
      image:
        "https://images.pexels.com/photos/18861249/pexels-photo-18861249/free-photo-of-view-of-the-matterhorn-in-swiss-alps.jpeg?auto=compress&cs=tinysrgb&w=800",
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
      image:
        "https://images.pexels.com/photos/19774105/pexels-photo-19774105/free-photo-of-stone-house-with-wooden-door.jpeg?auto=compress&cs=tinysrgb&w=800",
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
      image:
        "https://images.pexels.com/photos/4452037/pexels-photo-4452037.jpeg?auto=compress&cs=tinysrgb&w=800",
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

  return (
    <>
      <Slider></Slider>

      <div className="text-center max-w-7xl mx-auto lg:-mt-28 ">
        <h1 className="lg:text-4xl text-2xl font-bold text-[#131318]">
          Tourist Spots
        </h1>
        <p className="text-[#03071299] font-normal lg:text-base text-xs pt-4 pb-12 px-6">
          Welcome to our guide on the most captivating tourist destinations in
          Europe. From the iconic landmarks of France to the rich history of
          Italy, the vibrant culture of Spain, the breathtaking landscapes of
          Switzerland, and the charming sites of the Netherlands, this
          collection brings you some of the most popular and unique spots worth
          visiting. Explore the diverse beauty and cultural richness these
          countries have to offer.
        </p>
      </div>
      <Cards></Cards>
      <div className="text-center max-w-7xl mx-auto">
        <h1 className="lg:text-4xl text-2xl font-bold text-[#131318]">
          Country Sections
        </h1>
        <p className="text-[#03071299] font-normal lg:text-base text-xs pt-4 pb-12 px-6">
          Europe is a continent filled with history, culture, and stunning
          landscapes.Each Country presents unique attractions and memorable
          experiences for visitors. Join us as we explore these diverse European
          treasures.
        </p>
      </div>
      <div className="">
        <Countires></Countires>
      </div>
      <TravelTipsAndGuides></TravelTipsAndGuides>
      <AboutSection></AboutSection>
    </>
  );
}

export default Home;
