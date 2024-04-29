import React from "react";
import Slider from "../Slider/Slider";
import Cards from "../Cards/Cards";
import Countires from "../Countries/Countires";
import TravelTipsAndGuides from "../TravelGuidesSection/TravelTipsAndGuides";
import AboutSection from "../AboutSection/AboutSection";
import { Typewriter } from "react-simple-typewriter";

function Home() {

  return (
    <>
      <Slider></Slider>

      <div className="text-center max-w-7xl mx-auto lg:-mt-28 dark">
        <div className="flex justify-center">
        <h1 className="lg:text-4xl text-2xl mx-auto font-bold card-title">
          Tourist Spots
        </h1>
        </div>
        <p className="card-title font-normal lg:text-base text-xs pt-4 pb-12 px-6">
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
        <h1 className="lg:text-4xl text-2xl font-bold text-[#131318] dark:text-white">
          <span style={{ color: "red", fontWeight: "bold" }}>
            <Typewriter
              words={["Country Section"]} // Words to display
              loop={7} // Number of times to loop
              cursor // Enable cursor
              cursorStyle="_" // Cursor style
              typeSpeed={70} // Speed of typing
              deleteSpeed={50} // Speed of deletion
              delaySpeed={1000} // Delay between loops
            />
          </span>
        </h1>
        <p className="card-titl font-normal lg:text-base text-xs pt-4 pb-12 px-6">
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
