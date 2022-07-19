import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ayushi Gupta </span>
            from <span className="purple"> Firozabad, Uttar Pradesh.</span>
            <br />I am a engineer and pursuing BTECH in Computer Science in Ajay Kumar Garg Engineering College in Ghaziabad. I got 10 CGPA in high school and in intermediate i got 87.8%.<br/> I motivated my own small success. I try to learn new technologies everyday.  
            <br />
            <br />
            Apart from developing, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Write Poetry
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Sketching
            </li>
          </ul>

          
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
