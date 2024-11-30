import React from "react";
import PageHeading from "../components/shared/PageHeading";
import LatestBlogs from "../components/home/LatestBlogs";

const Blogs = () => {
  return (
    <div>
      <PageHeading pageName="Blogs" />
      <LatestBlogs />
    </div>
  );
};

export default Blogs;
