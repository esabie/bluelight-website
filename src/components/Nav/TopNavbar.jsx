import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { Link } from "react-scroll";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import Logo from "../../assets/img/clients/bhc_logo.png";
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate darkBg"
        style={y > 100 ? { height: "60px" } : { height: "80px" }}
      >
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="/" smooth={true}>
            {/*<LogoIcon />*/}
            <img
              src={Logo}
              style={{ width: "90px", height: "90px" }}
              alt="care logo"
            />
            <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
              Bluelight Healthcare Group
            </h1>
          </Link>
          <BurderWrapper
            className="pointer"
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="/"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Home
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="About"
                spy={true}
                smooth={true}
                offset={-80}
              >
                About Us
              </Link>
            </li>

            <li className="relative semiBold font15 pointer group">
              {/* MAIN LINK */}
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="services"
                spy={true}
                smooth={true}
                offset={-80}
                className="flex items-center gap-1"
              >
                Our Services
                <span className="ml-1 text-sm">&#9662;</span>
              </Link>

              {/* FIXED DROPDOWN */}
              <ul
                className="
      absolute left-0 top-full
      mt-0
      hidden group-hover:flex
      flex-col
      bg-[#0a0e2e]   /* NAVY BACKGROUND */
      shadow-lg
      rounded-md
      py-2
      min-w-48
      w-max
      z-50
    "
              >
                <li className="px-4 py-2 hover:bg-blue-500 cursor-pointer">
                  <Link
                    to="services/specialist-recruitment"
                    smooth={true}
                    offset={-80}
                  >
                    Specialist Recruitment
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-500 cursor-pointer">
                  <Link
                    to="services/homecare-services"
                    smooth={true}
                    offset={-80}
                  >
                    Homecare Services
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-500 cursor-pointer">
                  <Link
                    to="services/emergency-crisis-response"
                    smooth={true}
                    offset={-80}
                  >
                    Emergency Crisis Response
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-500 cursor-pointer">
                  <Link
                    to="services/supported-living-services"
                    smooth={true}
                    offset={-80}
                  >
                    Supported Living Services
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-500 cursor-pointer">
                  <Link
                    to="services/rehabilitation-services"
                    smooth={true}
                    offset={-80}
                  >
                    Rehabilitation Services
                  </Link>
                </li>
              </ul>
            </li>

            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="Testimonials"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Testimonials
              </Link>
            </li>
            {/*<li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="pricing" spy={true} smooth={true} offset={-80}>
                Pricing
              </Link>
            </li>*/}
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Contact US
              </Link>
            </li>
          </UlWrapper>
          {/*<UlWrapperRight className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <a href="/" style={{ padding: "10px 30px 10px 0" }}>
                Log in
              </a>
            </li>
            <li className="semiBold font15 pointer flexCenter">
              <a href="/" className="radius8 lightBg" style={{ padding: "10px 15px" }}>
                Get Started
              </a>
            </li>
          </UlWrapperRight> */}
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;
