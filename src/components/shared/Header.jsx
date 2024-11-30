// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Define the menu items for navigation
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Works", link: "/works" },
    { name: "Blogs", link: "/blogs" },
    { name: "Contact", link: "/contact" },
  ];

  // Toggle the mobile menu visibility
  const toggleMenu = () => setShowMenu(!showMenu);

  // Handle scroll effect for changing the header background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClasses = `
    fixed top-0 left-0 right-0 z-10 py-4 px-4 
    ${scrolled ? "scrolled-bg text-black" : "bg-transparent"}
    transition-bg duration-300 text-white
  `;

  const renderMenuItems = () =>
    menuItems.map((menu) => (
      <li key={menu.name}>
        <NavLink
          to={menu.link}
          className={({ isActive }) =>
            isActive
              ? "text-[#e77529] uppercase py-1 font-semibold"
              : "cta uppercase py-1 text-[#fff]"
          }
        >
          <span className="hover-underline-animation pb-[7px] tracking-[4px]">
            {menu.name}
          </span>
        </NavLink>
      </li>
    ));

  return (
    <>
      {/* Desktop Header */}
      <div
        id="myHeader"
        className={`hidden lg:flex w-full py-5 ${headerClasses} z-50`}
      >
        <div className="max-w-screen-xl w-full mx-auto flex justify-between items-center lg:flex lg:justify-between lg:items-center">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <ul className="flex gap-8 items-center text-md">
            {renderMenuItems()}
          </ul>
        </div>
      </div>

      {/* Mobile Header */}
      <div
        id="myHeader"
        className={`lg:hidden flex justify-between items-center ${headerClasses} z-50`}
      >
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <GiHamburgerMenu
          size={30}
          onClick={toggleMenu}
          className="cursor-pointer"
        />
        {showMenu && (
          <div
            data-aos="fade-in"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            className="absolute top-0 left-0 right-0 min-h-screen bg-[#28282D] transition-bg duration-300"
          >
            <div className="flex justify-between items-center py-4 px-4">
              <Link to="/">
                <img src={logo} alt="Logo" onClick={toggleMenu} />
              </Link>
              <RxCross1
                size={30}
                onClick={toggleMenu}
                className="cursor-pointer"
              />
            </div>
            <div className="flex flex-col gap-4 px-4 mt-5">
              {menuItems.map((menu) => (
                <NavLink
                  key={menu.name}
                  to={menu.link}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#e77529] uppercase py-1 rounded-md"
                      : "text-white cta uppercase"
                  }
                >
                  <button className="cta" onClick={toggleMenu}>
                    <span
                      className="hover-underline-animation"
                      style={{ fontSize: "20px" }}
                    >
                      {menu.name}
                    </span>
                  </button>
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
