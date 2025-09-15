import React from "react";

// Importing images from src/assets
import card1 from "./Images/grid1.jpg";
import card2 from "./Images/grid2.jpg";
import card3 from "./Images/grid3.jpg";
import card4 from "./Images/grid4.jpg";

const Card = ({ image, title, description, link }) => {
  return (
    <div className="flex flex-col max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
      <a href={link}>
        <img
          className="w-full h-48 object-cover"
          src={image}
          alt={title}
          loading="lazy"
        />
      </a>
      <div className="flex flex-col flex-grow p-5">
        <a href={link}>
          <h5 className="mb-3 text-xl font-semibold tracking-tight text-gray-900 dark:text-white hover:text-blue-600 transition-colors duration-200">
            {title}
          </h5>
        </a>
        <p className="mb-4 text-gray-600 dark:text-gray-400 flex-grow">
          {description}
        </p>
        <a
          href={link}
          className="mt-auto inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 
          focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800 transition-colors duration-200"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

const CardGrid = () => {
  const cards = [
    {
      image: card1,
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      link: "#",
    },
    {
      image: card2,
      title: "AI in Healthcare",
      description:
        "Exploring the impact of artificial intelligence on modern healthcare systems.",
      link: "#",
    },
    {
      image: card3,
      title: "Cloud Security Trends",
      description:
        "A look into the evolving landscape of cloud security in enterprise settings.",
      link: "#",
    },
    {
      image: card4,
      title: "Remote Work Solutions",
      description:
        "The best tools and strategies enabling remote teams to stay productive.",
      link: "#",
    },
  ];

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 p-6">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardGrid;
