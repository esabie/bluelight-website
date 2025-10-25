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
              From our earliest days, our focus has never shifted:{" "} care should always be personal,
              responsive, and human. <br />
              <br />
              We believe that great care starts with great people. That is why we invest heavily in sourcing,
              training, and supporting the best local talent, from registered nurses and support workers to crisis
              response teams and homecare specialists. Our staff are not just highly skilled, they are deeply
              committed to making a difference in every shift, every home, and every individual they support. <br />
              <br />
              Whether we are responding to an urgent call for overnight support, mobilising a team for a
              vulnerable child in crisis, or helping a family care for a loved one at home, we show up with
              purpose, professionalism, and compassion.  <br />
              <br />
              We do not see ourselves as just a provider. We see ourselves as partners in care. Our strength
              lies in our people, and our commitment is to always act in service of those who trust us with their
              most important needs. <strong> Bluelight</strong> is proud to work alongside NHS trusts, local authorities, care homes, and private
              individuals to deliver safe, dignified, and high-quality care, wherever and whenever it is needed
              most.<br />
              <br />
              <em>“The best way to find yourself is to lose yourself in the service of others.”</em> – Mahatma Gandhi <br />
              <br />
            </p>

            <h1 className="font20 extraBold">WHAT DRIVES US</h1>
            <p className="font15">
              At Bluelight, we do not just provide healthcare services we live and breathe them. With years of
              frontline experience across both clinical and community settings, we understand the real-world
              challenges that define modern care delivery. From the fast-paced urgency of hospital wards to
              the quiet, complex needs of individuals in their own homes, we recognise that no two care
              environments and no two people are ever the same. <br />
              <br />
              Our nurses, support workers, and homecare professionals are more than just highly trained, they
              are compassionate, resilient, and deeply committed to making a meaningful difference. They are
              the heartbeat of Bluelight and the reason so many families, commissioners, and clinical teams
              place their trust in us. We also understand that good care is not just about clinical skill, it is about listening, adapting, and
              being truly present. That is why we do not believe in one-size-fits-all solutions. We tailor every
              package, every placement, and every interaction around the person, their preferences, and their
              goals.<br />
              <br />
              Whether it is a few hours of companionship each week, complex support in the home, or round-
              the-clock staffing for a young person in crisis our approach is the same: responsive, respectful,
              and rooted in real care.
              This is what person-centred support means to us, and it is what we deliver, every single day.<br />
              <br />

            <h1 className="font20 extraBold">Our Commitment to Quality &amp; Safety</h1>
              <p>&bull; All staff are enhanced DBS checked.</p>
              <p>&bull; We maintain a robust training and supervision framework.</p>
              <p>&bull; We regularly assess and update staff skills to match client needs.</p>
              <p>&bull; We are registered with the Care Quality Commission (CQC), and are currently rated good.</p>

              <br />
              Our clients include local authorities, NHS partners, private hospitals, and families who trust us to
              deliver quality care every time.<br />
              <br />

            <h1 className="font20 extraBold">OUR MISSION</h1>
              To change lives through high-quality, compassionate, and clinically safe care, delivered by
              people who truly care. <br /> We achieve this by investing in training, empowering our teams, and working in partnership with
              service users, families, and the wider care system.<br />
              <br />

            <h1 className="font20 extraBold">OUR VISION</h1>
              To be a leading provider of flexible, trusted healthcare and homecare services, respected for our
              quality, compassion, and the outcomes we deliver.<br />
              <br />

            <h1 className="font20 extraBold">OUR CORE VALUES</h1>
              <p>&bull; <strong> Compassion:</strong> We lead with empathy and kindness.</p>
              <p>&bull; <strong> Accountability:</strong> We take responsibility for the care we deliver.</p>
              <p>&bull; <strong> Respect: </strong> We honour every individual’s dignity, rights, and voice.</p>
              <p>&bull; <strong> Excellence:</strong> We strive for outstanding outcomes in all we do.</p>
              <p>&bull; <strong>Integrity: </strong> We act with honesty and transparency.</p>
              <p>&bull; <strong> Teamwork: </strong> We work collaboratively across disciplines and communities.</p>
              <p>&bull; <strong> Inclusivity: </strong> We celebrate diversity and ensure care is culturally safe and accessible to all</p>
              <br /> <br />


            <h1 className="font40 extraBold">OUR SERVICES</h1>

            <h1 className="font20 extraBold">SPECIALIST RECRUITMENT</h1>

            <p className="font15">
              <strong> Bluelight Healthcare</strong>specialises in sourcing, vetting, and placing highly skilled healthcare professionals 
              to meet the evolving needs of the NHS, local authorities, private healthcare organisations, and community services.<br />
              <br />
              We understand that staffing is not simply about filling vacancies, it is about ensuring the right fit for the client, the
                team, and the individual being supported. That is why our recruitment process is robust and values-driven:<br />
              <br />
              <p> <strong> Comprehensive Screening:</strong> Full DBS checks, reference verification, qualification validation, and right-to-
                work compliance.</p>
              <p><strong> Skills & Competency Assessment:</strong> Each candidate undergoes clinical skills evaluations and scenario-
                based interviews to ensure they can handle real-world care situations.</p>
              <p><strong> Specialist Pool: </strong> Access to Registered Nurses (RGN, RMN, RNLD), Support Workers, Complex Care
                Practitioners, and professionals trained in mental health, autism, palliative care, and paediatric support.</p>
              <p><strong> Flexible Engagement:</strong> We strive for outstanding outcomes in all we do.</p>
              <br />

              <strong>Key Advantage: </strong> Our talent network is ready to deploy within hours, ensuring continuity of care even in high-
                pressure or crisis situations. <br />
              <br />
              
            </p>

            <h1 className="font20 extraBold">HOME CARE SERVICES</h1>

            <p className="font15">
              At <strong> Bluelight Healthcare</strong> we believe that home is more than just a place, it is a source of comfort, familiarity, and
              security. Our bespoke home care packages are designed to allow individuals to remain where they feel most at
              ease while receiving the right level of professional care and support to meet their physical, emotional, and social
              needs. <br />
              Every care plan is tailored to the person’s unique health requirements, lifestyle preferences, and personal goals,
              ensuring the right balance of independence and support.<br />
              We understand that staffing is not simply about filling vacancies, it is about ensuring the right fit for the client, the
                team, and the individual being supported. That is why our recruitment process is robust and values-driven:<br />
              <br />

              <h1 className="font18 extraBold">Our Services Include:</h1>

              <strong> Personal Care</strong> <br />
              We support with all aspects of daily living, including washing, dressing, grooming, continence care, and mobility
              assistance. Our approach is always respectful and dignified, ensuring that care is provided in a way that promotes
              comfort and independence.<br />
              <br />
              <strong> Medication Support</strong> <br />
              From simple prompts to complex regimes, we ensure medicines are administered safely and on time. Our staff are
              trained in specialist techniques such as PEG feeding, tracheostomy care, and epilepsy management, ensuring
              clinical safety in the home environment.<br />
              <br />
              <strong> Health Monitoring</strong> <br />
              We provide regular checks of vital signs, blood sugar levels, and overall wellbeing, as well as wound care and post-
              operative support. Our trained carers and nurses work closely with healthcare professionals to ensure early detection of 
              any changes in health.<br />
              <br />
              <strong> Companionship & Social Support</strong> <br />
              We understand the importance of mental wellbeing and social connection. Our carers offer companionship, help
              clients stay engaged in hobbies, accompany them to appointments or social activities, and encourage participation
              in community life, helping to combat loneliness and isolation.<br />
              <br />
              <strong> What Sets Us Apart:</strong> <br />
              We take a holistic, team-based approach to home care. Our carers work hand-in-hand with
              families, GPs, district nurses, and allied health professionals to ensure seamless communication and continuity of
              care.<br />
              <br />

              <h1 className="font18 extraBold">We pride ourselves on being:</h1>

              <p>&bull; <strong> Flexible</strong> - adapting care as needs change.</p>
              <p>&bull; <strong> Responsive</strong> - able to step in quickly when extra support is needed..</p>
              <p>&bull; <strong> Person-Centred</strong> - always guided by the individual’s preferences, dignity, and independence.</p>
              <p>&bull; <strong> Clinically Led</strong> - with oversight from experienced healthcare professionals to maintain safety and quality.</p>

              With <strong> Bluelight Healthcare,</strong> clients and families have peace of mind knowing that care is safe, compassionate, and
              truly personalised.<br />
              <br />


              <h1 className="font18 extraBold">EMERGENCY CRISIS RESPONSE</h1>

              When the unexpected happens, time matters. Care arrangements can break down suddenly, hospital discharges
              can be arranged at short notice, and safeguarding risks can escalate in moments. In these critical situations,
              Bluelight Healthcare’s Emergency Crisis Response Team is ready to act 24/7, nationwide.<br />
              We are trusted by local authorities, NHS teams, and private clients to respond rapidly and effectively when urgent
              intervention is needed. Our goal is not just to fill a gap, but to stabilise the situation, protect the individual, and
              create a clear path forward. <br />
              <br />

              <h1 className="font18 extraBold">When We Step In</h1>
                
                Our crisis service provides immediate solutions for:<br />
                <br />

              <p>&bull; <strong> Sudden Hospital Discharges</strong> – Rapid mobilisation of home or community-based care to prevent delayed
                discharges or readmissions.</p>
              <p>&bull; <strong> Breakdown in Care Arrangements </strong> – Whether due to illness, absence, or breakdown of a placement, we
                ensure no one is left without support.</p>
              <p>&bull; <strong> Safeguarding Concerns</strong> – Urgent protective care when an individual’s safety is at risk, ensuring they are
                removed from harm’s way and stabilised.</p>
              <p>&bull; <strong> Children’s Emergency Placements</strong> – Immediate safe placements for children and young people,
                including those with complex behavioural, emotional, or clinical needs.</p>
              <br /> <br />

              <h1 className="font18 extraBold">Our Crisis Response Capability </h1>

                We bring structure, safety, and compassion to even the most challenging situations: <br />
                <br />
              <p>&bull; <strong> 24/7 On-Call Coordination</strong> - Our operations team can mobilise fully vetted and trained staff within hours.</p>
              <p>&bull; <strong>Clinically Led Assessment </strong> – Upon arrival, we carry out a swift yet thorough risk and needs assessment to
                ensure immediate safety and stability.</p>
              <p>&bull; <strong> Short-Term Intensive SupportShort-Term Intensive Support</strong> – We provide high-level care in the moment, then work to transition the
                individual into a sustainable long-term arrangement.</p>
              <p>&bull; <strong> Specialist Expertise</strong> – Our teams are trained in Positive Behaviour Support (PBS), de-escalation
                techniques, and trauma-informed practice, enabling us to work effectively in high-stress, high-risk environments.</p>
                <br />

              <h1 className="font18 extraBold">Our Approach </h1>

                We understand that emergencies don’t just require speed, they demand sensitivity, professionalism, and the right
                skill set. That’s why every crisis response is overseen by experienced care managers and supported by a clinically
                led governance framework. <br />
                <br /> <br />

                <strong> We focus on:</strong> <br /> <br/>

              <p>&bull; <strong> Protecting dignity</strong> in moments of vulnerability. </p>
              <p>&bull; <strong> Reducing risk </strong> through immediate, effective action.</p>
              <p>&bull; <strong> Restoring stability</strong> so individuals and families can move forward with confidence.</p>
              <br/>

                With <strong>Bluelight Healthcare</strong>, you have a crisis response partner who is always ready, always professional, and always
                committed to turning urgent situations into safe, manageable outcomes. <br /> <br /> <br />

              <h1 className="font18 extraBold">SUPPORTED LIVING SERVICES </h1>

                At Bluelight Healthcare, we believe that everyone has the right to live in a safe, comfortable, and empowering
                environment, regardless of their support needs. Our Supported Living services are built around individual choice,
                dignity, and independence, providing the right level of assistance so people can live the life they want, on their own
                terms. <br />
                <br />

                We work with adults and young people with a wide range of needs, including: <br />

              <p>&bull; Learning disabilities </p>
              <p>&bull; Autism spectrum conditions </p>
              <p>&bull; Mental health conditions </p>
              <p>&bull; Physical disabilities </p>
              <p>&bull; Complex health needs </p> <br/>

                Our approach combines flexibility, person-centred planning, and skilled support to help people live fulfilling,
                meaningful lives in their own home or in shared accommodation.<br /> <br/> <br/>

              <h1 className="font18 extraBold">What We Provide </h1>

                <strong> Flexible Support Models</strong> <br />

                We offer a range of tailored support options, from 24/7 on-site staffing and waking night cover to planned daily
                visits. This ensures each individual gets the level of support they need while maintaining their independence. <br />
                <br />

                <strong> Life Skills Development</strong> <br />

                We help people develop essential daily living skills such as cooking, budgeting, shopping, self-care, and travel
                training. Our aim is to build confidence and resilience, enabling individuals to take greater control of their own lives. <br />
                <br />

                <strong> Tenancy & Housing Support</strong> <br />
  
                Our teams assist with maintaining tenancies, liaising with landlords, and managing household responsibilities. We
                work to prevent tenancy breakdowns and ensure individuals feel secure in their home. <br />
                <br />

                <strong> Social Inclusion</strong> <br />
  
                We actively promote community involvement, helping individuals build friendships, join local activities, and access
                education or employment opportunities. Social participation is key to emotional wellbeing and personal growth. <br />
                <br />

                <strong> Health & Wellbeing Support</strong> <br />
  
                We help coordinate healthcare needs, from facilitating GP and therapy appointments to supporting physical activity
                programmes. Our approach addresses both physical and mental health to ensure holistic wellbeing. <br />
                <br /> <br />

                <h1 className="font18 extraBold">Our Ethos </h1>
                We co-produce support plans with each person, their family, and the professionals involved in their care. This
                collaborative approach ensures the individual’s voice is at the centre of every decision. <br />
                <br />

                Our focus is on: <br />

              <p>&bull; <strong> Choice</strong> – Giving people control over their own support. </p>
              <p>&bull; <strong> Ability, Not Disability </strong> – Building on strengths and potential rather than limitations. </p>
              <p>&bull; <strong> Fostering Independence</strong> – Supporting people to achieve their personal goals, whether that is managing their own home, starting a job, or taking part in community life. </p>
              
              <br />

                With <strong> Bluelight Healthcare, </strong> supported living isn’t just about providing care, it’s about unlocking potential and creating a life that’s safe, fulfilling, and truly independent.<br /> <br/>
              
            </p>

              {/*<h1 className="font20 extraBold">ABOUT US</h1>
            <h1 className="font40 extraBold">Our Story - Passionate About People. Committed to Care.</h1>
            <p className="font15"></p> */}
            </p>
          </HeaderInfo>
          {/*<ServiceBoxRow className="flex">
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
          </ServiceBoxRow> */}
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