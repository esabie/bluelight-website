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
            statement. Bluelight Healthcare may change this policy from time to time by
            updating this page. You should check this page from time to time to
            ensure that you are happy with any changes. This policy is effective
            from 28th December 2018.
          </p>

          <h3>What we collect</h3>
            <li>Name and job title</li>
            <li>Contact information including email address</li>
            <li>Location</li>
            <li>Preferences</li>
            <li>Personal sensitive information</li>

          <h3>What we do with the information we gather</h3>
          <p>
            We require this information to understand your needs and provide you
            with a better service, and in particular for the following reasons:
          </p>

          <li><strong> Internal record keeping</strong></li>
          <p>
            We may use the information to improve our services. We may periodically, 
            call, text, send emails and post about information which we think you 
            may find interesting using the details which you have provided. We may 
            use this data for audit and compliance purposes.
          </p>
          <li><strong> Security</strong></li>
          <p>
            We are committed to ensuring that your information is secure. To prevent 
            unauthorized access or disclosure, we have put in place suitable physical, 
            electronic and managerial procedures to safeguard and secure the information
             we collect online. Should there ever be a breach of data security, this 
             would be reported to the Information Commissioners Office (ICO).
          </p>
          <li><strong> Your rights</strong></li>
          <p>
            Your rights are outlined below but are not exhaustive:
          </p>
          <ul>
            <li>Right of erasure (sometimes referred to as ‘the right to be forgotten')</li>
            <li>Right to withdraw from using our services</li>
            <li>Right to complain to the ICO (If you believe we have not protected your data)</li>
            <li>Right to object to processing</li>
            <li>Right of subject access (there may be a fee associated with receiving this data)</li>
          </ul>

          <li><strong> Retention</strong></li>
          <p>
            All data is held for a minimum of 6 years in line with legislative guidance. Except in 
            cases for the defence, establishment or exercise of legal claims.
          </p>

          <li><strong> Controlling your personal information</strong></li>
          <p>
            We will not sell, distribute or lease your personal information to third parties unless 
            we have your permission, it is in your legitimate interests or we are required by law to 
            do so. If you believe that any information we are holding on you is incorrect or incomplete, 
            please speak to your local branch. We will promptly correct any information found to be 
            incorrect. Subject access requests can be requested by emailing info@bluelighthealthcare.com. 
            This can be sent to you electronically and there may be a nominal fee incurred for this. If 
            you find it impossible or unreasonably difficult to request in writing, we will, under the 
            Equality Act 2010 assist you with making any requests.
          </p>

          <li><strong> How we use cookies</strong></li>
          <p>
            A cookie is a small file which asks permission to be placed on your computer’s hard drive. 
            Once you agree, the file is added and the cookie helps analyze web traffic or lets you know 
            when you visit a particular site. Cookies allow web applications to respond to you as an 
            individual. The web application can tailor its operations to your needs, likes and dislikes 
            by gathering and remembering information about your preferences. We use traffic log cookies 
            to identify which pages are being used. This helps us analyze data about webpage traffic 
            and improve our website to tailor it to customer needs. We only use this information for 
            statistical analysis purposes and then the data is removed from the system. Overall, cookies 
            help us provide you with a better website by enabling us to monitor which pages you find 
            useful and which you do not. A cookie in no way gives us access to your computer or any 
            information about you, other than the data you choose to share with us. You can choose to 
            accept or decline cookies. Most web browsers automatically accept cookies, but you can 
            usually modify your browser setting to decline cookies if you prefer. This may prevent you 
            from taking full advantage of the website.
          </p>

          <li><strong> Links to other websites</strong></li>
          <p>
            Our website may contain links to other websites of interest. However, once you have used 
            these links to leave our site, you should note that we do not have any control over that 
            other website. Therefore, we cannot be responsible for the protection and privacy of any 
            information which you provide whilst visiting such sites and such sites are not governed 
            by this privacy statement. You should exercise caution and look at the privacy statement 
            applicable to the website in question.
          </p>
            
        </div>
      </section>
    </div>
  );
}
