import "./case.css";
import caseImg1 from "../../assets/images/case-img1.png";
import caseImg2 from "../../assets/images/case-img2.png";

const Case = () => {
  return (
    <section className="case-section">
      <div className="container">
        <h2 className="case-title">Stunning Case Studies</h2>
        <p className="case-text">
          Create an optimal visual experience for your users with these
          inspiring layouts.
        </p>

        <div className="caseImg-wrapper">
            <div className="caseImg1">
                <img src={caseImg1} alt="Case Image" width={645} height={881} />
                <p>About Me</p>
            </div>
            <div className="caseImg2">
                <img src={caseImg2} alt="Case Image" width={645} height={881} />
                <p>Blog</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Case;
