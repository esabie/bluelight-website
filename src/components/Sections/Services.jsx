import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";

export default function Services() {
  return (
    <Wrapper id="services">
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font20 extraBold">ABOUT US</h1>
            <h1 className="font40 extraBold">Our Story - Passionate About People. Committed to Care.</h1>
            <p className="font15">
              At <strong> Bluelight Healthcare</strong>, people are at the heart of everything we do. <br />
              <br />
              Established in 2018, <strong>Bluelight </strong> was born out of a clear vision: to bridge the gap between
              exceptional healthcare professionals and the individuals and organisations who rely on them.
              What began as a recruitment agency has since evolved into a dynamic, multi-service care
              provider, offering both clinical staffing solutions and CQC-regulated homecare and crisis support
              across the UK. <br />
              <br />
              From our earliest days, our focus has never shifted:{" "} <strong> care should always be personal,
              responsive, and human. </strong> <br />
              <br />
              We believe that great care starts with great people. That’s why we invest heavily in sourcing,
              training, and supporting the best local talent, from registered nurses and support workers to crisis
              response teams and homecare specialists. Our staff aren’t just highly skilled, they’re deeply
              committed to making a difference in every shift, every home, and every individual they support. <br />
              <br />
              Whether we’re responding to an urgent call for overnight support, mobilising a team for a
              vulnerable child in crisis, or helping a family care for a loved one at home, <strong> we show up with
              purpose, professionalism, and compassion.</strong>  <br />
              <br />
              We don’t see ourselves as just a provider. We see ourselves as partners in care. Our strength
              lies in our people, and our commitment is to always act in service of those who trust us with their
              most important needs. <strong> Bluelight</strong> is proud to work alongside NHS trusts, local authorities, care homes, and private
              individuals to deliver safe, dignified, and high-quality care, wherever and whenever it’s needed
              most.<br />
              <br />
              <em>“The best way to find yourself is to lose yourself in the service of others.”</em> – Mahatma Gandhi <br />
              <br />
            </p>

            <h1 className="font20 extraBold">WHAT DRIVES US</h1>
            <p className="font15">
              At Bluelight, we don’t just provide healthcare services we live and breathe them. With years of
              frontline experience across both clinical and community settings, we understand the real-world
              challenges that define modern care delivery. From the fast-paced urgency of hospital wards to
              the quiet, complex needs of individuals in their own homes, we recognise that no two care
              environments and no two people are ever the same. <br />
              <br />
              Our nurses, support workers, and homecare professionals are more than just highly trained—they
              are compassionate, resilient, and deeply committed to making a meaningful difference. They are
              the heartbeat of Bluelight and the reason so many families, commissioners, and clinical teams
              place their trust in us. We also understand that good care is not just about clinical skill, it’s about listening, adapting, and
              being truly present. That’s why we don’t believe in one-size-fits-all solutions. We tailor every
              package, every placement, and every interaction around the person, their preferences, and their
              goals.<br />
              <br />
              Whether it’s a few hours of companionship each week, complex support in the home, or round-
              the-clock staffing for a young person in crisis our approach is the same: <strong>responsive, respectful,
              and rooted in real care. </strong>
              This is what person-centred support means to us, and it’s what we deliver, every single day.<br />
              <br />

            <h1 className="font20 extraBold">Our Commitment to Quality &amp; Safety</h1>
               All staff are <strong>enhanced DBS checked </strong><br />
               We maintain a robust <strong> training and supervision framework</strong> <br />
               We regularly assess and update staff skills to match client needs <br />
               We are <strong>registered with the Care Quality Commission (CQC) </strong>, and our latest inspection
              reports are publicly available at www.cqc.org.uk.<br />
              <br />
              Our clients include local authorities, NHS partners, private hospitals, and families who trust us to
              deliver quality care every time.<br />
              <br />

            <h1 className="font20 extraBold">OUR MISSION</h1>
              To change lives through high-quality, compassionate, and clinically safe care—delivered by
              people who truly care. <br /> We achieve this by investing in training, empowering our teams, and working in partnership with
              service users, families, and the wider care system.<br />
              <br />

            <h1 className="font20 extraBold">OUR VISION</h1>
              To be a leading provider of flexible, trusted healthcare and homecare services—respected for our
              quality, compassion, and the outcomes we deliver.<br />
              <br />

            <h1 className="font20 extraBold">OUR CORE VALUES</h1>
               <strong> Compassion:</strong> We lead with empathy and kindness.<br />
               <strong> Accountability:</strong> We take responsibility for the care we deliver.<br />
               <strong> Respect: </strong> We honour every individual’s dignity, rights, and voice.<br />
               <strong> Excellence:</strong> We strive for outstanding outcomes in all we do.<br />
               <strong> Integrity: </strong> We act with honesty and transparency.<br />
               <strong> Teamwork: </strong> We work collaboratively across disciplines and communities.<br />
               <strong> Inclusivity: </strong> We celebrate diversity and ensure care is culturally safe and accessible to all.<br />
              <br /> <br />


            <h1 className="font40 extraBold">OUR SERVICES</h1>

              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="roller"
                title="Specialist Recruitment"
                subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="Home care services"
                subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="Emergency Crisis Response"
                subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox icon="printer" title="Supported living Services" subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor." />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        {/*<div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font15 semiBold">About US</h4>
                <h2 className="font30 extraBold">Our Story - Passionate About People. Committed to Care.</h2>
                <p className="font12">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                  diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                </p>
                <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0"}}>
                  <div style={{ width: "190px" }}>
                    <FullButton title="Get Started" action={() => alert("clicked")} />
                  </div>
                  <div style={{ width: "190px", marginLeft: "15px" }}>
                    <FullButton title="Contact Us" action={() => alert("clicked")} border />
                  </div>
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={AddImage2} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={AddImage3} alt="office" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={AddImage4} alt="office" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div> */}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;