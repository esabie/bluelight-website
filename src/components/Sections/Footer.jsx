import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoImg from "../../assets/svg/Logo";
import Logo from "../../assets/img/clients/bhc_logo3.png";

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper
            className="flexSpaceCenter"
            style={{
              padding: "40px 0",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {/* LEFT — Logo */}
            <div style={{ flex: "1", display: "flex", alignItems: "center" }}>
              <Link
                className="flexCenter animate pointer"
                to="/"
                smooth={true}
                offset={-80}
              >
                <img
                  src={Logo}
                  style={{ width: "350px", height: "90px" }}
                  alt="care logo"
                />
              </Link>
            </div>

            {/* RIGHT — Footer Links (grid) */}
            <div
              style={{
                flex: "2",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "40px",
                textAlign: "left",
              }}
            >
              {/* Quick Links */}
              <div>
                <h4
                  className="orangeColor font13"
                  style={{ marginBottom: "10px" }}
                >
                  Quick Links
                </h4>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {/* <li>
                    <Link
                      className="whiteColor font13 pointer"
                      to="home"
                      smooth
                      offset={-80}
                    >
                      Home
                    </Link>
                  </li> */}
                  <li>
                    <a
                      className="whiteColor font13 pointer"
                      href="https://bluelighthealthcare.com/carbon_docs/Bluelight-Healthcare-Recruitment-Carbon-.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Recruitment Carbon
                    </a>
                  </li>
                  <li>
                    <a
                      className="whiteColor font13 pointer"
                      href="https://bluelighthealthcare.com/privacy_policy"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <Link
                      className="whiteColor font13 pointer"
                      to="About"
                      smooth
                      offset={-80}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="whiteColor font13 pointer"
                      to="contact"
                      smooth
                      offset={-80}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company
              <div>
                <h4
                  className="whiteColor font13"
                  style={{ marginBottom: "10px" }}
                >
                  Company
                </h4>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li>
                    <a className="whiteColor font13 pointer">Careers</a>
                  </li>
                  <li>
                    <a className="whiteColor font13 pointer">Blog</a>
                  </li>
                  <li>
                    <a className="whiteColor font13 pointer">Our Team</a>
                  </li>
                  <li>
                    <a className="whiteColor font13 pointer">FAQs</a>
                  </li>
                </ul>
              </div> */}

              {/* Legal */}
              <div>
                <h4
                  className="orangeColor font13"
                  style={{ marginBottom: "10px" }}
                >
                  Hours
                </h4>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li>
                    <a className="whiteColor font13 pointer">Mon. - 24hrs</a>
                  </li>
                  <li>
                    <a className="whiteColor font13 pointer">Tue. - 24hrs</a>
                  </li>
                  <li>
                    <a className="whiteColor font13 pointer">Wed. - 24hrs</a>
                  </li>
                  <li>
                    <a className="whiteColor font13 pointer">Thu. - 24hrs</a>
                  </li>
                  <li>
                    <a className="whiteColor font13 pointer">Fri. - 24hrs</a>
                  </li>
                  <li>
                    <a className="whiteColor font13 pointer">Sat. - 24hrs</a>
                  </li>
                  <li>
                    <a className="whiteColor font13 pointer">Sun. - 24hrs</a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4
                  className="orangeColor font13"
                  style={{ marginBottom: "10px" }}
                >
                  Contact Us
                </h4>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li className="whiteColor font13">📞 0208 233 2999</li>
                  <li className="whiteColor font13">✉️ info@bluelighthealthcare.com</li>
                  <li className="whiteColor font13">
                    📍 CEME Campus, Marsh Way, Rainham RM13 8EU, United Kingdom
                  </li>
                </ul>
              </div>
            </div>
          </InnerWrapper>

          {/* Bottom Bar */}
          <div className="container">
            <div className="container">
              <div
                style={{
                  paddingBottom: "20px",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                <StyleP className="whiteColor font15">
                  © {getCurrentYear()} -{" "}
                  <span className="whiteColor font15">
                    Bluelight Healthcare Services
                  </span>{" "}
                  | All Rights Reserved
                </StyleP>

                <StyleP
                  className="whiteColor font13"
                  style={{ marginTop: "5px" }}
                >
                  <a
                    className="orangeColor font12 pointer"
                    href="https://esabie.vercel.app/"
                  >
                    Developed and Maintained by Esabie Consult. 020 185 4694
                  </a>
                </StyleP>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;
