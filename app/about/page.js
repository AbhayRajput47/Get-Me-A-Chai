// "use client"
import React from "react";

const About = () => {
  return (
    <div className="bg-black">
      <section
        id="features"
        className="relative block px-6 py-10 md:py-16 md:px-12 border-t border-b border-neutral-900 bg-neutral-900/30"
      >
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-5xl font-extrabold font-sans text-white mb-4">
            About Us
          </h1>
          <p className="text-lg font-semibold text-blue-400 mb-6">
            &quot;Fueling Creativity, One Cup at a Time&quot;
          </p>
          <p className="text-gray-300 text-md leading-relaxed mb-6">
            At <span className="text-white font-semibold">Get Me A Chai</span>, we aim to empower creators—developers, artists,
            influencers, and thinkers—by bridging the gap between passion and
            support. We provide a simple, elegant way for fans to show love
            through small contributions, creating a thriving ecosystem of
            creativity.
          </p>
          <p className="text-gray-300 text-md leading-relaxed mb-6">
            Whether you&apos;re crafting a digital experience, producing compelling
            content, or sharing a vision, our platform is your home for funding
            and engagement. We believe in the ripple effect of community-driven
            support—small gestures lead to meaningful impact.
          </p>
        </div>

        <div className="bg-white h-1 opacity-10 my-16"></div>

        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4">
            Why Choose Get Me A Chai?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We make creativity fundable. With intuitive features, personalization,
            and high performance, our platform puts creators first—where support
            meets innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              title: "Custom Campaigns",
              description:
                "Tailor your support page with themes and layouts that match your brand.",
              icon: "color-swatch",
            },
            {
              title: "Lightning Fast",
              description:
                "Optimized performance ensures supporters get a seamless experience.",
              icon: "bolt",
            },
            {
              title: "Built-in Tools",
              description:
                "From analytics to feedback, manage your campaign with ease.",
              icon: "tools",
            },
          ].map(({ title, description, icon }) => (
            <div
              key={title}
              className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 text-center shadow-lg hover:shadow-xl transition"
            >
              <div
                className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border"
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                  borderColor: "rgb(93, 79, 240)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <use href={`#icon-${icon}`} />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-200 mb-2">{title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="absolute top-0 left-0 h-1/3 w-full z-0"
          style={{
            backgroundImage:
              "linear-gradient(to left bottom, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)",
            borderColor: "rgba(92, 79, 240, 0.2)",
          }}
        ></div>
        <div className="absolute top-0 right-0 h-1/3 w-full z-0"
          style={{
            backgroundImage:
              "linear-gradient(to right bottom, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)",
            borderColor: "rgba(92, 79, 240, 0.2)",
          }}
        ></div>
      </section>
    </div>
  );
};

export default About;

export const metadata = {
  title: "About | Get Me A Chai",
};
