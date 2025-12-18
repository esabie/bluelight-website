import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import heroImg from "../../assets/img/specialistt-section.jpg";
import docImg from "../../assets/img/recruitment.jpg";
import nurseImg from "../../assets/img/nursing.jpg";
import primaryImg from "../../assets/img/primaryCare.jpg";
import alliedImg from "../../assets/img/allied.jpg";
import registerImg from "../../assets/img/register2.jpg";
import referImg from "../../assets/img/refer.jpg";

import "../OurCandidates.css";

/* =========================
   MODAL COMPONENT
========================= */
function CandidateModal({ isOpen, onClose, title, content }) {
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <h2 className="modal-title">{title}</h2>
        <p className="modal-content">{content}</p>
      </div>
    </div>
  );
}

/* =========================
   CARD COMPONENT
========================= */
function CandidateCard({ img, title, summary, onReadMore }) {
  return (
    <div className="candidate-card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{summary}</p>
      <button className="read-more-btn" onClick={onReadMore}>
        Read More →
      </button>
    </div>
  );
}

/* =========================
   PAGE COMPONENT
========================= */
export default function OurCandidates() {
  const [modalData, setModalData] = useState(null);
  const navigate = useNavigate();

  const openModal = (title, content) =>
    setModalData({ title, content });

  const closeModal = () => setModalData(null);

  return (
    <div className="candidates-page">
      {/* HERO */}
      <section
        className="candidates-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay">
          <h1>Our Candidates</h1>
          <p>
            Home <span>›</span> Our Candidates
          </p>
        </div>
      </section>

      {/* CARDS */}
      <section className="candidates-section">
        <div className="candidates-grid">
          <CandidateCard
            img={docImg}
            title="Doctors and Consultants"
            summary="With inspiration from our Medical Director, we work tactically 
            with NHS & Private Trusts to place doctors in posts that match their 
            exclusive skills and desires with the demands of the client."
            onReadMore={() =>
              openModal(
                "Doctors and Consultants",
                "With inspiration from our Medical Director, we work tactically with NHS & Private Trusts to place doctors in posts that match their exclusive skills and desires with the demands of the client. Better career choices Doctors of all grades and specialties are recruited into career-boosting roles throughout the UK & Ireland. We supply medical locums to a large number of Private clients, you get first choice of jobs across the country. Prolonged professional development Our aim is to help you achieve your professional goals and to thrive in a medical role that compliments and enhances your CV. Whether you are a Junior Doctor looking to gain experience, or a senior or Specialist Doctor looking to expand your medical portfolio, we are pleased to help. Financial welfares Aside the recent budget cuts within medical industry, we continue to offer highly competitive rates and fantastic incentives for locum medical professionals, including a referral reward for any recommended GP, NMNC, doctor or nurse that works with us. Doctor revalidation As a Bluelight agency employee, you have access to our revalidation support service. We have a dedicated revalidation body here to assist our doctors with appraisals and revalidations. To arrange an appointment with one of our experts, or for further information, please send your request to: info@bluelighthealthcare.com International opportunities Our international doctor service offers exciting and exclusive medical opportunities globally. Travel with your profession and choose from thousands of overseas doctor posts, both inside and outside the EU. Speak to us for further information, as well as expert advice on the advantages and disadvantages of working abroad. Fast-track compliance We understand that compliance can be frustrating, which is why we have a dedicated medical team working together to keep our processes as simple and seamless as possible. Your compliance procedures begin as soon as you register with us, so providing your documents are in order, your specialities expect to be ready for work within 2-5 days. We offer doctors incomparable positions in: A&E Medicine Surgery Psychiatry Obstetrics & Gynaecology Paediatrics & Neonates Anaesthetics And many others.. Register as a Bluelight doctor Your impeccable medical role is just a small step away. To get started, simply complete our fast-track registration form online. Register now"
              )
            }
          />

          <CandidateCard
            img={nurseImg}
            title="Nursing & Healthcare"
            summary="We offer exclusive NHS & private nursing opportunities through a vast range of priority contracts, which span all nursing and healthcare professions throughout the UK."
            onReadMore={() =>
              openModal(
                "Nursing & Healthcare",
                "We offer exclusive NHS & private nursing opportunities through a vast range of priority contracts, which span all nursing and healthcare professions throughout the UK. We offer, flexible availabilities, and we acknowledge your commitments, which is why we strive to keep the recruitment process as seamless and simple as possible. Decide your shift patterns, hours and locations that fit around your regular obligations. Endless Jobs We supply to a large number of NHS and Private clients, which means that we have access to thousands of nursing roles, hours and locations across the UK & Ireland for our cherished nurses. Career developments We are here to match your skills and aspirations with the demands of our clients. We can assist you to build your career plan, develop your skills and achieve your professional goals. Objective pay rates We pride ourselves to support NHS Improvement in enforcing fair rates for locum professionals. Free Training & Support We provide free in-house mandatory training, career development and revalidation support. Extra incentives Stay updated with the latest nursing events, training news, rewards and competitions on our social media channels. Exclusive opportunities in - Accident & Emergency General Nursing - Medical/Surgical Paediatrics & Neonates Intensive Care/Progressive Care Mental Health Community Nursing HM Prison Service Primary Care Care Homes Find your ideal nursing job. Apply directly for any of our latest private and NHS nursing and healthcare assistant vacancies, updated daily on CV-Library. Start your search today. Start applying!"
              )
            }
          />

          <CandidateCard
            img={primaryImg}
            title="Primary Care"
            summary="We recruit the top medical and healthcare staff in the country into the NHS and Private Health Care organisations, including GP Surgeries, Out of Hours (OOH), Urgent Care (UCC) / Walk-in Clinics."
            onReadMore={() =>
              openModal(
                "Primary Care",
                "GPs, Nurse Practitioners, Practice Nurses. We offer exclusive NHS & private nursing opportunities through a vast range of priority contracts, which span across all nursing and healthcare professions throughout the UK. We offer, flexible availabilities, we acknowledge your commitments, which is why we strive to keep the recruitment process as seamless and simple as possible. Decide your shift patterns, hours and locations that fit around your regular obligations. Endless Jobs We supply to a large number of NHS and Private clients, which means that we have access to thousands of nursing roles, hours and locations across the UK & Ireland to our cherished nurses. Career developments We are here to match your individual skills and aspirations with the demands of our clients. We can assist you to build your career plan, develop your skills and achieve your professional goals. Objective pay rates We pride ourselves to support NHS Improvement in enforcing fair rates for locum professionals. Free Training & Support We provide free in-house mandatory training, career development and revalidation support. Extra incentives Stay updated with the latest nursing events, training news, rewards and competitions on our social media channels. Exclusive opportunities in: - Accident & Emergency General Nursing - Medical/Surgical Paediatrics & Neonates Intensive Care/Progressive Care Mental Health Community Nursing HM Prison Service Primary Care Care Homes Find your ideal nursing job. Apply directly for any of our latest private and NHS nursing and healthcare assistant vacancies, updated daily on CV-Library. Start your search today. Start applying!"
              )
            }
          />

          <CandidateCard
            img={alliedImg}
            title="Allied Health"
            summary="Allied Health Professionals have unrivalled job opportunities, both within the NHS and Private Sectors. We are looking to be in partnership with CCS (formerly GPS), CPP (formerly LPP) and HTE."
            onReadMore={() =>
              openModal(
                "Allied Health",
                "We offer exclusive NHS & private nursing opportunities through a vast range of priority contracts, which span across all nursing and healthcare professions throughout the UK. We offer, flexible availabilities, we acknowledge your commitments, which is why we strive to keep the recruitment process as seamless and simple as possible. Decide your shift patterns, hours and locations that fit around your regular obligations. Endless Jobs We supply to a large number of NHS and Private clients, which means that we have access to thousands of nursing roles, hours and locations across the UK & Ireland to our cherished nurses. Career developments We are here to match your individual skills and aspirations with the demands of our clients. We can assist you to build your career plan, develop your skills and achieve your professional goals. Objective pay rates We pride ourselves to support NHS Improvement in enforcing fair rates for locum professionals. Free Training & Support We provide free in-house mandatory training, career development and revalidation support. Extra incentives Stay updated with the latest nursing events, training news, rewards and competitions on our social media channels. Exclusive opportunities in: - Accident & Emergency General Nursing - Medical/Surgical Paediatrics & Neonates Intensive Care/Progressive Care Mental Health Community Nursing HM Prison Service Primary Care Care Homes Find your ideal nursing job. Apply directly for any of our latest private and NHS nursing and healthcare assistant vacancies, updated daily on CV-Library. Start your search today. Start applying!"
              )
            }
          />

          <CandidateCard
            img={registerImg}
            title="Register"
            summary="Quick registration. Register with us today and start your career as a locum medical and healthcare professional. Simply CLICK the link below and let us take care of the rest."
            onReadMore={() => navigate("/register")}
          />

          <CandidateCard
            img={referImg}
            title="Refer a Friend"
            summary="Your recommendations help us to source the best candidates, which is why we offer a minimum of £150 per referral and up to £500 for senior specialists."
            onReadMore={() => navigate("/refer-a-friend")}
          />
        </div>
      </section>

      {/* MODAL */}
      <CandidateModal
        isOpen={!!modalData}
        onClose={closeModal}
        title={modalData?.title}
        content={modalData?.content}
      />
    </div>
  );
}
