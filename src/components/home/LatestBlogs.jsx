import React from "react";
import { Link } from "react-router-dom";

const LatestBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: "The Best UI/UX Design Tools For Your Project",
      date: "May 15, 2022",
      banner: "/blog/1.png",
    },
    {
      id: 2,
      title: "The Best UI/UX Design Tools For Your Project",
      date: "May 15, 2022",
      banner: "/blog/2.png",
    },
    {
      id: 3,
      title: "The Best UI/UX Design Tools For Your Project",
      date: "May 15, 2022",
      banner: "/blog/3.png",
    },
  ];
  return (
    <div className="px-4 lg:px-0 py-[40px] md:py-[70px] lg:py-[100px]">
      <div className="max-w-screen-xl mx-auto h-full">
        <div
          className="flex items-center justify-center gap-2"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <img src="/rec.png" alt="rec.png" className="w-5 h-5" />
          <p className="text-sm">Our Blog</p>
        </div>
        <div
          className="relative z-10 flex justify-center items-center text-center overflow-hidden"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h1
            style={{ lineHeight: "1.2" }}
            className="text-2xl lg:text-5xl font-bold w-full my-4 lg:my-6 z-30 relative"
          >
            LATEST BLOG
          </h1>
          <div className="flex justify-center items-center gap-2 mt-2 absolute right-[25%] md:right-[35%] bottom-3 md:bottom-7 z-20 rotate-[-5deg] ">
            <img
              src="/orange-line.png"
              alt="orange-line"
              className="scale-in-bl"
            />
          </div>
        </div>

        {/* Blogs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={blog.banner}
                  alt={blog.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500">{blog.date}</p>
                <h3 className="text-lg md:text-xl font-bold my-2">
                  {blog.title}
                </h3>
                <Link
                  to={`/blog/${blog.id}`}
                  className="inline-block relative hover:text-[#fff] py-2 px-6 after:absolute after:h-1 after:hover:h-[300%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#e77529] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-600"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
