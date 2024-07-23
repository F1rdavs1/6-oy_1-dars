import "./supportive.css"
import SupportiveImg1 from "../../assets/images/supportive-img1.png"
import SupportiveImg2 from "../../assets/images/supportive-img2.png"
import SupportiveImg3 from "../../assets/images/supportive-img3.png"
import SupportiveImg4 from "../../assets/images/supportive-img4.png"

const Supportive = () => {
    return (
        <section className="supportive-section">
            <div className="container">
                <h2 className="supportive-title">Supportive Pages</h2>
                <p className="supportive-text">Feel the feature of creativity with these inner page layouts that perfectly match your site.</p>
                <div className="supportive-img-wrapper1">
                    <div className="supportive-img1">
                        <img src={SupportiveImg1} alt="Supportive Image" width={645} height={881}/>
                        <p>About Me</p>
                    </div>
                    <div className="supportive-img2">
                        <img src={SupportiveImg2} alt="Supportive Image" width={645} height={881}/>
                        <p>Blog</p>
                    </div>
                </div>
                <div className="supportive-img-wrapper2">
                    <div className="supportive-img3">
                        <img src={SupportiveImg1} alt="Supportive Image" width={645} height={881}/>
                        <p>Blog Single</p>
                    </div>
                    <div className="supportive-img4">
                        <img src={SupportiveImg2} alt="Supportive Image" width={645} height={881}/>
                        <p>Contact Us</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Supportive