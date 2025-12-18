import React from "react";
import "../LiveJobs.css";
import { useNavigate } from "react-router-dom";
import HeroImg from "../../assets/img/aboutt-hero.jpg"; // replace with your image

export default function LiveJobs() {
  const navigate = useNavigate();
  const jobs = [
    {
      title: "Band 5 Nurse (RGN, A&E, RMN, PAEDIATRIC)",
      location: "Conquest Hospital, TN37 7RD",
      role: "Nurse",
      pay: "Very competitive, contact us for details",
    },
    {
      title: "Band 5 Nurse (RGN, A&E, RMN, PAEDIATRIC)",
      location: "Eastbourne District General Hospital, BN21 2UD",
      role: "Nurse",
      pay: "Very competitive, contact us for details",
    },
    {
      title: "Band 5 Nurse (RGN, A&E, RMN, PAEDIATRIC)",
      location: "Bexhill Hospital, TN40 2DZ",
      role: "Nurse",
      pay: "Very competitive, contact us for details",
    },
    {
      title: "Care Staff Needed",
      location: "SS11",
      role: "Support Work",
      pay: "Contact us for details",
    },
    {
  title: "Care Staff Needed",
  location: "Chichester, PO19",
  role: "Waking Night",
  pay: "£ – contact us for details",
},
{
  title: "Clinical Lead Nurse",
  location: "SW16",
  role: "Care",
  pay: "£ – contact us for details",
},
{
  title: "Care Staff Needed",
  location: "Bristol",
  role: "Care",
  pay: "£ – contact us for details",
},
{
  title: "Female Care Staff Driver Needed",
  location: "BN27",
  role: "Care",
  pay: "£ – contact us for details",
},

// --- ADDITIONAL JOBS ---
{
  title: "Male Live-in Carers Needed Urgently",
  location: "-",
  role: "Care",
  pay: "£ – contact us for details",
},
{
  title: "Tracheostomy Trained Carers Needed",
  location: "-",
  role: "Tracheostomy Care",
  pay: "£ – contact us for details",
},
{
  title: "Female Care Staff Needed",
  location: "RH15, Crawley",
  role: "Care",
  pay: "£ – contact us for details",
},
{
  title: "Care Staff Needed",
  location: "BN23",
  role: "Care",
  pay: "£ – contact us for details",
},
{
  title: "Support Workers Needed",
  location: "Worthing",
  role: "Support Work",
  pay: "£ – contact us for details",
},
{
  title: "Support Worker Needed",
  location: "RH1 10A",
  role: "Support Work",
  pay: "£ – contact us for details",
},
{
  title: "Care Staff & Nurse Needed",
  location: "Crawley",
  role: "Complex Care",
  pay: "£ – contact us for details",
},
{
  title: "Care Staff & Nurse Needed",
  location: "TN39",
  role: "Complex Care with Learning Disabilities",
  pay: "£ – contact us for details",
},
{
  title: "Care Staff Needed",
  location: "KT16 0PZ",
  role: "Care",
  pay: "£ – contact us for details",
},
{
  title: "Care Workers Needed",
  location: "NW9, Brent",
  role: "Various Hours",
  pay: "£ – contact us for details",
},
{
  title: "Care Staff Needed",
  location: "GU51 Fleet",
  role: "Carer",
  pay: "£ – contact us for details",
},
{
  title: "Female Care Staff Needed",
  location: "BN2 Brighton",
  role: "Care",
  pay: "£ – contact us for details",
},

  ];

  return (
    <section className="jobs-page">

      {/* HERO */}
      <div
        className="jobs-hero"
        style={{ backgroundImage: `url(${HeroImg})` }}
      >
        <div className="hero-overlay">
          <h1>Live Jobs</h1>
          <p>
            Home <span>›</span> Live Jobs
          </p>
        </div>
      </div>

      {/* SEARCH BAR */}
      <div className="jobs-search">
        <input type="text" placeholder="Search by Keyword of Job title" />
        <input type="text" placeholder="Location" />
        <button>Search</button>
      </div>

      {/* JOB LIST */}
      <div className="jobs-grid">
        {jobs.map((job, index) => (
          <div className="job-card" key={index}>
            <h3>{job.title}</h3>

            <p><strong>📍</strong> {job.location}</p>
            <p><strong>🕒</strong> {job.role}</p>
            <p><strong>£</strong> {job.pay}</p>

            <button className="more-btn" onClick={() => navigate(`/job=1`)}>More Info</button>
          </div>
        ))}
      </div>
    </section>
  );
}
