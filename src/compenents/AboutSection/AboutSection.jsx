import React from "react";

function AboutSection() {
  return (
    <section className="py-12 max-w-5xl mx-auto text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">About Us</h2>
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
          <div className="">
            <p className="text-lg card-title leading-relaxed">
              We are dedicated to providing the best travel experiences for our
              users. Our mission is to connect people with unique destinations,
              providing them with resources, travel tips, and inspiration to
              explore the world.
            </p>
            <p className="text-lg card-title leading-relaxed mt-4">
              If you'd like to know more about us or get in touch, please
              contact us through our website. We look forward to helping you
              plan your next adventure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
