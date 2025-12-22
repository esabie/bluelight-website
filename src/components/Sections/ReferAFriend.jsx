import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaBriefcase,
} from "react-icons/fa";

import heroBg from "../../assets/img/join-us-bg.jpg";
import infoImg from "../../assets/img/refer.jpg";
import "../ReferAFriend.css";

export default function ReferAFriend() {
  const [form, setForm] = useState({
    yourName: "",
    yourPhone: "",
    yourEmail: "",
    friendName: "",
    specialty: "",
    friendEmail: "",
    friendPhone: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".refer-card")?.classList.add("show");
    }, 120);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* =========================
     VALIDATION
  ========================= */
  const validate = () => {
    const e = {};
    if (!form.yourName) e.yourName = "Your name is required";
    if (!form.yourPhone) e.yourPhone = "Phone number required";
    if (!form.yourEmail) e.yourEmail = "Email required";
    if (!form.friendName) e.friendName = "Friend’s name required";
    if (!form.friendEmail) e.friendEmail = "Friend’s email required";
    return e;
  };

  /* =========================
     SUBMIT (EMAILJS)
  ========================= */
  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      return;
    }

    setErrors({});
    setSending(true);

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          ...form,
        },
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        setSubmitted(true);
        setSending(false);
      })
      .catch(() => {
        alert("Submission failed. Please try again.");
        setSending(false);
      });
  };

  return (
    <div className="refer-page">
      {/* HERO */}
      <section
        className="refer-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-overlay">
          <h1>Refer A Friend</h1>
          {/* <p>
            Home <span>›</span> Refer A Friend
          </p> */}
        </div>
      </section>

      {/* CONTENT */}
      <section className="refer-wrapper">
        <div className="refer-card">
          {/* INFO */}
          <div className="refer-info">
            <img src={infoImg} alt="Referral" />
            <p>
              Your recommendations help us to source the best candidates, 
              which is why we offer a minimum of <strong>£150 </strong> 
              per referral and up to <strong>£500</strong> for senior 
              specialists. You can introduce Doctors, Nurses, Allied 
              Health Professionals, Health Science Staff and Teachers. 
              Making a referral is easy, simply complete the form below
              and we will contact you shortly.
            </p>
          </div>

          {/* FORM */}
          {submitted ? (
            <div className="success-message">
              ✅ Referral submitted successfully!
            </div>
          ) : (
            <form className="refer-form" onSubmit={handleSubmit}>
              <Input icon={<FaUser />} label="Your Name" name="yourName"
                value={form.yourName} onChange={handleChange} error={errors.yourName} />

              <Input icon={<FaPhone />} label="Your Phone No." name="yourPhone"
                value={form.yourPhone} onChange={handleChange} error={errors.yourPhone} />

              <Input icon={<FaEnvelope />} label="Your Email" name="yourEmail"
                value={form.yourEmail} onChange={handleChange} error={errors.yourEmail} />

              <Input icon={<FaUser />} label="Your Friend / Colleague’s Full Name" name="friendName"
                value={form.friendName} onChange={handleChange} error={errors.friendName} />

              <Input icon={<FaBriefcase />} label="Your Friend / Colleague’s Specialty" name="specialty"
                value={form.specialty} onChange={handleChange} />

              <Input icon={<FaEnvelope />} label="Your Friend / Colleague’s Email" name="friendEmail"
                value={form.friendEmail} onChange={handleChange} error={errors.friendEmail} />

              <Input icon={<FaPhone />} label="Your Friend / Colleague’s Phone No." name="friendPhone"
                value={form.friendPhone} onChange={handleChange} />

              <button
                type="submit"
                className="submit-btn"
                disabled={sending}
              >
                {sending ? "Submitting..." : "Submit"}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

/* INPUT */
function Input({ icon, label, name, value, onChange, error }) {
  return (
    <div className={`form-group ${error ? "error" : ""}`}>
      <label>{label}</label>
      <div className="input-wrapper">
        <span className="input-icon">{icon}</span>
        <input name={name} value={value} onChange={onChange} />
      </div>
      {error && <span className="error-text">{error}</span>}
    </div>
  );
}