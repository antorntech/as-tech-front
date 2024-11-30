import React from "react";
import pageHeadingBg from "../../assets/images/pageHeading.jpg";
import { Link } from "react-router-dom";

const PageHeading = ({ pageName }) => {
  return (
    <div
      className="h-[250px] md:h-[300px] lg:h-[350px] w-full"
      style={{
        background: `url(${pageHeadingBg}) no-repeat center center / cover`,
      }}
    >
      <div className="w-full h-full flex flex-col justify-center items-center text-white">
        <div className="text-center mt-[10px]">
          <h1 className="text-4xl">{pageName}</h1>
          <p className="text-sm mt-1">
            {" "}
            <Link to="/">Home</Link> / {pageName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageHeading;
