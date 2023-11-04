import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/Logo.png";
import { AiOutlineClose } from "react-icons/ai";
import "./navbar.css";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };
  return (
    <div className="sticky z-40 top-0">
      <nav className="py-2 pl-6 pr-6 relative">
        <section className="container mx-auto flex justify-between items-center">
          <div>
            <NavLink to="/">
              <img
                src={logo}
                alt=""
                srcset=""
                className="w-[100px] h-[70px]"
                onClick={handleClick}
              />
            </NavLink>
          </div>
          <div>
            {/* destop view  */}
            <div className="hidden lg:flex gap-4">
              <NavLink
                to="/"
                className="font-bold text-xl text-slate-700 mr-4  text-navyblue"
                onClick={handleClick}
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className="font-bold text-navyblue text-xl  mr-4 "
                onClick={handleClick}
              >
                About
              </NavLink>

              <NavLink
                to="/practice"
                className="font-bold text-navyblue text-xl mr-4 "
                onClick={handleClick}
              >
                Services
              </NavLink>

              <NavLink
                to="/attorney"
                className="font-bold text-navyblue text-xl mr-4 "
                onClick={handleClick}
              >
                Lawers
              </NavLink>

              <NavLink
                to="/contact"
                className="font-bold text-navyblue text-xl  mr-4 "
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </div>
            {/* tablet view  */}
            <div className="flex gap-4">
              <div className="lg:hidden">
                {open ? (
                  <AiOutlineClose
                    className="cursor-pointer icon mr-8"
                    onClick={() => setOpen(!open)}
                  />
                ) : (
                  <FaBars
                    className="cursor-pointer icon mr-8"
                    onClick={() => setOpen(!open)}
                  />
                )}
              </div>
              {open && (
                <div className="flex flex-col gap-4 absolute left-0 bg-color min-h-screen min-w-[100vh] top-20 lg:hidden">
                  <>
                    <NavLink
                      to="/"
                      className="font-bold text-navyblue text-xl  pt-3 pl-4"
                      onClick={() => setOpen(!open)}
                    >
                      Home
                    </NavLink>
                    <hr />
                    <NavLink
                      to="/about"
                      className="font-bold text-navyblue text-xl pl-4"
                      onClick={() => setOpen(!open)}
                    >
                      About
                    </NavLink>
                    <hr />
                    <NavLink
                      to="/practice"
                      className="font-bold text-navyblue text-xl  pl-4"
                      onClick={() => setOpen(!open)}
                    >
                      Services
                    </NavLink>
                    <hr />
                    <NavLink
                      to="/attorney"
                      className="font-bold text-navyblue text-xl pl-4"
                      onClick={() => setOpen(!open)}
                    >
                      Lawers
                    </NavLink>
                    <hr />
                    <NavLink
                      to="/contact"
                      className="font-bold text-navyblue text-xl mb-2  pl-4"
                      onClick={() => setOpen(!open)}
                    >
                      Contact
                    </NavLink>
                    <hr />
                  </>
                </div>
              )}
            </div>
          </div>
        </section>
      </nav>
    </div>
  );
};

export default Navbar;
