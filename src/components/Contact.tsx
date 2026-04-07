import { MdCopyright, MdDownload } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:princerajpit5868@gmail.com" data-cursor="disable">
                princerajpit5868@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+919084486898" data-cursor="disable">
                +91 90844 86898
              </a>
            </p>
            <h4>Location</h4>
            <p>Baraut, Uttar Pradesh, 250611</p>
          </div>
          <div className="contact-box">
            <h4>Resume</h4>
            <a
              href="/resume/Prince_Kumar_CV_Updated.pdf"
              download="Prince_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-resume"
            >
              <MdDownload /> Download Resume
            </a>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/princeKumar7714"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/prince-kumar-23a350301/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social"
            >
              Linkedin
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Prince Kumar</span>
            </h2>
            <h5>
              <MdCopyright /> 2024
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
