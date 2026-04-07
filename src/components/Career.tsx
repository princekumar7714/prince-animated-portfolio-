import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> Training
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.C.A - Bachelor of Computer Applications</h4>
                <h5>Dewan VS Group of Institutions, Meerut</h5>
              </div>
              <h3>2022 - 2025</h3>
            </div>
            <p>
              Currently pursuing B.C.A degree with focus on software development,
              web technologies, and programming fundamentals. Building a strong
              foundation in computer science and practical development skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Development Training</h4>
                <h5>Training Basket Institute, Noida</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed comprehensive Full Stack Development course focusing on
              MERN stack. Gained hands-on experience in building responsive web
              applications, RESTful APIs, authentication systems, database
              integration, and deployment best practices.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior High School</h4>
                <h5>Resonance Public School</h5>
              </div>
              <h3>2020 - 2021</h3>
            </div>
            <p>
              Completed senior secondary education with focus on science and
              mathematics, laying the groundwork for a career in technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
