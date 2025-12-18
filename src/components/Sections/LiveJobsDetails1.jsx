import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import heroBg from "../../assets/img/refer.jpg";
import "../LiveJobsDetails.css";

export default function LiveJobDetails() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    source: "",
    experience: false,
    rightToWork: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const canSubmit =
    form.name &&
    form.email &&
    form.phone &&
    form.experience &&
    form.rightToWork;

  /* EMAILJS SUBMIT */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;

    setLoading(true);
    setError("");

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          job_title: "Band 5 Nurse (RGN, A&E, RMN, PAEDIATRIC)",
          job_location: "Conquest Hospital, TN37 7RD",
          name: form.name,
          email: form.email,
          phone: form.phone,
          location: form.location,
          source: form.source,
          experience: form.experience ? "Yes" : "No",
          right_to_work: form.rightToWork ? "Yes" : "No",
        },
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        setSuccess(true);
        setLoading(false);
      })
      .catch(() => {
        setError("Please try again.");
        setLoading(false);
      });
  };

  return (
    <div className="live-job-page">
      {/* HERO */}
      <section
        className="live-job-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-overlay">
          <h1>Live Jobs</h1>
        </div>

        {/* <div className="hero-job-strip">
          <h2>Band 5 Nurse (RGN, A&E, RMN, PAEDIATRIC)</h2>
          <div className="job-meta">
            📍 Conquest Hospital, TN37 7RD | 🩺 Nurse | ££ Very competitive
          </div>
        </div> */}
      </section>

      {/* CONTENT */}
      <section className="live-job-content">
        {/* LEFT */}
        {/* <div className="job-description">
          <p>We are looking for RGN, A&E, RMN and Paeds.</p>
          <p>Should be band 5.</p>
        </div> */}

        {/* RIGHT */}
        <div className="job-apply-card">
          <div className="apply-header">Apply for a role</div>

          {success ? (
            <div className="success-message">
              ✅ Application submitted successfully
            </div>
          ) : (
            <form className="apply-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div>
                  <label>Your Full name</label>
                  <input
                    name="name"
                    onChange={handleChange}
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label>Your Email</label>
                  <input
                    name="email"
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="form-row">
                <div>
                  <label>Phone number</label>
                  <input
                    name="phone"
                    onChange={handleChange}
                    placeholder="Phone number"
                  />
                </div>
                <div>
                  <label>Location</label>
                  <input
                    name="location"
                    onChange={handleChange}
                    placeholder="Location"
                  />
                </div>
              </div>

              <div className="form-row full">
                <label>Where did you hear about us?</label>
                <input
                  name="source"
                  onChange={handleChange}
                  placeholder="Where did you hear about us"
                />
              </div>

              <div className="checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="experience"
                    onChange={handleChange}
                  />
                  I have at least 6 months experience
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="rightToWork"
                    onChange={handleChange}
                  />
                  I have the right to work in the UK
                </label>
              </div>

              {error && <p className="error-text">{error}</p>}

              <button
                type="submit"
                className="send-btn"
                disabled={!canSubmit || loading}
              >
                {loading ? "SENDING..." : "SEND"}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
