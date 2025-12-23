import React from "react";
import styled from "styled-components";
import QuoteIcon from "../../assets/svg/Quotes";

export default function TestimonialBox({ text, author }) {
  return (
    <Wrapper>
      <QuoteWrapper>
        <QuoteIcon />
      </QuoteWrapper>

      <Text className="whiteColor font13">
        {text}
      </Text>

      <Author className="orangeColor font13">
        <em>{author}</em>
      </Author>
    </Wrapper>
  );
}

/* =========================
   STYLES
========================= */

const Wrapper = styled.div`
  width: 100%;
  background: #17164b;           /* darkBg */
  border-radius: 18px;           /* radius8 but smoother */
  padding: 40px 30px 30px;

  min-height: 360px;             /* 🔑 SAME HEIGHT */
  display: flex;                 /* 🔑 */
  flex-direction: column;        /* 🔑 */

  position: relative;
`;

const QuoteWrapper = styled.div`
  position: absolute;
  top: -22px;
  left: 30px;
`;

const Text = styled.p`
  line-height: 1.7;
  flex-grow: 1;                  
  margin-top: 20px;
`;

const Author = styled.p`
  margin-top: 20px;
  align-self: flex-end;
  font-style: italic;
`;
