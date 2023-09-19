import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import web from "../assets/img/web.svg";
import { Link } from "react-scroll";
const Nav = () => {
  const [toggle, settoggle] = useState(false);

  const navLinks = [
    { href: "#overview", label: "Overview" },
    { href: "#feature", label: "Feature" },
    { href: "#about", label: "About" },
    { href: "#pricing", label: "pricing" },
  ];
  return (
    <>
      <nav className="container  md:px-14 p-4 max-w-screen-2xl  mx-auto fixed top-0 w-full  bg-white z-40 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        <div className=" mx-auto flex items-center justify-between font-medium">
          <div className="flex space-x-14 items-center">
            <a href="/" className="flex items-center space-x-3">
              <img src={logo} alt="Logo" className="w-10" />
              <span className="font-[36px] text-2xl ms-5 text-secondary ">
                XYZ
              </span>
            </a>

            <ul className="md:flex md:space-x-8 lg:space-x-12  hidden">
              {navLinks.map((item) => (
                <a className="py-2 " key={item.label} href={item.href}>
                  <li className="hover:text-tartiary transition-all ">
                    {item.label}
                  </li>
                </a>
              ))}
            </ul>
          </div>

          <div className="  hidden md:flex items-center">
            <p className="flex items-center p-0 mx-2">
              <img src={web} alt="" />
              <span>Language</span>
            </p>
            <button className="md:text-[12px] lg:text-[16px]">Sign up</button>
          </div>
          {toggle ? (
            <AiOutlineCloseCircle
              onClick={() => settoggle(!toggle)}
              className="md:hidden"
              cursor={"pointer"}
            />
          ) : (
            <FaBars cursor={"pointer"} className="md:hidden" onClick={() => settoggle(!toggle)} />
          )}
        </div>
      </nav>
      {toggle && (
        <>
          {" "}
          <ul
            className="  bg-primary pt-4 pb-5 px-4 md:hidden fixed w-full block z-20  top-[51px]"
          >
            {navLinks.map((item, idx) => (
              <a className=" w-1 px-5 mr-10 " key={item.label} href={item.href} onClick={()=>settoggle(false)}>
                <li className="hover:text-white transition-all ">
                  {item.label}
                </li>
              </a>
            ))}
            <div className="  flex md:hidden items-center">
              <p className="flex items-center p-0 mr-4">
                <img src={web} alt="" />
                <span>Language</span>
              </p>
              <button className="bg-white ">Sign up</button>
            </div>
          </ul>
        </>
      )}
    </>
  );
};

export default Nav;
