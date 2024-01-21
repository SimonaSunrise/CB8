import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import Navbar from "../../components/navbar/Navbar";

const About = () => {
  return (
    <div className={styles.About}>
      <Navbar />
      <div className={styles.BoxTitle}>
        <h1>Welcome to BOOK LOVERS 📚</h1>
        <p>
          BOOK LOVERS is your literary haven, dedicated to providing you with
          detailed information about captivating books. We are passionate about
          reading and committed to sharing the joy of discovering new stories.
        </p>
      </div>
      <div className={styles.Box}>
        <h2>Our Mission</h2>
        <p>
          At BOOK LOVERS, our mission is to celebrate the world of literature by
          curating a diverse collection of books that cater to different tastes
          and interests. We aim to be your trusted guide in the literary
          universe.
        </p>

        <h2>Featured Books</h2>
        <p>
          Explore our carefully curated selection of books, ranging from
          bestsellers to hidden gems. Each book is handpicked for its unique
          narrative, engaging characters, and thought-provoking themes.
        </p>
      </div>
      <div className={styles.Contact_Link}>
        <Link to="/contact">
          {" "}
          <h2>Contact Us</h2>
        </Link>
      </div>
    </div>
  );
};

export default About;
