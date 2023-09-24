import React from 'react';
import '../styles/Resume.css'; // Import your resume styles if you have any

function Resume() {
  return (
    <section id="resume" className="resume-section">
      <h2>Resume</h2>
      <div className="pdf-container">
        <embed src="..\..\public\AdelBoussenaneResume.pdf" type="application/pdf" width="100%" height="1000px" />
      </div>
    </section>
  );
}

export default Resume;