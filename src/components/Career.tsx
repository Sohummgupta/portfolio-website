import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>Shri Shankaracharya Technical Campus</h5>
              </div>
              <h3>2024 - 2028</h3>
            </div>
            <p>
              • Relevant Coursework: Data Structures & Algorithms, Database Management Systems, Web Development.<br />
              • Current CGPA: 7.75/10 (1st Year).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary (Class XII)</h4>
                <h5>Manka Public School</h5>
              </div>
              <h3>2023 - 2024</h3>
            </div>
            <p>
              • Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary School (Class X)</h4>
                <h5>Vicon School</h5>
              </div>
              <h3>2021 - 2022</h3>
            </div>
            <p>
              • Scored 81% with a special focus on Computer Fundamentals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
