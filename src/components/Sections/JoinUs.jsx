import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaBriefcase,
  FaFileAlt,
} from "react-icons/fa";

import heroBg from "../../assets/img/join-us-bg.jpg";
import "../JoinUs.css";

export default function JoinUs() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    job: "",
    message: "",
    file: null,
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  /* Animate form on load */
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".join-form-card")?.classList.add("show");
    }, 100);
  }, []);

  /* Handle input */
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : files ? files[0] : value,
    });
  };

  /* Validation */
  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.phone) newErrors.phone = "Phone number is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.job) newErrors.job = "Job title is required";
    // if (!form.agree) newErrors.agree = "You must accept the privacy policy";
    return newErrors;
  };

  /* Submit */
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    emailjs
      .send(
        "****", //service
        "****", //Template
        {
          name: form.name,
          phone: form.phone,
          email: form.email,
          job: form.job,
          message: form.message,
        },
        "****" //Private Key
      )
      .then(() => {
        setSubmitted(true);
      })
      .catch(() => {
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="join-page">
      {/* HERO */}
      <section
        className="join-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-overlay">
          {/* <h1>Join Us</h1> */}
          <h1>Quick registration</h1>
        </div>
      </section>

      {/* FORM */}
      <section className="join-form-wrapper">
        <div className="join-form-card">
          {/* <h1>Quick registration</h1> */}

          {submitted ? (
            <div className="success-message">
              ✅ Thank you! Your application has been sent.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="join-form">
              <div className="form-grid">
                <Input
                  icon={<FaUser />}
                  label="Name"
                  name="name"
                  value={form.name}
                  error={errors.name}
                  onChange={handleChange}
                />
                <Input
                  icon={<FaPhone />}
                  label="Phone"
                  name="phone"
                  value={form.phone}
                  error={errors.phone}
                  onChange={handleChange}
                />
                <Input
                  icon={<FaEnvelope />}
                  label="Email"
                  name="email"
                  value={form.email}
                  error={errors.email}
                  onChange={handleChange}
                />
                <Input
                  icon={<FaBriefcase />}
                  label="Job Title"
                  name="job"
                  value={form.job}
                  error={errors.job}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group full">
                <label>Cover Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group full">
                <label>Attach Resume</label>
                <input type="file" name="file" onChange={handleChange} />
              </div>

              {/* <div className="form-group checkbox">
                <input
                  type="checkbox"
                  name="agree"
                  checked={form.agree}
                  onChange={handleChange}
                />
                <span>I accept the Privacy Policy</span>
              </div> */}

              {errors.agree && (
                <p className="error-text">{errors.agree}</p>
              )}

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

/* INPUT COMPONENT */
function Input({ icon, label, name, value, error, onChange }) {
  return (
    <div className={`form-group ${error ? "error" : ""}`}>
      <label>{label}</label>
      <div className="input-wrapper">
        <span className="input-icon">{icon}</span>
        <input name={name} value={value} onChange={onChange} />
      </div>
      {error && <p className="error-text">{error}</p>}
    </div>
  );
}
