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
    arrows: true,
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
            text="&quot;Bluelight Healthcare has consistently demonstrated professionalism, flexibility, and strong
            communication. Their willingness to adapt to complex and changing needs has been key to
            ensuring safe and positive care outcomes for some of our most vulnerable residents.&quot;"
            author="Local Authority Commissioner"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="&quot;Before support began, my son struggled with daily routines and often became distressed when
            leaving the house. The care team introduced structured activities, sensory support, and gentle
            encouragement. Within weeks, he became more confident in public settings, now enjoys
            community outings, and has built a trusting relationship with his regular carers.quot;"
            author="Family Testimonial 1 (Parent of a child with complex needs)"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="&quot;I was exhausted trying to manage my husband’s care alone. The team provided not just practical
            support, but emotional reassurance. They’ve helped him regain independence in personal care,
            improved his mobility through gentle exercises, and given me peace of mind knowing he’s safe
            and well looked after.&quot;"
            author="Family Testimonial 2 (Spouse of an adult with long-term health condition)"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="The carers respect my independence but are always there when I need them. Since starting the
            service, I’ve been able to attend social groups again, something I thought I’d lost forever. This
            has made a huge difference to my mental health and wellbeing."
            author="Patient Testimonial (Adult with physical disabilities):"
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
