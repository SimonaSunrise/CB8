import "./index.css";
import Button from "../button/Button";

const Hero = ({ imageUrl, text, ptext }) => {
  return (
    <div className="Hero">
      <img src={imageUrl} alt="imagine" />
      <div className="Hero_text">
        <h4>{text}</h4>
        <p>{ptext}</p>
        <Button textContent="Clicca qua" color="black" />
      </div>
    </div>
  );
};

export default Hero;
