import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="lightBg">
        <div className="lightBg" style={{padding: '90px 0'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Feedback from External Professionals &amp; Families</h1>
            <p className="font13">
              Bluelight Healthcare has been priviledged to provide a wide range of individuals and families across 
              Bedfordshire, working in partnership with commissioners to deliver high-quality, person-centered care.
              <br />
              Below are anonymised accounts from existing commissioners, families, and patients.
            </p>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div>
        <div className="container">
          <HeaderInfo>
            <br /><br />
            <h1 className="font40 extraBold" style={{ textDecoration: "underline" }}>News</h1>
            
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="CEO of the Year 2021-Essex"
                text="Albert Kwachie, CEO of Bluelight Healthcare Recruitment wins CEO or the year 2021-Essex...
                      Read more here"
                tag="Award"
                action={() => window.location.href = "https://www.ceo-review.com/issues/issue-10-2021/34/"}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="NHS Dental Recovery Plan"
                text="NHS dentistry plans aim to improve access, restore services, and boost children's oral health.
                Read more here"
                tag="NHS"
                action={() => window.location.href = "https://www.england.nhs.uk/publication/our-plan-to-recover-and-reform-nhs-dentistry/"}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Children's Home COMING SOON!!"
                text="Louisa's Children's Home COMING SOON!!! Further details to be provided soon."
                tag="company"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="NHS under huge strain as A&Es turn away ambulances"
                text="Hospitals in England are overwhelmed, causing ambulance diversions and long wait times in A&E departments."
                tag="BBC"
                action={() => window.location.href = "https://www.bbc.com/news/health-61023908"}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="NHS delivers one million spring booster vaccines"
                text="Over one million people have received the NHS COVID-19 spring booster within two weeks of its launch, with the vaccination drive urging vulnerable patients to book their shots promptly."
                tag="NHS"
                action={() => window.location.href = "https://www.england.nhs.uk/2022/04/nhs-delivers-one-million-spring-booster-vaccines/"}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Refer Now"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="company"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          {/* <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div> */}
        </div>
      </div>
     
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;