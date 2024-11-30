import React from "react";

const FooterBottom = () => {
  return (
    <div className="bg-[#030d0f] border-t-[1px] border-t-gray-500 py-3 md:py-5">
      <p className="text-gray-400 text-center">
        Copyright © {new Date().getFullYear()} All rights reserved by{" "}
        <span className="text-[#00637e]">AM Antor</span>
      </p>
    </div>
  );
};

export default FooterBottom;
