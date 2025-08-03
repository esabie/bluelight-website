import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="&quot;Bluelight’s response time was exceptional. Within hours, we had staff on site who understood
                the child’s needs and worked in line with safeguarding expectations. It made a real difference
                during a difficult weekend.&quot;"
            author="Emergency Duty Social Worker"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="&quot;What stood out was the professionalism, transparency, and ability to stabilise very high-risk
                cases in unregulated settings. We felt reassured every step of the way.&quot;"
            author="Local Authority Commissioner"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="&quot;The referral process is simple and efficient. The team communicated updates daily and attended
                all required reviews, even at short notice.&quot;"
            author="Children’s Services Placement Officer"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."
            author="Ralph Waldo Emerson"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."
            author="Ralph Waldo Emerson"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."
            author="Ralph Waldo Emerson"
          />
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
