import React from "react";
import heroBg from "../../assets/img/privacy.jpg"; // replace with your actual image
import "../PrivacyPolicy.css";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      {/* HERO */}
      <section
        className="privacy-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="privacy-hero-overlay">
          <h1>Privacy Policy</h1>
          <p>
            Home <span>›</span> Privacy Policy
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="privacy-content">
        <div className="privacy-container">
          <p>
            Bluelight Healthcare Recruitment Limited’s privacy policy uses and
            protects any information that you give Bluelight Healthcare.
            Bluelight Healthcare is committed to ensuring that your privacy is
            protected. Should we ask you to provide certain information by which
            you can be identified when using this website, then you can be
            assured that it will only be used in accordance with this privacy
            statement.
          </p>

          <p>
            Bluelight Healthcare may change this policy from time to time by
            updating this page. You should check this page from time to time to
            ensure that you are happy with any changes. This policy is effective
            from <strong>28th December 2018</strong>.
          </p>

          <h3>What we collect</h3>
          <ul>
            <li>Name and job title</li>
            <li>Contact information including email address</li>
            <li>Location</li>
            <li>Preferences</li>
            <li>Personal sensitive information</li>
          </ul>

          <h3>What we do with the information we gather</h3>
          <p>
            We require this information to understand your needs and provide you
            with a better service, and in particular for the following reasons:
          </p>
          <ul>
            <li>Internal record keeping</li>
            <li>Improving our services</li>
            <li>
              Periodic emails, calls or texts about opportunities or updates
            </li>
            <li>Audit and compliance purposes</li>
          </ul>

          <h3>Security</h3>
          <p>
            We are committed to ensuring that your information is secure. In
            order to prevent unauthorised access or disclosure, we have put in
            place suitable physical, electronic and managerial procedures to
            safeguard and secure the information we collect online.
          </p>

          <h3>Your rights</h3>
          <ul>
            <li>Right of erasure (right to be forgotten)</li>
            <li>Right to withdraw from our services</li>
            <li>Right to complain to the ICO</li>
            <li>Right to object to processing</li>
            <li>Right of subject access</li>
          </ul>

          <h3>Retention</h3>
          <p>
            All data is held for a minimum of 6 years in line with legislative
            guidance, except where legal claims require otherwise.
          </p>

          <h3>Controlling your personal information</h3>
          <p>
            You may request details of personal information which we hold about
            you by emailing{" "}
            <strong>info@bluelighthealthcare.com</strong>.
          </p>

          <h3>How we use cookies</h3>
          <p>
            Cookies help us analyse data about webpage traffic and improve our
            website to tailor it to customer needs. You can choose to accept or
            decline cookies.
          </p>

          <h3>Links to other websites</h3>
          <p>
            Our website may contain links to other websites of interest. Once
            you use these links to leave our site, we do not have any control
            over that other website.
          </p>
        </div>
      </section>
    </div>
  );
}
