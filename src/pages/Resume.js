import React from 'react';
import Download from "../assets/icons/download.png";

function Resume() {
  return (
    <div className="page-div">
    <h2 className="resume-header">
      Resume
      <a
      
        href="https://docs.google.com/document/d/12gt4Ii750gwKVcg3qtK3H8CWZUBHpvudafXOnKB2hl0/export?format=pdf"
        download
        className="resume-link"
      >
        <img className="download-icon" src={Download} alt="Button to download a pdf"></img>
      </a>
    </h2>
    <h3 className="prof-header">Proficiencies</h3>
    <div className="page-body skill-list">
      <div className="front-list">
        
        <h4 className="skill-header">Front End</h4>
        <ul>

          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
          <li>jQuery</li>
          <li>React</li>
          <li>Object Oriented Programming (OOP)</li>
        </ul>
      </div>
      <div className="back-list">
        <h4 className="skill-header">Back End</h4>
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>REST</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  </div>
  );
}

export default Resume;