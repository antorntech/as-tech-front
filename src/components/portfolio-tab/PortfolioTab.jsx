import React, { useState } from "react";
import { Link } from "react-router-dom";

const portfolioItems = [
  {
    id: 1,
    category: "React",
    image: "/works/1.jpg",
    title: "Graphic Design",
    description: "The best way to impress your web",
    liveLink: "",
  },
  {
    id: 2,
    category: "Next JS",
    image: "/works/2.jpg",
    title: "Creative Design",
    description: "Bringing ideas to life",
    liveLink: "https://test.ssishopping.store/",
  },
  {
    id: 3,
    category: "React",
    image: "/works/3.jpg",
    title: "Branding Solution",
    description: "Make your brand shine",
    liveLink: "https://automateplus.netlify.app/",
  },
  {
    id: 4,
    category: "Vue JS",
    image: "/works/4.jpg",
    title: "Modern Graphics",
    description: "The essence of visual appeal",
    liveLink: "https://mjrawfusion.netlify.app/",
  },
  {
    id: 5,
    category: "React",
    image: "/works/5.jpg",
    title: "React Web Design",
    description: "Innovative app solutions",
    liveLink: "https://asfurn.netlify.app/",
  },
  {
    id: 6,
    category: "Next JS",
    image: "/works/6.jpg",
    title: "Responsive Web Design",
    description: "Optimized for all devices",
    liveLink: "https://mjrawfusion-admin.netlify.app/login",
  },
];

const categories = ["All", "React", "Next JS", "Vue JS"];

const PortfolioTab = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter portfolio items based on the selected category
  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div
      className="mx-auto"
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      {/* Categories Tabs */}
      <div className="flex justify-center gap-8 mt-5">
        {categories.map((category) => (
          <button
            key={category}
            className={`text-lg font-medium pb-1 ${
              activeCategory === category
                ? "border-b-2 border-[#e77529] text-[#e77529]"
                : "text-gray-600 hover:text-[#e77529]"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg shadow-lg group tilt-in-fwd-bl"
          >
            {/* Portfolio Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-contain aspect-square transition-transform duration-500 group-hover:scale-110"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-full h-full relative">
                <div className="absolute left-5 bottom-5 w-3/4 bg-[#e77529] p-4 text-white rounded-md">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                  <Link
                    to={item.liveLink}
                    target="_blank"
                    class=" mt-3 relative inline-block px-8 py-2 rounded-md bg-white text-black font-semibold isolation-auto z-10 border-2 border-[#e77529] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-black hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
                  >
                    Live Preview
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioTab;
