import Button from "../Button/button";
import HeroImage from "../../assets/images/hero-img2.png";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero">
          <h1 className="hero-paragraph">
            Tell your creativity to the world with{" "}
            <span className="hero-uiuxer">UIUXer</span>
          </h1>
          <p className="hero-text">
            UIUXer is a creative, minimal, and cleanly designed personal and
            portfolio Webflow template.
          </p>
          <div className="btn-wrapper">
            <Button title={"Buy Template"} bgbtn={false} />
            <Button title={"Explore Page"} bgbtn={true} />
          </div>
          <img
            className="hero-img2"
            src={HeroImage}
            alt="Hero image"
            width={203}
            height={205}
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
