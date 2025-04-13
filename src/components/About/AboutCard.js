import React from "react";
import Card from "react-bootstrap/Card";
import { FaFeatherAlt, FaChartLine, FaGlobeAmericas } from "react-icons/fa";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sashank Boppana</span>{" "}
            from <span className="purple">Gainesville, Florida.</span>
            <br />
            I am currently pursuing my <span className="purple">Master’s in Computer Science at the University of Florida.</span>
            <br />
            I am working as a <span className="purple">Research Assistant at the University of Florida.</span> The research is on <span className="purple">Data Science and AIML</span> applications in genomics.
            <br />
            Previously, I worked as an <span className="purple">AIML Engineer Intern</span> at Evalueserve.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
            <FaFeatherAlt /> Researching and publishing research papers
          </li>
          <li className="about-activity">
            <FaChartLine /> Investing in stocks and cryptocurrencies
          </li>
          <li className="about-activity">
            <FaGlobeAmericas /> Traveling and exploring new places
          </li>

          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
