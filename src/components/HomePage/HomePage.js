import "./homePage.css";
import homePageimg1 from "../../assets/images/homePage1.png";
import homePageimg2 from "../../assets/images/homePage2.png";

const HomePage = () => {
  return (
    <>
      <section className="homePage-section">
        <div className="container">
          <h2 className="homePage-title">Professional Home Pages</h2>
          <p className="homePage-text">
            Attractive and stylish home layouts bring your portfolio website to
            the next level.
          </p>
          <div className="homePage-img-wrapper">
            <div className="homePage-img1">
              <img
                src={homePageimg1}
                alt="HomePage img"
                width={645}
                height={958}
              />
              <p>Home UX Designer</p>
            </div>
            <div className="homePage-img2">
              <img
                src={homePageimg2}
                alt="HomePage img"
                width={645}
                height={958}
              />
              <p>Home UI Designer</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
