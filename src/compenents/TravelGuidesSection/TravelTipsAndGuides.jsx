import React from "react";
import { NavLink } from "react-router-dom";

function TravelTipsAndGuides() {
  const tips = [
    {
      title: "Pack Light and Smart",
      description:
        "Learn how to pack efficiently with our expert tips, ensuring you have everything you need without overpacking.",
      image: "https://images.pexels.com/photos/1682694/pexels-photo-1682694.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Travel Safety",
      description:
        "Get the latest safety tips for travelers, including how to stay secure and avoid common travel scams.",
      image: "https://images.pexels.com/photos/732632/pexels-photo-732632.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Must-See Destinations",
      description:
        "Explore our list of must-see destinations and plan your next trip with confidence.",
      image: "https://images.pexels.com/photos/7236028/pexels-photo-7236028.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Travel Tips and Guides</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <img
                src={tip.image}
                alt={tip.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
              <p className="text-gray-600">{tip.description}</p>
              <NavLink to="/more-tips" className="mt-4 inline-block">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                  Learn More
                </button>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TravelTipsAndGuides;
