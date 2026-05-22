import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2 className="career-heading" style={{ fontSize: "50px", lineHeight: "1.1", fontWeight: 500, textAlign: "center", color: "#fff", margin: "50px 0 100px 0" }}>
          My career <span style={{ color: "#d4af37", fontStyle: "italic", fontFamily: "'Playfair Display', serif" }}>& Education</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-timeline-fill"></div>
            <div className="career-dot"></div>
          </div>
          <div className="career-card career-info-box">
            <div className="career-card-glow"></div>
            <div className="career-card-content">
              <div className="career-card-header">
                <div className="career-role">
                  <h4>B.Tech in Computer Science</h4>
                  <h5>Shri Shankaracharya Technical Campus</h5>
                </div>
                <span className="career-year">2024 - 2028</span>
              </div>
              <p>
                • Relevant Coursework: Data Structures & Algorithms, Database Management Systems, Web Development.<br />
                • Current CGPA: 7.75/10 (1st Year).
              </p>
            </div>
          </div>
          <div className="career-card career-info-box">
            <div className="career-card-glow"></div>
            <div className="career-card-content">
              <div className="career-card-header">
                <div className="career-role">
                  <h4>Higher Secondary (Class XII)</h4>
                  <h5>Manka Public School</h5>
                </div>
                <span className="career-year">2023 - 2024</span>
              </div>
              <p>
                • Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics.
              </p>
            </div>
          </div>
          <div className="career-card career-info-box">
            <div className="career-card-glow"></div>
            <div className="career-card-content">
              <div className="career-card-header">
                <div className="career-role">
                  <h4>Secondary School (Class X)</h4>
                  <h5>Vicon School</h5>
                </div>
                <span className="career-year">2021 - 2022</span>
              </div>
              <p>
                • Scored 81% with a special focus on Computer Fundamentals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
