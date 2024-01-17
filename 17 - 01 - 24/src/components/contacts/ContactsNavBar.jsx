import React from "react";
import styles from "./index.module.scss";

const ContactsNavBar = () => {
  return (
    <section className={styles.Contact}>
      <div>
        <h2>Contact Us</h2>
        <p>If you have any questions feel free to reach out to us!</p>

        <div className={styles.Contact_Info}>
          <div className="info-item">
            <h3>Location</h3>
            <p>Rome, Italy</p>
          </div>

          <div className="info-item">
            <h3>Email</h3>
            <p>info@example.com</p>
          </div>

          <div className="info-item">
            <h3>Phone</h3>
            <p>+39 123 456 789</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsNavBar;
