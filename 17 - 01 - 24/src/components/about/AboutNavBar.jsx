import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const AboutNavBar = () => {
  return (
    <div className={styles.AboutNavBar}>
      <h1>Welcome to HAPPY TECH </h1>
      <p>
        HAPPY TECH is your go-to destination for the latest in state-of-the-art
        technology products. We are passionate about technology and committed to
        providing our customers with the latest innovations in smartphones,
        tablets, laptops, and more.
      </p>
      <div className={styles.Box}>
        <h2>Our Mission</h2>
        <p>
          At HAPPY TECH, we strive to offer high-quality products that meet the
          technological needs of our customers. We collaborate with leading
          brands to ensure that you have access to the latest innovations and
          top-notch performance.
        </p>

        <h2>Our Products</h2>
        <p>
          In our catalog, you will find a wide selection of smartphones,
          tablets, laptops, accessories, and much more. We stay updated on the
          latest trends and make sure to provide products that cater to the
          needs of those seeking the latest technologies available on the
          market.
        </p>
      </div>
      <div className={styles.Contact_Link}>
        <h2>
          <Link to="/contacts">Contact Us</Link>
        </h2>
        <p>
          We are here to answer your questions and assist you in your choices.
          Contact us through our contact form or visit our contact page for more
          information on how to reach us.
        </p>
      </div>
    </div>
  );
};

export default AboutNavBar;
